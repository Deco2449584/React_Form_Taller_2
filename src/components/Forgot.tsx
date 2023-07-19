import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface ForgotFormValues {
  email: string;
}

const Forgot: React.FC = () => {
  const initialValues: ForgotFormValues = {
    email: "",
  };

  const handleSubmit = (values: ForgotFormValues) => {
    console.log(values);
  };

  const validateForm = (values: ForgotFormValues) => {
    const errors: Partial<ForgotFormValues> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
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
              htmlFor="email"
            >
              Email
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Reset Link
            </button>
            <div className="mt-4">
              <Link
                to="/Login/"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Back to Sign In
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

export default Forgot;
