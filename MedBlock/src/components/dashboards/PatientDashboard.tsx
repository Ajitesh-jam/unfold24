import React from 'react';
import {
    Calendar,
    FileText,
    User,
    Settings,
    Bell,
    LogOut,
    Plus,
    Menu,
    X,
    Activity
} from 'lucide-react';

const PatientDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    const handleLogout = () => {
        window.location.href = '/';
    };

    const menuItems = [
        { icon: <Calendar />, label: 'Appointments', count: '2' },
        { icon: <FileText />, label: 'Medical Records', count: '' },
        { icon: <Activity />, label: 'Health Metrics', count: '' },
        { icon: <User />, label: 'Profile', count: '' },
        { icon: <Settings />, label: 'Settings', count: '' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } z-50`}>
                <div className="h-full flex flex-col">
                    <div className="p-6 border-b">
                        <h1 className="text-2xl font-bold text-purple-600">MedCare</h1>
                        <p className="text-sm text-gray-500">Patient Portal</p>
                    </div>
                    <nav className="flex-1 p-4">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex items-center justify-between p-3 mb-2 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors"
                            >
                                <div className="flex items-center">
                                    {React.cloneElement(item.icon, { className: 'w-5 h-5 mr-3' })}
                                    {item.label}
                                </div>
                                {item.count && (
                                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                                        {item.count}
                                    </span>
                                )}
                            </a>
                        ))}
                    </nav>
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
            <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                            {isSidebarOpen ? <X /> : <Menu />}
                        </button>

                        <div className="flex items-center space-x-4">
                            <button
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-colors"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Book Appointment
                            </button>
                            <button className="relative text-gray-600 hover:text-purple-600 transition-colors">
                                <Bell />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                    2
                                </span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-700">John Doe</span>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold mb-2">Next Appointment</h3>
                            <p className="text-purple-600 font-medium">Dec 15, 2024 - 10:00 AM</p>
                            <p className="text-sm text-gray-500">Dr. Smith - General Checkup</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold mb-2">Recent Prescriptions</h3>
                            <p className="text-3xl font-bold text-purple-600">3</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold mb-2">Health Score</h3>
                            <p className="text-3xl font-bold text-green-600">85%</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
                            <p className="text-gray-600">Your upcoming appointment details will appear here.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-4">Recent Medical Records</h2>
                            <p className="text-gray-600">Your recent medical history will be displayed here.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PatientDashboard;