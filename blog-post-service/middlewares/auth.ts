import { expressjwt } from "express-jwt";

export const checkJwt = expressjwt({
  secret: process.env.JWT_SECRET as string,
  algorithms: ["HS256"],
  credentialsRequired: true, // This enforces that requests without a valid token are rejected
});
