import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAcademicData } from "../../features/formSlice";
import { AcademicDataFormValues } from "../../models/DataFormValues";

const AcademicData: React.FC = () => {
  const dispatch = useDispatch();
  const academicData = useSelector(
    (state: { form: { academicData: AcademicDataFormValues } }) =>
      state.form.academicData
  );
  const navigate = useNavigate();

  const initialValues: AcademicDataFormValues = {
    degree: academicData.degree,
    institution: academicData.institution,
    year: academicData.year,
  };

  const handleSubmit = (values: AcademicDataFormValues) => {
    dispatch(updateAcademicData(values));
    navigate("/Registro/FamilyData"); // Redireccionar a la página "FamilyData"
  };

  const validateForm = (values: AcademicDataFormValues) => {
    const errors: Partial<AcademicDataFormValues> = {};

    if (!values.degree) {
      errors.degree = "Required";
    }

    if (!values.institution) {
      errors.institution = "Required";
    }

    if (!values.year) {
      errors.year = "Required";
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
              htmlFor="degree"
            >
              Degree
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="degree"
              type="text"
              name="degree"
              placeholder="Enter your degree"
            />
            <ErrorMessage
              name="degree"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="institution"
            >
              Institution
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="institution"
              type="text"
              name="institution"
              placeholder="Enter your institution"
            />
            <ErrorMessage
              name="institution"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="year"
            >
              Year
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="year"
              type="number"
              name="year"
              placeholder="Enter your graduation year"
            />
            <ErrorMessage
              name="year"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="flex justify-between">
            <Link
              to="/Registro/PersonalData"
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

export default AcademicData;
