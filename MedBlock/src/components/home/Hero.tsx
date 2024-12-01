import React from 'react';
import {
    Heart,
    Shield,
    Clock,
    ArrowRight,
    UserCircle,
    Users
} from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-20 bg-navy-900 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] bg-gradient-to-tr from-blue-600/30 via-purple-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-600/40 via-purple-500/40 to-teal-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container relative mx-auto px-4 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-white">
                        {/* Floating Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-6">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-gray-200">
                                Highest level of service you can find
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-8">
                            Take
                            <span className="relative mx-4">
                                <span className="relative z-10 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                                    Care
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10 Q50 20 100 10" stroke="url(#gradient)" fill="none" strokeWidth="4" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#ef4444" />
                                            <stop offset="100%" stopColor="#ec4899" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            of Your Health Now.
                        </h1>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                            Experience healthcare reimagined with cutting-edge technology and
                            compassionate care. Your well-being is our priority, available 24/7.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-12">
                            {[
                                { icon: <Heart className="w-5 h-5" />, text: "24/7 Care" },
                                { icon: <Shield className="w-5 h-5" />, text: "Certified Doctors" },
                                { icon: <Clock className="w-5 h-5" />, text: "Fast Response" }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white"
                                >
                                    {feature.icon}
                                    <span className="ml-2">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid gap-8">
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                                <button
                                    onClick={() => window.location.href = '/doctor-dashboard'}
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

                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                                <button
                                    onClick={() => window.location.href = '/patient-dashboard'}
                                    className="relative w-full flex items-center justify-between bg-white rounded-xl p-8 transition-transform duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-center">
                                        <div className="bg-purple-100 p-3 rounded-lg mr-6">
                                            <Users className="w-8 h-8 text-purple-600" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">Patient Login</h3>
                                            <p className="text-gray-600">View your health records</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-purple-600 transform group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500 rounded-full blur-xl opacity-20"></div>
                        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-20"></div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 200" className="w-full">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;