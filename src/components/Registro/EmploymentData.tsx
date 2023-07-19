import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmploymentData } from "../../features/formSlice";
import { EmploymentDataFormValues } from "../../models/DataFormValues";
import styled from "styled-components";

const EmploymentDataContainer = styled.div`
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
    <EmploymentDataContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <FormContainer>
          <FormTitle>Employment Data</FormTitle>
          <FormLabel htmlFor="companyName">Company Name</FormLabel>
          <FormField
            type="text"
            name="companyName"
            placeholder="Enter your company name"
          />
          <ErrorMessage name="companyName" component={ErrorMessageText} />

          <FormLabel htmlFor="position">Position</FormLabel>
          <FormField
            type="text"
            name="position"
            placeholder="Enter your position"
          />
          <ErrorMessage name="position" component={ErrorMessageText} />

          <FormLabel htmlFor="yearsOfWork">Years of Work</FormLabel>
          <FormField
            type="number"
            name="yearsOfWork"
            placeholder="Enter years of work"
          />
          <ErrorMessage name="yearsOfWork" component={ErrorMessageText} />

          <PreviousStepLink
            to="/Registro/FamilyData"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Previous Step
          </PreviousStepLink>
          <FormButton type="submit">Next Step</FormButton>
        </FormContainer>
      </Formik>
    </EmploymentDataContainer>
  );
};

export default EmploymentData;
