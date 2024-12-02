import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Heart,
    Shield,
    Clock,
    ArrowRight,
    UserCircle,
    Users,
    X,
    LogIn
} from 'lucide-react';
import DoctorLoginModal from '../modals/DoctorLoginModal';
// import PatientLoginModal from '../modals/PatientLoginModal';

// Login Modal Component
const LoginModal = ({ isOpen, onClose, onLogin, type }: {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (address: string) => void;
    type: 'doctor' | 'patient';
}) => {
    const [walletAddress, setWalletAddress] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!walletAddress.trim()) {
            setError('Please enter a wallet address');
            return;
        }
        onLogin(walletAddress);
    };

    return (
        // <div className="fixed inset-0 z-50 overflow-y-auto">
        //     <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        //     <div className="min-h-screen px-4 flex items-center justify-center">
        //         <div className="relative bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        //             <button
        //                 onClick={onClose}
        //                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        //             >
        //                 <X className="w-6 h-6" />
        //             </button>

        //             <div className="text-center mb-6">
        //                 <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        //                     <LogIn className="w-8 h-8 text-blue-600" />
        //                 </div>
        //                 <h2 className="text-2xl font-bold mb-2">
        //                     {type === 'doctor' ? 'Doctor Login' : 'Patient Login'}
        //                 </h2>
        //                 <p className="text-gray-600">Enter your wallet address to continue</p>
        //             </div>

        //             <form onSubmit={handleSubmit} className="space-y-4">
        //                 <div>
        //                     <input
        //                         type="text"
        //                         value={walletAddress}
        //                         onChange={(e) => setWalletAddress(e.target.value)}
        //                         placeholder="Wallet Address"
        //                         className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
        //                     />
        //                     {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        //                 </div>
        //                 <button
        //                     type="submit"
        //                     className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        //                 >
        //                     Login
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            <div className="min-h-screen px-4 flex items-center justify-center">
                <div className="relative bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="text-center mb-6">
                        <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <LogIn className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">
                            {type === 'doctor' ? 'Doctor Login' : 'Patient Login'}
                        </h2>
                        <p className="text-gray-600">Enter your wallet address to continue</p>
                    </div>

                    {type === 'doctor' ? (
                        <DoctorLoginModal isOpen={isOpen} onClose={onClose} />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

// Main Hero Component
const Hero = () => {
    const [loginModalType, setLoginModalType] = useState<'doctor' | 'patient' | null>(null);
    const navigate = useNavigate();

    const handleLogin = (walletAddress: string) => {
        localStorage.setItem('walletAddress', walletAddress);
        localStorage.setItem('userType', loginModalType || '');
        navigate(loginModalType === 'doctor' ? '/doctor-dashboard' : '/patient-dashboard');
    };

    return (
        <section className="relative min-h-screen pt-20 bg-navy-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute -inset-[10px] bg-gradient-to-tr from-blue-600/30 via-purple-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-600/40 via-purple-500/40 to-teal-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container relative mx-auto px-4 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-gray-200">
                                Secure Healthcare Platform
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-8">
                            Take
                            <span className="relative mx-4">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                                    Care
                                </span>
                            </span>
                            of Your Health.
                        </h1>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                            Access secure and reliable healthcare services through blockchain technology.
                            Connect with doctors and manage your medical records safely.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            {[ 
                                { icon: <Shield className="w-5 h-5" />, text: "Secure Records" },
                                { icon: <Heart className="w-5 h-5" />, text: "24/7 Care" },
                                { icon: <Clock className="w-5 h-5" />, text: "Fast Access" }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                                >
                                    {feature.icon}
                                    <span className="ml-2">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Login Options */}
                    <div className="space-y-6">
                        {/* Doctor Login Card */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <button
                                onClick={() => setLoginModalType('doctor')}
                                className="relative w-full flex items-center justify-between bg-white rounded-xl p-8 transition-transform duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-6">
                                        <UserCircle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Doctor Login</h3>
                                        <p className="text-gray-600">Access your medical dashboard</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-blue-600 transform group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        {/* Patient Login Card */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <button
                                onClick={() => setLoginModalType('patient')}
                                className="relative w-full flex items-center justify-between bg-white rounded-xl p-8 transition-transform duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-3 rounded-lg mr-6">
                                        <Users className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Patient Login</h3>
                                        <p className="text-gray-600">Access your health records</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-purple-600 transform group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            {loginModalType && (
                <LoginModal
                    isOpen={true}
                    onClose={() => setLoginModalType(null)}
                    onLogin={handleLogin}
                    type={loginModalType}
                />
            )}
        </section>
    );
};

export default Hero;