import { sendMail } from "../../utility/email";
import { CONTACT_US_RESPONSES } from "./contactUs.constant";
import contactUsRepo from "./contactUs.repo";
import { IContactUs } from "./contactUs.types";

const sendContactUsForm = async (formData: IContactUs) => {
  try {
    await contactUsRepo.sendContactUsForm(formData);
    sendMail(formData.email, "New Support Inquiry", `${formData}`);
    return CONTACT_US_RESPONSES.FORM_SUBMITTED_SUCCESSFULLY;
  } catch (error) {
    console.error(error);
    return CONTACT_US_RESPONSES.FORM_SUBMITTED_UNSUCCESSFULLY;
  }
};

export default {
  sendContactUsForm,
};
