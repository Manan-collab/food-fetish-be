import { NextFunction, Request, Response, Router } from "express";
import { LoginValidator } from "./auth.validation";
import { ResponseHandler } from "../../utility/response-handler";
import { ICredentials } from "./auth.type";
import authService from "./auth.service";

export const AuthRouter = Router();

AuthRouter.post(
  "/login",
  LoginValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await authService.login(req.body as ICredentials);
      res.send(new ResponseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);
