import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const PostValidator = [
  body("postImageUrl")
    .isString()
    .notEmpty()
    .withMessage("Please add your image"),
  validate,
];
