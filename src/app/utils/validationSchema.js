import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Username or Email is required"),
  password: Yup.string().required("Password is required"),
});

export default validationSchema;
