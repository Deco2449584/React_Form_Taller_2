import { useEffect } from "react";
import { Story, Meta } from "@storybook/react";
import { Provider, useDispatch } from "react-redux";
import AcademicData from "../components/Registro/AcademicData";
import store from "../Store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { updateAcademicData } from "../features/formSlice";

export default {
  title: "Components/AcademicData",
  component: AcademicData,
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
    dispatch(updateAcademicData(args.initialValues));
  }, [dispatch, args.initialValues]);

  return <AcademicData />;
};

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    degree: "Computer Science",
    institution: "University of Example",
    year: "2022",
  },
};
Default.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos académicos por defecto.",
    },
  },
};

export const WithEmptyFields = Template.bind({});
WithEmptyFields.args = {
  initialValues: {
    degree: "",
    institution: "",
    year: "",
  },
};
WithEmptyFields.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos académicos con campos vacíos.",
    },
  },
};

export const DarkMode = () => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <AcademicData />
  </div>
);
DarkMode.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos académicos en modo oscuro.",
    },
  },
};
