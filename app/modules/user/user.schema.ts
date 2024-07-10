import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IUser } from "./user.types";

const userSchema = new BaseSchema({
  profilePicture: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
    default: 0,
  },
  followings: {
    type: Number,
    required: true,
    default: 0,
  },
});

type IUserDocument = Document & IUser;
const UserModel = model<IUserDocument>("User", userSchema);
export default UserModel;
