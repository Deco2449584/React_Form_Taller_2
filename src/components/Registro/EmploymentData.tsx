import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmploymentData } from "../../features/formSlice";
import { EmploymentDataFormValues } from "../../models/DataFormValues";

const EmploymentData: React.FC = () => {
  const dispatch = useDispatch();
  const employmentData = useSelector(
    (state: { form: { employmentData: EmploymentDataFormValues } }) =>
      state.form.employmentData
  );
  const navigate = useNavigate();

  const initialValues: EmploymentDataFormValues = {
    companyName: employmentData.companyName,
    position: employmentData.position,
    yearsOfWork: employmentData.yearsOfWork,
  };

  const handleSubmit = (values: EmploymentDataFormValues) => {
    dispatch(updateEmploymentData(values));
    console.log(values);
    navigate("/Registro/AccountData"); // Redireccionar a la página "FamilyData"
  };

  const validateForm = (values: EmploymentDataFormValues) => {
    const errors: Partial<EmploymentDataFormValues> = {};

    if (!values.companyName) {
      errors.companyName = "Required";
    }

    if (!values.position) {
      errors.position = "Required";
    }

    const yearsOfWork = parseInt(values.yearsOfWork);
    if (isNaN(yearsOfWork) || yearsOfWork < 0) {
      errors.yearsOfWork = "Years of work must be a positive number";
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
              htmlFor="companyName"
            >
              Company Name
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              name="companyName"
              placeholder="Enter your company name"
            />
            <ErrorMessage
              name="companyName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="position"
            >
              Position
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="position"
              type="text"
              name="position"
              placeholder="Enter your position"
            />
            <ErrorMessage
              name="position"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="yearsOfWork"
            >
              Years of Work
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="yearsOfWork"
              type="number"
              name="yearsOfWork"
              placeholder="Enter years of work"
            />
            <ErrorMessage
              name="yearsOfWork"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="flex justify-between">
            <Link
              to="/Registro/FamilyData"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Previous Step
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

export default EmploymentData;
