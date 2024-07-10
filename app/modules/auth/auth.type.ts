export interface ICredentials {
  email: string;
  password: string;
}

export interface IPassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export class AuthResponses {
  constructor(public statusCode: number, public message: string) {}
}
