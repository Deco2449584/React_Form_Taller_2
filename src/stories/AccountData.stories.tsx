import { useEffect } from "react";
import { Story, Meta } from "@storybook/react";
import { Provider, useDispatch } from "react-redux";
import AccountData from "../components/Registro/AccountData";
import store from "../Store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { updateAccountData } from "../features/formSlice";

export default {
  title: "Components/AccountData",
  component: AccountData,
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
    dispatch(updateAccountData(args.initialValues));
  }, [dispatch, args.initialValues]);

  return <AccountData />;
};

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    username: "john_doe",
    password: "securepassword",
    confirmPassword: "securepassword",
  },
};
Default.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos de cuenta por defecto.",
    },
  },
};

export const WithEmptyFields = Template.bind({});
WithEmptyFields.args = {
  initialValues: {
    username: "",
    password: "",
    confirmPassword: "",
  },
};
WithEmptyFields.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos de cuenta con campos vacíos.",
    },
  },
};

export const PasswordTooShort = Template.bind({});
PasswordTooShort.args = {
  initialValues: {
    username: "jane_doe",
    password: "short",
    confirmPassword: "short",
  },
};
PasswordTooShort.parameters = {
  docs: {
    description: {
      story:
        "Formulario de registro de datos de cuenta con contraseña demasiado corta.",
    },
  },
};

export const PasswordMismatch = Template.bind({});
PasswordMismatch.args = {
  initialValues: {
    username: "mary_smith",
    password: "password123",
    confirmPassword: "differentpassword",
  },
};
PasswordMismatch.parameters = {
  docs: {
    description: {
      story:
        "Formulario de registro de datos de cuenta con contraseñas no coincidentes.",
    },
  },
};

export const DarkMode = () => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <AccountData />
  </div>
);
DarkMode.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos de cuenta en modo oscuro.",
    },
  },
};
