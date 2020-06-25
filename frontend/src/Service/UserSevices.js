import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email().min(5),
  password: Yup.string().required('Password is required').min(5,"Password min 5 letter")
});
