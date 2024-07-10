import UserModel from "./user.schema";
import { IUser } from "./user.types";

const addUser = async (user: IUser) => {
  try {
    return await UserModel.create({ ...user });
  } catch (error) {
    throw error;
  }
};

const getOneUserByEmail = async(email: string) => {
  try {
    return await UserModel.findOne({ email: email, isDeleted: false });
  } catch (error) {
    throw error;
  }
};

const getOneUserById = async (id: string) => {
  return await UserModel.findOne({ _id: id, isDeleted: false });
};

const getAllUsers = async () => {
  try {
    const users = await UserModel.find({ isDeleted: false });
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Database query failed");
  }
};

const deleteUser = async (id: string) => {
  return await UserModel.updateOne({ _id: id }, { $set: { isDeleted: true } });
};

const updateUser = async (password: string, email: string) => {
  return await UserModel.updateOne({ email: email }, { $set: { password: password } });
};

export default {
  addUser,
  getAllUsers,
  getOneUserById,
  deleteUser,
  getOneUserByEmail,
  updateUser,
};
