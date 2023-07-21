import { Story, Meta } from "@storybook/react";
import { Provider } from "react-redux";
import PersonalData from "../components/Registro/PersonalData";
import store from "../Store/store"; // Importa el store aquí
import { BrowserRouter as Router } from "react-router-dom"; // Importa BrowserRouter o el enrutador que estés usando

export default {
  title: "components/PersonalData",
  component: PersonalData,
} as Meta;

const Template: Story = () => (
  <Router>
    <Provider store={store}>
      <div style={{ padding: "20px", backgroundColor: "white" }}>
        <PersonalData />
      </div>
    </Provider>
  </Router>
);

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales por defecto.",
    },
  },
};

// Agregar más casos con interacciones y controles
export const WithInteractions = Template.bind({});
WithInteractions.decorators = [
  (Story) => (
    <div style={{ padding: "20px", backgroundColor: "white" }}>
      {/* Mostrar interacciones y controles */}
      <h3>Interactúa con los campos</h3>
      <Story />
    </div>
  ),
];
WithInteractions.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales con interacciones.",
    },
  },
};
// Agregar un ejemplo con controles para prellenar el formulario con datos
export const WithPreFilledFields = Template.bind({});
WithPreFilledFields.args = {
  initialValues: {
    firstName: "John",
    lastName: "Doe",
    birthDate: "1990-01-01",
    gender: "male",
  },
};
WithPreFilledFields.parameters = {
  docs: {
    description: {
      story:
        "Formulario de registro de datos personales con campos prellenados.",
    },
  },
};
// Agregar un ejemplo de interacción con el campo Fecha de nacimiento
export const WithBirthDateFieldInteraction = Template.bind({});
WithBirthDateFieldInteraction.decorators = [
  (Story) => (
    <div style={{ padding: "20px", backgroundColor: "white" }}>
      <h3>Interacción con el campo Fecha de nacimiento</h3>
      <Story />
    </div>
  ),
];
WithBirthDateFieldInteraction.parameters = {
  docs: {
    description: {
      story:
        "Formulario de registro de datos personales con interacción en el campo Fecha de nacimiento.",
    },
  },
};
// Agregar más casos con estilos
export const DarkMode = Template.bind({});
DarkMode.decorators = [
  (Story) => (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <Story />
    </div>
  ),
];
DarkMode.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales en modo oscuro.",
    },
  },
};

// Agregar más casos con animaciones
export const WithAnimation = Template.bind({});
WithAnimation.decorators = [
  (Story) => (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <h3>Formulario con animaciones</h3>
      {Story()}
    </div>
  ),
];
WithAnimation.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales con animaciones.",
    },
  },
};

// Agregar más casos con mensajes de éxito y error
export const SuccessFeedback = Template.bind({});
SuccessFeedback.decorators = [
  (Story) => (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <h3>Formulario completado con éxito</h3>
      {Story()}
      <p style={{ color: "green" }}>Formulario completado exitosamente</p>
    </div>
  ),
];
SuccessFeedback.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales con mensaje de éxito.",
    },
  },
};

export const ErrorFeedback = Template.bind({});
ErrorFeedback.decorators = [
  (Story) => (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <h3>Error al completar el formulario</h3>
      {Story()}
      <p style={{ color: "red" }}>
        Por favor completa todos los campos requeridos
      </p>
    </div>
  ),
];
ErrorFeedback.parameters = {
  docs: {
    description: {
      story: "Formulario de registro de datos personales con mensaje de error.",
    },
  },
};

// Agregar más casos con diseño responsive
export const Responsive = Template.bind({});
Responsive.decorators = [
  (Story) => (
    <div style={{ width: "50%", backgroundColor: "white", padding: "20px" }}>
      <h3>Formulario con diseño responsive</h3>
      {Story()}
    </div>
  ),
];
Responsive.parameters = {
  docs: {
    description: {
      story:
        "Formulario de registro de datos personales con diseño responsive.",
    },
  },
};

export const WithDocumentation = Template.bind({});
WithDocumentation.parameters = {
  docs: {
    description: {
      story: "Este es el formulario de registro de datos personales.",
    },
  },
};
