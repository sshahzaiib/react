import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid Email"),
  password: Yup.string().required("Required").min(8, "Min 8 characters"),
});

const LoginForm = () => {
  const history = useHistory()

  return <Formik
  initialValues={{ email: "", password: "" }}
  validationSchema={validationSchema}
  validateOnBlur={false}
  validateOnChange={false}
  onSubmit={(values, { setSubmitting }) => {
    axios
      .post(
        "https://asia-east2-tweeter-d4a6d.cloudfunctions.net/api/login",
        values
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("token", response.data.token);
        history.push("/profile")
      })
      .catch((error) => {
        console.error(error);
      });
    setSubmitting(false);
  }}>
  {({ isSubmitting }) => (
    <Form>
      <Field type="email" name="email" />
      <ErrorMessage name="email" component="div" />
      <Field type="password" name="password" />
      <ErrorMessage name="password" component="div" />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  )}
</Formik>

}

export default LoginForm;
