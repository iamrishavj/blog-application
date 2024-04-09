import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import { expressjwt as expressJwt } from "express-jwt";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Proxy configuration for User Service
app.use(
  "/api/users",
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/users": "" },
  })
);

// Proxy configuration for Blog Service
app.use(
  "/api/posts",
  createProxyMiddleware({
    target: process.env.BLOG_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/posts": "" },
  })
);

// JWT validation middleware
const jwtMiddleware = expressJwt({
  secret: process.env.JWT_SECRET!,
  algorithms: ["HS256"],
}).unless({
  path: [
    "/api/users/login",
    "/api/users/register",
    { url: "/api/posts", methods: ["GET"] }, // Exclude GET request on root path
  ],
}); // Exclude authentication routes

app.use(jwtMiddleware);

app.listen(PORT, () => {
  console.log(`Gateway API running on port ${PORT}`);
});
