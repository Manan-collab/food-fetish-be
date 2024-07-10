import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const ContactUsValidator = [
  body("email")
    .isString()
    .notEmpty()
    .withMessage("Please enter your email address"),
  body("phoneNumber")
    .isString()
    .notEmpty()
    .withMessage("Please enter your phone number"),
  body("name").isString().notEmpty().withMessage("Please enter your name"),
  body("message")
    .isString()
    .notEmpty()
    .withMessage("Please enter your message"),
  validate,
];
