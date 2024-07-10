import { NextFunction, Response, Request, Router } from "express";
import userService from "./user.service";
import { ResponseHandler } from "../../utility/response-handler";
import { IUser } from "./user.types";
import { AddUserValidator } from "./user.validation";
import { verifyToken } from "../../utility/authorization";

export const UserRouter = Router();

UserRouter.post(
  "/",
  AddUserValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userService.addUser(req.body as IUser);
      return res.send(new ResponseHandler(user));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

UserRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAllUsers();
    return res.send(new ResponseHandler(users));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

UserRouter.get("/userDetails", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = res.locals.user;
    const user = await userService.getOneUserById(userData?.id);
    return res.send(new ResponseHandler(user));
  } catch (error) {
    console.error(error);
    next(error);
  }
})
