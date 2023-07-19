import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalData } from "../../features/formSlice";
import { PersonalDataFormValues } from "../../models/DataFormValues";

import styled from "styled-components";

const PersonalDataContainer = styled.div`
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

const HomeLink = styled(Link)`
  font-size: 0.875rem;
  color: #3182ce;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

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
    <PersonalDataContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <FormContainer>
          <FormTitle>Personal Data</FormTitle>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <FormField
            type="text"
            name="firstName"
            placeholder="Enter your first name"
          />
          <ErrorMessage name="firstName" component={ErrorMessageText} />

          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <FormField
            type="text"
            name="lastName"
            placeholder="Enter your last name"
          />
          <ErrorMessage name="lastName" component={ErrorMessageText} />

          <FormLabel htmlFor="birthDate">Birth Date</FormLabel>
          <FormField
            type="date"
            name="birthDate"
            placeholder="Select your birth date"
          />
          <ErrorMessage name="birthDate" component={ErrorMessageText} />

          <FormLabel htmlFor="gender">Gender</FormLabel>
          <FormField as="select" name="gender">
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </FormField>
          <ErrorMessage name="gender" component={ErrorMessageText} />

          <HomeLink to="/">Home</HomeLink>
          <FormButton type="submit">Next Step</FormButton>
        </FormContainer>
      </Formik>
    </PersonalDataContainer>
  );
};

export default PersonalData;
