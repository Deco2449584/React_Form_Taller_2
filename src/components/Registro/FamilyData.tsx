import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFamilyData } from "../../features/formSlice";
import { FamilyDataFormValues } from "../../models/DataFormValues";
import styled from "styled-components";

const FamilyDataContainer = styled.div`
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

const FamilyData: React.FC = () => {
  const dispatch = useDispatch();
  const familyData = useSelector(
    (state: { form: { familyData: FamilyDataFormValues } }) =>
      state.form.familyData
  );
  const navigate = useNavigate();

  const initialValues: FamilyDataFormValues = {
    parentName: familyData.parentName,
    siblingName: familyData.siblingName,
    maritalStatus: familyData.maritalStatus,
  };

  const handleSubmit = (values: FamilyDataFormValues) => {
    dispatch(updateFamilyData(values));
    console.log(values);
    navigate("/Registro/EmploymentData"); // Redireccionar a la página "FamilyData"
  };

  const validateForm = (values: FamilyDataFormValues) => {
    const errors: Partial<FamilyDataFormValues> = {};

    if (!values.parentName) {
      errors.parentName = "Required";
    }

    if (!values.siblingName) {
      errors.siblingName = "Required";
    }

    /* if (!values.maritalStatus) {
      errors.maritalStatus = "Required";
    } */

    return errors;
  };

  return (
    <FamilyDataContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <FormContainer>
          <FormTitle>Family Data</FormTitle>
          <FormLabel htmlFor="parentName">Parent's Name</FormLabel>
          <FormField
            type="text"
            name="parentName"
            placeholder="Enter your parent's name"
          />
          <ErrorMessage name="parentName" component={ErrorMessageText} />

          <FormLabel htmlFor="siblingName">Sibling's Name</FormLabel>
          <FormField
            type="text"
            name="siblingName"
            placeholder="Enter your sibling's name"
          />
          <ErrorMessage name="siblingName" component={ErrorMessageText} />

          <FormLabel htmlFor="maritalStatus">Marital Status</FormLabel>
          <FormField as="select" name="maritalStatus">
            <option value="">Select marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </FormField>
          <ErrorMessage name="maritalStatus" component={ErrorMessageText} />

          <PreviousStepLink
            to="/Registro/AcademicData"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Previous Step
          </PreviousStepLink>
          <FormButton type="submit">Next Step</FormButton>
        </FormContainer>
      </Formik>
    </FamilyDataContainer>
  );
};

export default FamilyData;
