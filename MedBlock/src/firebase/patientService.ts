import {
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { Patient } from '../components/types';

export const patientService = {
    getAllPatients: async (): Promise<Patient[]> => {
        try {
            const querySnapshot = await getDocs(collection(db, "patient"));
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Patient));
        } catch (error) {
            console.error("Error getting patients:", error);
            throw error;
        }
    },

    getPatientByAadhar: async (aadhar: string): Promise<Patient | null> => {
        try {
            const docRef = doc(db, "patient", aadhar);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() } as Patient;
            }
            return null;
        } catch (error) {
            console.error("Error getting patient:", error);
            throw error;
        }
    },

    queryPatients: async (field: string, value: string): Promise<Patient[]> => {
        try {
            const q = query(collection(db, "patient"), where(field, "==", value));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Patient));
        } catch (error) {
            console.error("Error querying patients:", error);
            throw error;
        }
    }
};