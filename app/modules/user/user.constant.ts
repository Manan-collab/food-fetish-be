import { userResponses } from "./user.types";

export const USER_RESPONSES = {
  NOT_ADDED: new userResponses(404, "USER NOT ADDED"),
  NOT_FOUND: new userResponses(404, "USER NOT FOUND"),
  USER_ADDED: new userResponses(201, "USER ADDED"),
  USER_DELETED: new userResponses(204, "USER DELETED"),
  USER_UPDATED: new userResponses(204, "USER UPDATED"),
  INVALID_CREDENTIALS: new userResponses(404, "INVALID CREDENTIALS"),
};
