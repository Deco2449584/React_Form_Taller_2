import { useEffect } from "react";
import { Story, Meta } from "@storybook/react";
import { Provider, useDispatch } from "react-redux";
import PersonalData from "../components/Registro/PersonalData";
import store from "../Store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { updatePersonalData } from "../features/formSlice";
import styled from "styled-components";

export default {
  title: "components/PersonalData",
  component: PersonalData,
  argTypes: {
    initialValues: {
      control: {
        type: "object",
      },
    },
  },
  decorators: [
    // Envolvemos la historia con el Provider de react-redux y el Router para asegurar el acceso al store y las rutas
    (Story) => (
      <Router>
        <Provider store={store}>
          <Story />
        </Provider>
      </Router>
    ),
  ],
} as Meta;

// Definimos el Template para la historia
const Template: Story = (args) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Utilizamos useEffect para actualizar las initialValues en el store de Redux Toolkit antes de renderizar el componente PersonalData
    dispatch(updatePersonalData(args.initialValues));
  }, [dispatch, args.initialValues]);

  // Retornamos el componente PersonalData con las initialValues actualizadas desde la historia
  return <PersonalData />;
};

// Definimos las variantes de la historia
export const Default = Template.bind({});
Default.args = {
  initialValues: {
    firstName: "daniel",
    lastName: "caro",
    birthDate: "1990-01-01",
    gender: "sdfvdsf",
  },
};
Default.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales por defecto.",
    },
  },
};

export const WithProps = Template.bind({});
WithProps.args = {
  initialValues: {
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
  },
};
WithProps.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales con props enviadas.",
    },
  },
};

// Estilos para el contenedor oscuro
const DarkContainer = styled.div`
  background-color: black;
  padding: 20px;
`;

// Historia para DarkMode
export const DarkMode = () => (
  <DarkContainer>
    <PersonalData />
  </DarkContainer>
);
DarkMode.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales en modo oscuro.",
    },
  },
};
