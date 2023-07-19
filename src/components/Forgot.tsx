import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

interface ForgotFormValues {
  email: string;
}

const ForgotContainer = styled.div`
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

const SignInLink = styled(Link)`
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
const Forgot: React.FC = () => {
  const initialValues: ForgotFormValues = {
    email: "",
  };

  const handleSubmit = (values: ForgotFormValues) => {
    console.log(values);
    alert(values.email);
  };

  const validateForm = (values: ForgotFormValues) => {
    const errors: Partial<ForgotFormValues> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  return (
    <ForgotContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <FormContainer>
          <FormTitle>Forgot Password</FormTitle>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormField type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component={ErrorMessageText} />
          <FormButton type="submit">Send Reset Link</FormButton>

          <Containerlink>
            <SignInLink
              to="/Login/"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Back to Sign In
            </SignInLink>
            <HomeLink
              to="/"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Home
            </HomeLink>
          </Containerlink>
        </FormContainer>
      </Formik>
    </ForgotContainer>
  );
};

export default Forgot;
