import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth-context component/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Validation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  return (
    <>
      <h1>Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Validation}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            const { email, password, firstName } = values;
            await register(email, password, firstName);
            toast.success("Registration succcessful");
            navigate("/dashboard");
            console.log(firstName);
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
              <Field
                name="firstName"
                type="text"
                placeholder="First Name"
              ></Field>
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <Field
                name="lastName"
                type="text"
                placeholder="Last Name"
              ></Field>
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </div>
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
              Register
            </button>

            <Link to="/login">Login</Link>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
