import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IContactUs } from "./contactUs.types";

const contactUsSchema = new BaseSchema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

type IContactUsDocument = Document & IContactUs;
const ContactUsModel = model<IContactUsDocument>("ContactUs", contactUsSchema);
export default ContactUsModel;
