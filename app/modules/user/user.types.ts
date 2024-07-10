export interface IUser {
  name: string;
  email: string;
  password: string;
  username: string;
}

export class userResponses {
  constructor(public statusCode: number, public message: string) {}
}
