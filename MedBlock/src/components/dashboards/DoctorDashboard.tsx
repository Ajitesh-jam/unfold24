import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Search, LogOut, Menu, X, Calendar, FileText } from 'lucide-react';
import axios from 'axios';

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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } z-50`}>
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b">
                        <h1 className="text-2xl font-bold text-blue-600">MedCare</h1>
                        <p className="text-sm text-gray-500">Doctor Portal</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4">
                        <button className="flex items-center justify-between w-full p-3 mb-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-3" />
                                <span>Patients</span>
                            </div>
                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                                {patients.length}
                            </span>
                        </button>
                    </nav>

                    {/* Logout Button */}
                    <div className="p-4 border-t">
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
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
                                className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            {filteredPatients.map((patient) => (
                                <div
                                    key={patient.aadhar}
                                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4"
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

                                    <button
                                        onClick={() => window.open(`https://example.com/patient/${patient.aadhar}`, '_blank')}
                                        className="w-full flex items-center justify-center space-x-2 p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                                    >
                                        <FileText className="w-4 h-4" />
                                        <span>View Details</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DoctorDashboard;