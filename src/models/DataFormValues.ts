// Creamos una interfaz para los datos del formulario
export interface PersonalDataFormValues {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
}
// Creamos una interfaz para los datos del formulario
export interface AcademicDataFormValues {
  degree: string;
  institution: string;
  year: string;
}

// Creamos una interfaz para los datos del formulario
export interface FamilyDataFormValues {
  parentName: string;
  siblingName: string;
  maritalStatus: string;
}
// Creamos una interfaz para los datos del formulario
export interface EmploymentDataFormValues {
  companyName: string;
  position: string;
  yearsOfWork: string;
}
// Creamos una interfaz para los datos del formulario
export interface AccountDataFormValues {
  username: string;
  password: string;
  confirmPassword: string;
}
