import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearFormData } from "../../features/formSlice";
import { FormState } from "../../features/formSlice";

const Summary: React.FC = () => {
  const formData = useSelector((state: { form: FormState }) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCancel = () => {
    dispatch(clearFormData());
    navigate("/");
  };

  const handleSend = () => {
    alert("¡Tus datos fueron enviados exitosamente!");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="mb-4">
          <p className="font-bold">Personal Data:</p>
          <ul className="list-disc pl-6">
            <li>First Name: {formData.personalData.firstName}</li>
            <li>Last Name: {formData.personalData.lastName}</li>
            <li>Birth Date: {formData.personalData.birthDate}</li>
            <li>Gender: {formData.personalData.gender}</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-bold">Academic Data:</p>
          <ul className="list-disc pl-6">
            <li>Degree: {formData.academicData.degree}</li>
            <li>Institution: {formData.academicData.institution}</li>
            <li>Year: {formData.academicData.year}</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-bold">Family Data:</p>
          <ul className="list-disc pl-6">
            <li>Parent's Name: {formData.familyData.parentName}</li>
            <li>Sibling's Name: {formData.familyData.siblingName}</li>
            <li>Marital Status: {formData.familyData.maritalStatus}</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-bold">Employment Data:</p>
          <ul className="list-disc pl-6">
            <li>Company Name: {formData.employmentData.companyName}</li>
            <li>Position: {formData.employmentData.position}</li>
            <li>Years of Work: {formData.employmentData.yearsOfWork}</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-bold">Account Data:</p>
          <ul className="list-disc pl-6">
            <li>Username: {formData.accountData.username}</li>
            <li>Password: {formData.accountData.password}</li>
          </ul>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSend}
          >
            Enviar
          </button>
          <Link to="/Registro/AccountData">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Volver
            </button>
          </Link>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
