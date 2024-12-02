// src/components/dashboards/DoctorDashboard.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Search, LogOut, Menu, X, Plus } from 'lucide-react';
import axios from 'axios';
import AddPatientModal from './AddPatientModal.tsx'; // Import the new modal


// import { WalletSelector } from '../components/WalletSelector';
interface Patient {
    id?: string;
    name: string;
    DOB: string;
    gender: string;
    aadhar: string;
    email: string;
    control?: string;
    publicAddress?: string;
    url?: string;
    patientId?: string;
}

const DoctorDashboard = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState<Patient[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('http://localhost:8000/getAllPatients');
            console.log('Fetched data:', response.data); // Debug log
            setPatients(response.data);
        } catch (err) {
            console.error('Error fetching patients:', err);
            setError('Failed to fetch patients data');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('doctorWalletAddress');
        navigate('/');
    };

    const filteredPatients = patients.filter(patient => {
        if (!searchTerm) return true;
        const searchLower = searchTerm.toLowerCase();
        return (
            (patient.name && patient.name.toLowerCase().includes(searchLower)) ||
            (patient.email && patient.email.toLowerCase().includes(searchLower)) ||
            (patient.aadhar && patient.aadhar.includes(searchTerm))
        );
    });

    const handlePatientClick = (aadhar: string) => {
        navigate(`/patient/${aadhar}`);
    };


    const walletConnect = async () => {
        
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } z-50`}>
                {/* Sidebar content remains the same */}
            </aside>

            {/* Main Content */}

            {/* <WalletSelector /> */}
            <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                {/* Top Bar */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search patients..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute right-3 top-2.5 text-gray-400" />
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="p-6">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-600 p-4">{error}</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {/* Add Patient Card */}
                            <div
                                onClick={() => setIsAddPatientModalOpen(true)}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50"
                            >
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <Plus className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-blue-600">Add New Patient</h3>
                                <p className="text-gray-500 text-sm text-center">Create a new patient profile</p>
                            </div>

                            {/* Patient Cards */}
                            {filteredPatients.map((patient) => (
                                <div
                                    key={patient.aadhar}
                                    onClick={() => handlePatientClick(patient.aadhar)}
                                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-blue-600 font-semibold">
                                                {patient.name?.charAt(0) || 'P'}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{patient.name}</h3>
                                    <p className="text-gray-600 text-sm mb-2">Aadhar: {patient.aadhar}</p>
                                    <p className="text-gray-600 text-sm mb-2">Gender: {patient.gender}</p>
                                    <p className="text-gray-600 text-sm mb-4">Email: {patient.email}</p>

                                    <div className="w-full flex items-center justify-center space-x-2 p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                                        <span>View Details</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>

            {/* Add Patient Modal */}
            <AddPatientModal
                isOpen={isAddPatientModalOpen}
                onClose={() => setIsAddPatientModalOpen(false)}
                onPatientAdded={fetchPatients}
            />
        </div>
    );
};

export default DoctorDashboard;