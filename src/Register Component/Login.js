import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth-context component/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Validation = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Validation}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            const { email, password } = values;
            await login(email, password);
            toast.success("Registration succcessful");
            navigate("/dashboard");
          } catch (error) {
            console.log(error);
            toast.error(error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field name="email" type="email" placeholder="Email"></Field>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
              ></Field>

              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
