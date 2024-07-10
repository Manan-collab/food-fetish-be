import { CONTACT_US_RESPONSES } from "./contactUs.constant";
import ContactUsModel from "./contactUs.schema";
import { IContactUs } from "./contactUs.types";

const sendContactUsForm = async(formData: IContactUs) => {
  try {
    await ContactUsModel.create({ ...formData });
  } catch (error) {
    throw error;
  }
};

export default {
  sendContactUsForm,
};
