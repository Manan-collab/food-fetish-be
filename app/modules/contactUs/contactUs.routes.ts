import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import contactUsService from "./contactUs.service";
import { IContactUs } from "./contactUs.types";
import { ContactUsValidator } from "./contactUs.validation";

export const ContactUsRouter = Router();

ContactUsRouter.post(
  "/",
  ContactUsValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const formData = await contactUsService.sendContactUsForm(
        req.body as IContactUs
      );
      return res.send(new ResponseHandler(formData));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);
