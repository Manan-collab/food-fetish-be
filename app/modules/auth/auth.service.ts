import { createToken } from "../../utility/authorization";
import { comparePassword } from "../../utility/password";
import userService from "../user/user.service";
import { AUTH_RESPONSE } from "./auth.constant";
import { ICredentials } from "./auth.type";

const login = async (credentials: ICredentials) => {
  try {
    const user = await userService.getOneUserByEmail(credentials.email);
    if (!user) {
      throw AUTH_RESPONSE.NOT_FOUND;
    }
    
    const isPasswordValid = await comparePassword(credentials.password, user.password);
    if (!isPasswordValid) {
      throw AUTH_RESPONSE.UNAUTHORIZED;
    }

    const token = createToken({ id: user.id, email: user.email });
    return { token };

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default { login };