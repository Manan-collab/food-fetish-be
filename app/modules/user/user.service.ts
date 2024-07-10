import { sendMail } from "../../utility/email";
import { createHashedPassword, createUsername } from "../../utility/password";
import { USER_RESPONSES } from "./user.constant";
import userRepo from "./user.repo";
import { IUser } from "./user.types";

const addUser = async (user: IUser) => {
  try {
    const username = createUsername(user.email);
    const hashedPassword = createHashedPassword(user.password);

    const newUser = {
      ...user,
      username,
      password: hashedPassword,
    };

    await userRepo.addUser(newUser);
    sendMail(
      user.email,
      "Thank You for Signing your account!!!",
      `Hii ${username},
      Hope you are hongry for some food action!!!`
    );
    return USER_RESPONSES.USER_ADDED;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await userRepo.getAllUsers();
    return users;
  } catch (error) {
    console.error(error);
    throw USER_RESPONSES.NOT_FOUND;
  }
};

const getOneUserById = async (id: string) => {
  try {
    const user = await userRepo.getOneUserById(id);
    if (user) {
    return user;
    } return USER_RESPONSES.NOT_FOUND;
  } catch (error) {
    console.error(error);
    throw USER_RESPONSES.NOT_FOUND;
  }
};

const getOneUserByEmail = async (email: string) => {
  try {
    const user = await userRepo.getOneUserByEmail(email);
    return user;
  } catch (error) {
    console.error(error);
    throw USER_RESPONSES.NOT_FOUND;
  }
};

const deleteUser = async (id: string) => {
  try {
    await userRepo.deleteUser(id);
    return USER_RESPONSES.USER_DELETED;
  } catch (error) {
    throw USER_RESPONSES.NOT_FOUND;
  }
};

const editPassword = async (email: string, password: string) => {
  try {
    await userRepo.updateUser(email, password);
    return USER_RESPONSES.USER_UPDATED;
  } catch (error) {
    console.error(error);
    throw USER_RESPONSES.NOT_FOUND;
  }
};

export default {
  addUser,
  deleteUser,
  getOneUserById,
  getOneUserByEmail,
  getAllUsers,
  editPassword,
};
