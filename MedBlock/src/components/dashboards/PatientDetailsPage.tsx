import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { getMedicalRecord } from '../utils/web3';


import {
    ArrowLeft,
    User,
    Calendar,
    Mail
} from 'lucide-react';

interface PatientDetails {
    name: string;
    DOB: string;
    gender: string;
    aadhar: string;
    email: string;
    publicAddress: string;
}

const GenderIcon: React.FC<{ gender: string }> = ({ gender }) => {
    const getIconStyle = "w-6 h-6";

    switch (gender.toLowerCase()) {
        case 'male':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={`${getIconStyle} text-blue-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            );
        case 'female':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={`${getIconStyle} text-pink-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="11" r="7"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
            );
        default:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={`${getIconStyle} text-purple-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="11" r="7"></circle>
                    <path d="M12 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 0v4"></path>
                    <line x1="8" y1="2" x2="16" y2="2"></line>
                </svg>
            );
    }
};

const PatientDetailsPage: React.FC = () => {
    const { aadhar } = useParams<{ aadhar: string }>();
    const navigate = useNavigate();
    const [patient, setPatient] = useState<PatientDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/getRecord/${aadhar}`);
                setPatient(response.data);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching patient details:', err);
                setError('Failed to fetch patient details');
                setIsLoading(false);
            }
        };

        fetchPatientDetails();
    }, [aadhar]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <p className="text-red-600 text-lg">{error}</p>
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    if (!patient) {
        return null;
    }


    async function getRecord(){
        if (patient?.publicAddress) {
            const medicalData = await getMedicalRecord("0xd583f7047e96f1739b42cc1513044d56c545ae6dd69c08f418993caf6c1aacd5", patient.publicAddress);
            console.log(medicalData);
        } else {
            console.error('Patient public address is undefined');
        }

    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white p-6 flex items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="mr-4 hover:bg-blue-700 p-2 rounded-full transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-2xl font-bold">Patient Details</h1>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-12 h-12 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">{patient.name}</h2>
                            <p className="text-gray-600">Aadhar: {patient.aadhar}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
                            <Calendar className="w-6 h-6 text-blue-600" />
                            <div>
                                <p className="text-gray-600 text-sm">Date of Birth</p>
                                <p className="font-semibold">{patient.DOB}</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
                            <GenderIcon gender={patient.gender} />
                            <div>
                                <p className="text-gray-600 text-sm">Gender</p>
                                <p className="font-semibold">{patient.gender}</p>
                            </div>
                        </div>



                        <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
                            <Mail className="w-6 h-6 text-blue-600" />
                            <div>
                                <p className="text-gray-600 text-sm">Email Address</p>
                                <p className="font-semibold">{patient.email}</p>
                            </div>
                        </div>

                        <button className="btn btn-primary" onClick={getRecord}>Get Medical Record</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetailsPage;