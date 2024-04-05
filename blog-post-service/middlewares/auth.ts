import { expressjwt } from "express-jwt";

// Assuming your secret key is stored in an environment variable
const secret = process.env.JWT_SECRET;

export const checkJwt = expressjwt({
  secret: process.env.JWT_SECRET as string,
  algorithms: ["HS256"],
  credentialsRequired: true, // This enforces that requests without a valid token are rejected
});
