import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAccountData } from "../../features/formSlice";
import { AccountDataFormValues } from "../../models/DataFormValues";
import styled from "styled-components";

const AccountDataContainer = styled.div`
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

const AccountData: React.FC = () => {
  const dispatch = useDispatch();
  const accountData = useSelector(
    (state: { form: { accountData: AccountDataFormValues } }) =>
      state.form.accountData
  );
  const navigate = useNavigate();

  const initialValues: AccountDataFormValues = {
    username: accountData.username,
    password: accountData.password,
    confirmPassword: accountData.confirmPassword,
  };

  const handleSubmit = (values: AccountDataFormValues) => {
    dispatch(updateAccountData(values));
    console.log(values);
    navigate("/Registro/Summary");
  };

  const validateForm = (values: AccountDataFormValues) => {
    const errors: Partial<AccountDataFormValues> = {};

    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must match";
    }

    return errors;
  };

  return (
    <AccountDataContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <FormContainer>
          <FormTitle>Account Data</FormTitle>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormField
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          <ErrorMessage name="username" component={ErrorMessageText} />

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormField
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component={ErrorMessageText} />

          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <FormField
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          <ErrorMessage name="confirmPassword" component={ErrorMessageText} />

          <PreviousStepLink
            to="/Registro/EmploymentData"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Previous Step
          </PreviousStepLink>
          <FormButton type="submit">Next Step</FormButton>
        </FormContainer>
      </Formik>
    </AccountDataContainer>
  );
};

export default AccountData;
