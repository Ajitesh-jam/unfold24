import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const api = {
    getAllPatients: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/getAllPatients`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getPatientByAadhar: async (aadhar: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/getRecord/${aadhar}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    queryPatients: async (field: string, value: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/queryRecords?${field}=${value}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};