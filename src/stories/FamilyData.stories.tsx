import { useEffect } from "react";
import { Story, Meta } from "@storybook/react";
import { Provider, useDispatch } from "react-redux";
import FamilyData from "../components/Registro/FamilyData";
import store from "../Store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { updateFamilyData } from "../features/formSlice";

export default {
  title: "Components/FamilyData",
  component: FamilyData,
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
    dispatch(updateFamilyData(args.initialValues));
  }, [dispatch, args.initialValues]);

  return <FamilyData />;
};

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    parentName: "John Doe",
    siblingName: "Jane Doe",
    maritalStatus: "married",
  },
};
Default.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos familiares por defecto.",
    },
  },
};

export const WithEmptyFields = Template.bind({});
WithEmptyFields.args = {
  initialValues: {
    parentName: "",
    siblingName: "",
    maritalStatus: "",
  },
};
WithEmptyFields.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos familiares con campos vacíos.",
    },
  },
};

export const DarkMode = () => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <FamilyData />
  </div>
);
DarkMode.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos familiares en modo oscuro.",
    },
  },
};
