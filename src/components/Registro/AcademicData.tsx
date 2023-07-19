import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAcademicData } from "../../features/formSlice";
import { AcademicDataFormValues } from "../../models/DataFormValues";
import styled from "styled-components";

const AcademicDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled(Form)`
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 2rem;
`;

const FormLabel = styled.label`
  font-size: 0.875rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 0.5rem;
`;

const FormField = styled(Field)`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  outline: none;
  font-size: 0.875rem;
  color: #333333;

  &:focus {
    border-color: #3182ce;
  }
`;

const ErrorMessageText = styled.div`
  font-size: 0.75rem;
  color: #e53e3e;
  margin-top: 0.25rem;
`;

const FormButton = styled.button`
  background-color: #3182ce;
  color: #ffffff;
  font-weight: bold;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #2c5282;
  }
`;

const PreviousStepLink = styled(Link)`
  font-size: 0.875rem;
  color: #3182ce;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

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
    <AcademicDataContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <FormContainer>
          <FormTitle>Academic Data</FormTitle>
          <FormLabel htmlFor="degree">Degree</FormLabel>
          <FormField
            type="text"
            name="degree"
            placeholder="Enter your degree"
          />
          <ErrorMessage name="degree" component={ErrorMessageText} />

          <FormLabel htmlFor="institution">Institution</FormLabel>
          <FormField
            type="text"
            name="institution"
            placeholder="Enter your institution"
          />
          <ErrorMessage name="institution" component={ErrorMessageText} />

          <FormLabel htmlFor="year">Year</FormLabel>
          <FormField
            type="number"
            name="year"
            placeholder="Enter your graduation year"
          />
          <ErrorMessage name="year" component={ErrorMessageText} />

          <PreviousStepLink
            to="/Registro/PersonalData"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Previous Step
          </PreviousStepLink>
          <FormButton type="submit">Next Step</FormButton>
        </FormContainer>
      </Formik>
    </AcademicDataContainer>
  );
};

export default AcademicData;
