import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface SignInProps {
  username: string;
  password: string;
}

const SignInContainer = styled.div`
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

const ForgotPasswordLink = styled(Link)`
  font-size: 0.875rem;
  color: #3182ce;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
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
const Containerlink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignIn: React.FC = () => {
  const initialValues: SignInProps = {
    username: "",
    password: "",
  };

  const handleSubmit = (values: SignInProps) => {
    console.log(values);
  };

  const validateForm = (values: SignInProps) => {
    const errors: Partial<SignInProps> = {};

    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(values.password)
    ) {
      errors.password =
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit";
    }

    return errors;
  };

  return (
    <SignInContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <FormContainer>
          <FormTitle>Sign In</FormTitle>
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
          <FormButton type="submit">Sign In</FormButton>

          <Containerlink>
            <ForgotPasswordLink to="/Login/forgot">
              Forgot Password
            </ForgotPasswordLink>
            <HomeLink to="/">Home</HomeLink>
          </Containerlink>
        </FormContainer>
      </Formik>
    </SignInContainer>
  );
};

export default SignIn;
