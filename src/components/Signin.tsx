import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

interface SignInProps {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const initialValues: SignInProps = {
    username: "",
    password: "",
  };

  const handleSubmit = (values: SignInProps) => {
    console.log(values);
  };

  const validateForm = (values: SignInProps) => {
    const errors: Partial<SignInProps> = {};

    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(values.password)
    ) {
      errors.password =
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit";
    }

    return errors;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <div className="mt-4">
              <Link
                to="/Login/forgot"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Forgot Password
              </Link>
            </div>
            <div className="mt-2">
              <Link
                to="/"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Home
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
