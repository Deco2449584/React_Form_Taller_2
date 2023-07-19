import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PersonalDataFormValues,
  AcademicDataFormValues,
  FamilyDataFormValues,
  EmploymentDataFormValues,
  AccountDataFormValues,
} from "../models/DataFormValues";

export interface FormState {
  personalData: PersonalDataFormValues;
  academicData: AcademicDataFormValues;
  familyData: FamilyDataFormValues;
  employmentData: EmploymentDataFormValues;
  accountData: AccountDataFormValues;
}

const initialState: FormState = {
  personalData: {
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
  },
  academicData: {
    degree: "",
    institution: "",
    year: "",
  },
  familyData: {
    parentName: "",
    siblingName: "",
    maritalStatus: "",
  },
  employmentData: {
    companyName: "",
    position: "",
    yearsOfWork: "",
  },
  accountData: {
    username: "",
    password: "",
    confirmPassword: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updatePersonalData(state, action: PayloadAction<PersonalDataFormValues>) {
      state.personalData = action.payload;
    },
    updateAcademicData(state, action: PayloadAction<AcademicDataFormValues>) {
      state.academicData = action.payload;
    },
    updateFamilyData(state, action: PayloadAction<FamilyDataFormValues>) {
      state.familyData = action.payload;
    },
    updateEmploymentData(
      state,
      action: PayloadAction<EmploymentDataFormValues>
    ) {
      state.employmentData = action.payload;
    },
    updateAccountData(state, action: PayloadAction<AccountDataFormValues>) {
      state.accountData = action.payload;
    },
    clearFormData(state) {
      state.personalData = initialState.personalData;
      state.academicData = initialState.academicData;
      state.familyData = initialState.familyData;
      state.employmentData = initialState.employmentData;
      state.accountData = initialState.accountData;
    },
  },
});

export const {
  updatePersonalData,
  updateAcademicData,
  updateFamilyData,
  updateEmploymentData,
  updateAccountData,
  clearFormData,
} = formSlice.actions;

export default formSlice.reducer;
