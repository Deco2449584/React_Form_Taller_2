import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearFormData } from "../../features/formSlice";
import { FormState } from "../../features/formSlice";
import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SummaryCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 16px;
  max-width: 400px;
  width: 100%;
`;

const SummaryHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SummaryList = styled.ul`
  list-style: disc;
  padding-left: 2rem;
`;

const SummaryListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const SummaryButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const SummaryButton = styled.button`
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

const SummaryButtonPrimary = styled(SummaryButton)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const SummaryButtonSecondary = styled(SummaryButton)`
  background-color: #6c757d;
  color: #fff;

  &:hover {
    background-color: #555e66;
  }
`;

const SummaryButtonDanger = styled(SummaryButton)`
  background-color: #dc3545;
  color: #fff;

  &:hover {
    background-color: #c82333;
  }
`;

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
    <SummaryContainer>
      <SummaryCard>
        <SummaryHeader>Summary</SummaryHeader>
        <div className="mb-4">
          <p className="font-bold">Personal Data:</p>
          <SummaryList>
            <SummaryListItem>
              First Name: {formData.personalData.firstName}
            </SummaryListItem>
            <SummaryListItem>
              Last Name: {formData.personalData.lastName}
            </SummaryListItem>
            <SummaryListItem>
              Birth Date: {formData.personalData.birthDate}
            </SummaryListItem>
            <SummaryListItem>
              Gender: {formData.personalData.gender}
            </SummaryListItem>
          </SummaryList>
        </div>
        <div className="mb-4">
          <p className="font-bold">Academic Data:</p>
          <SummaryList>
            <SummaryListItem>
              Degree: {formData.academicData.degree}
            </SummaryListItem>
            <SummaryListItem>
              Institution: {formData.academicData.institution}
            </SummaryListItem>
            <SummaryListItem>
              Year: {formData.academicData.year}
            </SummaryListItem>
          </SummaryList>
        </div>
        <div className="mb-4">
          <p className="font-bold">Family Data:</p>
          <SummaryList>
            <SummaryListItem>
              Parent's Name: {formData.familyData.parentName}
            </SummaryListItem>
            <SummaryListItem>
              Sibling's Name: {formData.familyData.siblingName}
            </SummaryListItem>
            <SummaryListItem>
              Marital Status: {formData.familyData.maritalStatus}
            </SummaryListItem>
          </SummaryList>
        </div>
        <div className="mb-4">
          <p className="font-bold">Employment Data:</p>
          <SummaryList>
            <SummaryListItem>
              Company Name: {formData.employmentData.companyName}
            </SummaryListItem>
            <SummaryListItem>
              Position: {formData.employmentData.position}
            </SummaryListItem>
            <SummaryListItem>
              Years of Work: {formData.employmentData.yearsOfWork}
            </SummaryListItem>
          </SummaryList>
        </div>
        <div className="mb-4">
          <p className="font-bold">Account Data:</p>
          <SummaryList>
            <SummaryListItem>
              Username: {formData.accountData.username}
            </SummaryListItem>
            <SummaryListItem>
              Password: {formData.accountData.password}
            </SummaryListItem>
          </SummaryList>
        </div>
        <SummaryButtonContainer>
          <SummaryButtonPrimary onClick={handleSend}>
            Enviar
          </SummaryButtonPrimary>
          <Link to="/Registro/AccountData">
            <SummaryButtonSecondary>Volver</SummaryButtonSecondary>
          </Link>
          <SummaryButtonDanger onClick={handleCancel}>
            Cancelar
          </SummaryButtonDanger>
        </SummaryButtonContainer>
      </SummaryCard>
    </SummaryContainer>
  );
};

export default Summary;
