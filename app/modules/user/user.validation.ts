import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const AddUserValidator = [
  body("email")
    .isString()
    .notEmpty()
    .withMessage("Please enter your email address"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Please enter your password"),
  body("name").isString().notEmpty().withMessage("Please enter your name"),
  body("profilePicture")
    .isString()
    .optional()
    .withMessage("Please attach a profile picture"),
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
