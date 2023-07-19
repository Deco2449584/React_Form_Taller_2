import React from "react";
import { Routes, Route } from "react-router-dom";

import PersonalData from "../components/Registro/PersonalData";
import AcademicData from "../components/Registro/AcademicData";
import FamilyData from "../components/Registro/FamilyData";
import EmploymentData from "../components/Registro/EmploymentData";
import AccountData from "../components/Registro/AccountData";
import Summary from "../components/Registro/Sumary";

const Registro: React.FC = () => {
  return (
    <div className="registration-page">
      <Routes>
        <Route path="/PersonalData" element={<PersonalData />} />
        <Route path="/AcademicData" element={<AcademicData />} />
        <Route path="/FamilyData" element={<FamilyData />} />
        <Route path="/EmploymentData" element={<EmploymentData />} />
        <Route path="/AccountData" element={<AccountData />} />
        <Route path="/Summary" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default Registro;
