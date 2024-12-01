import React, { useState } from 'react';
import {
    Users,
    Search,
    FileText,
    Settings,
    Bell,
    LogOut,
    Menu,
    X,
    ExternalLink,
    Database,
    Filter
} from 'lucide-react';

interface Patient {
    id: string;
    name: string;
    age: number;
    image: string;
    diseases: string[];
    lastVisit: string;
    status: 'critical' | 'stable' | 'recovering';
    externalLink: string;
}

const DoctorDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'patients' | 'research'>('patients');
    const [diseaseSearch, setDiseaseSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    // Dummy patient data
    const patients: Patient[] = [
        {
            id: '1',
            name: 'John Doe',
            age: 45,
            image: '/api/placeholder/150/150',
            diseases: ['Type 2 Diabetes', 'Hypertension'],
            lastVisit: '2024-02-15',
            status: 'stable',
            externalLink: 'https://example.com/patient/1'
        },
        {
            id: '2',
            name: 'Jane Smith',
            age: 32,
            image: '/api/placeholder/150/150',
            diseases: ['Asthma'],
            lastVisit: '2024-02-20',
            status: 'recovering',
            externalLink: 'https://example.com/patient/2'
        },

    ];

    const handleLogout = () => {
        window.location.href = '/';
    };

    const handlePatientClick = (externalLink: string) => {
        window.open(externalLink, '_blank');
    };

    const handleDiseaseSearch = async () => {
        setIsSearching(true);

        setTimeout(() => {
            setIsSearching(false);
        }, 2000);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'critical':
                return 'bg-red-100 text-red-600';
            case 'stable':
                return 'bg-green-100 text-green-600';
            case 'recovering':
                return 'bg-blue-100 text-blue-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">

            <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } z-50`}>
            </aside>


            <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>

                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {isSidebarOpen ? <X /> : <Menu />}
                        </button>

                        <div className="flex items-center space-x-4">
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
                            <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
                                <Bell />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                    3
                                </span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-700">Dr. Smith</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-6 border-t">
                        <button
                            onClick={() => setActiveTab('patients')}
                            className={`px-4 py-3 font-medium transition-colors relative ${activeTab === 'patients'
                                ? 'text-blue-600'
                                : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            Patients
                            {activeTab === 'patients' && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('research')}
                            className={`px-4 py-3 font-medium transition-colors relative ${activeTab === 'research'
                                ? 'text-blue-600'
                                : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            Disease Research
                            {activeTab === 'research' && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                            )}
                        </button>
                    </div>
                </header>
                <main className="p-6">
                    {activeTab === 'patients' ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {patients
                                    .filter(patient =>
                                        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        patient.diseases.some(disease =>
                                            disease.toLowerCase().includes(searchTerm.toLowerCase())
                                        )
                                    )
                                    .map(patient => (
                                        <div
                                            key={patient.id}
                                            onClick={() => handlePatientClick(patient.externalLink)}
                                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                                        >
                                            <div className="p-4">
                                                <div className="flex items-start justify-between mb-4">
                                                    <img
                                                        src={patient.image}
                                                        alt={patient.name}
                                                        className="w-16 h-16 rounded-full"
                                                    />
                                                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(patient.status)}`}>
                                                        {patient.status}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold mb-1">{patient.name}</h3>
                                                <p className="text-gray-500 text-sm mb-2">Age: {patient.age}</p>
                                                <div className="mb-3">
                                                    {patient.diseases.map((disease, index) => (
                                                        <span
                                                            key={index}
                                                            className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                                                        >
                                                            {disease}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between text-sm text-gray-500">
                                                    <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
                                                    <ExternalLink className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </>
                    ) : (
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                <h2 className="text-xl font-bold mb-4">Disease Research Portal</h2>
                                <div className="flex gap-4 mb-6">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Search for a disease..."
                                            value={diseaseSearch}
                                            onChange={(e) => setDiseaseSearch(e.target.value)}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <button
                                        onClick={handleDiseaseSearch}
                                        disabled={isSearching}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                                    >
                                        {isSearching ? 'Searching...' : 'Search'}
                                    </button>
                                </div>
                                <div className="flex gap-4 mb-6">
                                    <div className="flex-1">
                                        <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="">All Categories</option>
                                            <option value="chronic">Chronic Diseases</option>
                                            <option value="infectious">Infectious Diseases</option>
                                            <option value="genetic">Genetic Disorders</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="">All Treatment Types</option>
                                            <option value="medication">Medication</option>
                                            <option value="surgery">Surgery</option>
                                            <option value="therapy">Therapy</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    Search our comprehensive database for detailed information about diseases,
                                    treatments, and research papers. Patient information is anonymized.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="text-center text-gray-500">
                                    <Database className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p>Enter a disease name to search the database</p>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DoctorDashboard;