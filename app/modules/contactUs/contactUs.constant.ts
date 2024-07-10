import { contactUsResponses } from "./contactUs.types";

export const CONTACT_US_RESPONSES = {
  FORM_SUBMITTED_SUCCESSFULLY: new contactUsResponses(201, "FORM SUBMITTED SUCCESSFULLY"),
  FORM_SUBMITTED_UNSUCCESSFULLY: new contactUsResponses(201, "FORM NOT SUBMITTED"),
};
