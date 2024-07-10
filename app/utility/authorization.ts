import { NextFunction, Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface IExcludedPaths {
  path: string;
  method: Method;
}

export const createToken = (payload: any) => {
  try {
    const { JWT_SECRET } = process.env;
    const token = sign(payload, JWT_SECRET || "");
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const verifyToken = (token: string) => {
  try {
    const { JWT_SECRET } = process.env;
    const payload = verify(token, JWT_SECRET || "");
    return payload;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const authorize = (excludedPaths: IExcludedPaths[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(
        `Request URL: ${req.url}, Request Path: ${req.path}, Request Method: ${req.method}`
      );

      const isExcluded = excludedPaths.some(
        (e) => e.path === req.path && e.method === req.method.toUpperCase()
      );

      console.log(`Is Excluded: ${isExcluded}`);

      if (isExcluded) {
        return next();
      }

      const authorizationHeader = req.headers.authorization;
      if (!authorizationHeader) {
        throw new Error("Authorization header missing");
      }

      const token = authorizationHeader.split(" ")[1];
      if (!token) {
        throw new Error("Token missing");
      }

      const payload = verifyToken(token);
      res.locals.user = payload;
      next();
    } catch (error) {
      console.error(error);
      next({ statusCode: 403, message: "UNAUTHORIZED" });
    }
  };
};
