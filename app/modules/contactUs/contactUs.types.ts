export interface IContactUs {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export class contactUsResponses {
  constructor(public statusCode: number, public message: string) {}
}
