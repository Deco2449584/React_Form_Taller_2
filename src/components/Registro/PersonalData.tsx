import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalData } from "../../features/formSlice";
import { PersonalDataFormValues } from "../../models/DataFormValues";

const PersonalData: React.FC = () => {
  const dispatch = useDispatch();
  const personalData = useSelector(
    (state: { form: { personalData: PersonalDataFormValues } }) =>
      state.form.personalData
  );
  const navigate = useNavigate();

  const initialValues: PersonalDataFormValues = {
    firstName: personalData.firstName,
    lastName: personalData.lastName,
    birthDate: personalData.birthDate,
    gender: personalData.gender,
  };

  const handleSubmit = (values: PersonalDataFormValues) => {
    dispatch(updatePersonalData(values));
    navigate("/Registro/AcademicData"); // Redireccionar a la página "Academicos"
  };

  const validateForm = (values: PersonalDataFormValues) => {
    const errors: Partial<PersonalDataFormValues> = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.birthDate) {
      errors.birthDate = "Required";
    }

    if (!values.gender) {
      errors.gender = "Required";
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
              htmlFor="firstName"
            >
              First Name
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="birthDate"
            >
              Birth Date
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="birthDate"
              type="date"
              name="birthDate"
              placeholder="Select your birth date"
            />
            <ErrorMessage
              name="birthDate"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <Field
              as="select"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="flex justify-between">
            <Link to="/" className="text-blue-500 hover:text-blue-700 text-sm">
              Home
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Next Step
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalData;
