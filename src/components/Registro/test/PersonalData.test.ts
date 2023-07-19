import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../Store/store";
import PersonalData from "../../Registro/PersonalData";

test("renders component correctly", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <PersonalData />
      </MemoryRouter>
    </Provider>
  );

  // Simula la interacción del usuario y verifica el comportamiento esperado
  fireEvent.change(screen.getByLabelText("First Name"), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByLabelText("Last Name"), {
    target: { value: "Doe" },
  });
  fireEvent.change(screen.getByLabelText("Birth Date"), {
    target: { value: "1990-01-01" },
  });
  fireEvent.change(screen.getByLabelText("Gender"), {
    target: { value: "male" },
  });
  fireEvent.click(screen.getByText("Next Step"));

  // Agrega aquí tus expectativas para verificar el comportamiento esperado después de la interacción
});
