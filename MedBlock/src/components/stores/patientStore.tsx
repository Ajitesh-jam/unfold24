import { create } from "zustand";

interface Patient {
  name: string;
  DOB: string;
  ImageUrl: string;
  email: string;
  publicAddress: string;
  contact: string;
  gender: string;
  adhar?: string;
}

interface PatientState {
  patients: Patient[];
  newPatient: Patient | null;
  addPatient: (patient: Patient) => void;
  removePatient: (publicAddress: string) => void;
  updatePatient: (publicAddress: string, updatedInfo: Partial<Patient>) => void;
  setSelectedPatient: (patient: Patient) => void;
  selectedPatient: Patient | null;
}

const usePatients = create<PatientState>((set) => ({
  patients: [],
  newPatient: null,
  selectedPatient: null,

  addPatient: (patient) =>
    set((state) => ({ patients: [...state.patients, patient] })),

  removePatient: (publicAddress) =>
    set((state) => ({
      patients: state.patients.filter(
        (patient) => patient.publicAddress !== publicAddress
      ),
    })),

  updatePatient: (publicAddress, updatedInfo) =>
    set((state) => ({
      patients: state.patients.map((patient) =>
        patient.publicAddress === publicAddress
          ? { ...patient, ...updatedInfo }
          : patient
      ),
    })),

  setSelectedPatient: (patient) => set(() => ({ selectedPatient: patient })),
}));

export default usePatients;

