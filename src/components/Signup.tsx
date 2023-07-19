import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface FormValues {
  user: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  terms: string;
}

const SignupContainer = styled.div`
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
  align-items: center;
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

const SignInLink = styled(Link)`
  font-size: 0.875rem;
  color: #3182ce;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Signup: React.FC = () => {
  const initialValues: FormValues = {
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    terms: "",
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    // ... rest of the validation logic ...

    return errors;
  };

  return (
    <SignupContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <FormContainer>
          <FormTitle>Sign Up</FormTitle>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormField
            type="text"
            name="user"
            placeholder="Enter your username"
          />
          <ErrorMessage name="user" component={ErrorMessageText} />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormField type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component={ErrorMessageText} />

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

          <FormLabel>
            <Field type="checkbox" name="terms" className="mr-1" />
            Accept Terms and Conditions
          </FormLabel>
          <ErrorMessage name="terms" component={ErrorMessageText} />

          <FormButton type="submit">Sign Up</FormButton>
          <SignInLink
            to="/"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Sign In
          </SignInLink>
        </FormContainer>
      </Formik>
    </SignupContainer>
  );
};

export default Signup;
