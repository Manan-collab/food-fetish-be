import { AuthResponses } from "./auth.type";

export const AUTH_RESPONSE = {
    NOT_FOUND: { statusCode: 404, message: "USER NOT FOUND" },
    UNAUTHORIZED: { statusCode: 401, message: "INVALID CREDENTIALS" },  
    INTERNAL: new AuthResponses(500, "USER NOT CREATED"),
    ALREADY_EXIST: new AuthResponses(409, "USERNAME ALREADY EXIST"),
    FORGOT_PASSWORD: new AuthResponses(200, "PLEASE CHECK EMAIL TO RESET THE PASSWORD"),
    RESET_PASSWORD: new AuthResponses(200,"PASSWORD RESET SUCCESSFULLY"),
    PASSWORD_CHANGED: new AuthResponses(201,"PASSWORD CHANGED SUCCESSFULLY")
}