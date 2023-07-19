import { Link } from "react-router-dom";

import ReactLogo from "../assets/react.svg";
import TypeScriptLogo from "../assets/typescript.svg";
import ReduxLogo from "../assets/redux.svg";
import TailwindCSSLogo from "../assets/tailwindcss.svg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">¡Bienvenido!</h1>
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="flex justify-end">
          <img src={ReactLogo} alt="React" className="w-24 h-24" />
        </div>
        <div className="flex justify-start">
          <img src={TypeScriptLogo} alt="TypeScript" className="w-24 h-24" />
        </div>
        <div className="flex justify-end">
          <img src={ReduxLogo} alt="Redux" className="w-24 h-24" />
        </div>
        <div className="flex justify-start">
          <img src={TailwindCSSLogo} alt="Tailwind CSS" className="w-24 h-24" />
        </div>
      </div>
      <div className="flex space-x-4">
        <Link
          to="/Registro/PersonalData"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Registrarse
        </Link>
        <Link
          to="/Login"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Ingresar
        </Link>
      </div>
    </div>
  );
};

export default Home;
