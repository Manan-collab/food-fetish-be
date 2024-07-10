import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const LoginValidator = [
  body("email")
    .isString()
    .notEmpty()
    .withMessage("Please enter your email address"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Please enter your password"),
  validate,
];

export const SignUpValidator = [
  body("name").isString().notEmpty().withMessage("Please enter your name"),
  body("email")
    .isString()
    .notEmpty()
    .withMessage("Please enter your email address"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Please enter your password"),
  validate,
];
