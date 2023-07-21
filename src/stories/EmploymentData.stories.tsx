import { useEffect } from "react";
import { Story, Meta } from "@storybook/react";
import { Provider, useDispatch } from "react-redux";
import EmploymentData from "../components/Registro/EmploymentData";
import store from "../Store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { updateEmploymentData } from "../features/formSlice";

export default {
  title: "Components/EmploymentData",
  component: EmploymentData,
  argTypes: {
    initialValues: {
      control: {
        type: "object",
      },
    },
  },
  decorators: [
    (Story) => (
      <Router>
        <Provider store={store}>
          <Story />
        </Provider>
      </Router>
    ),
  ],
} as Meta;

const Template: Story = (args) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateEmploymentData(args.initialValues));
  }, [dispatch, args.initialValues]);

  return <EmploymentData />;
};

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    companyName: "ABC Corporation",
    position: "Software Engineer",
    yearsOfWork: "5",
  },
};
Default.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos laborales por defecto.",
    },
  },
};

export const WithEmptyFields = Template.bind({});
WithEmptyFields.args = {
  initialValues: {
    companyName: "",
    position: "",
    yearsOfWork: "",
  },
};
WithEmptyFields.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos laborales con campos vacíos.",
    },
  },
};

export const DarkMode = () => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <EmploymentData />
  </div>
);
DarkMode.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos laborales en modo oscuro.",
    },
  },
};
