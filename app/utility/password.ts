import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export const createHashedPassword = (password: string) => {
  try {
    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    const hashedPassword = hashSync(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const comparePassword = (password: string, hashedPassword: string) => {
  try {
    return compareSync(password, hashedPassword);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createUsername = (email: string) => {
  try {
    const username = email.split("@")[0];
    return username;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
