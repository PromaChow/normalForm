import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const formSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter your phone number"),
  gender: Yup.string().required("Please choose a gender"),
  category: Yup.array().min(2, "Pick at least 2 categories"),
});
