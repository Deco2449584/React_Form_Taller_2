import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./Store/store";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro/*" element={<Registro />} />
        <Route path="/Login/*" element={<Login />} />
      </Routes>
    </Provider>
  );
};

export default App;
