import React from "react";
import { UserSchema } from "../../Service/UserSevices";
import { Formik, Form, Field } from "formik";
import Styles from "./index.style";
import { history } from "../../Layout/Admin";

const Login = () => {
  return (
    <Styles>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={UserSchema}
        onSubmit={(values) => {
          console.log("values", values);
          history.push('/')
        }}
      >
        {(props) => {
          const { values, errors, touched, handleChange } = props;
          return (
            <Form
              style={{ paddingTop: 120 }}
              className="from-group form-container"
            >
              <h2>LOGIN</h2>
              <Field
                type="email"
                values={values.email}
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="form-control w-25 my-2"
              />
              {errors.email && touched.email && (
                <p className="text-danger">{errors.email}</p>
              )}
              <Field
                type="text"
                values={values.password}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="form-control w-25 my-2"
              />
              {errors.password && touched.password && (
                <p className="text-danger">{errors.password}</p>
              )}
              <div>
                <button type="submit" className="btn mt-2 btn-outline-primary">
                  Login
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Styles>
  );
};

export default Login;
