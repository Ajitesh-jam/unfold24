import React from 'react';
import { ArrowRight, Heart, Shield, Clock } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-20 bg-navy-900 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] bg-gradient-to-tr from-blue-600/30 via-purple-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-600/40 via-purple-500/40 to-teal-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            <div className="container relative mx-auto px-4 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white relative">
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
                        <div className="flex flex-wrap gap-4">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full">
                                <span className="absolute inset-0 bg-white rounded-full transition-transform transform scale-0 group-hover:scale-100 opacity-25"></span>
                                <span className="relative flex items-center text-white font-semibold">
                                    Explore Our Services
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>

                            <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full hover:bg-white/10 transition-colors">
                                Learn More
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-12">
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
                        <div className="relative z-10">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-teal-500/20 rounded-full blur-2xl"></div>
                            <img
                                src="/api/placeholder/600/600"
                                alt="Healthcare Professional"
                                className="relative rounded-3xl transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute -left-12 top-1/4 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 transform hover:-translate-y-2 transition-transform">
                            <div className="text-white">
                                <span className="block text-2xl font-bold">75+</span>
                                <span className="text-sm opacity-80">Expert Doctors</span>
                            </div>
                        </div>

                        <div className="absolute -right-8 bottom-1/4 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 transform hover:-translate-y-2 transition-transform">
                            <div className="text-white">
                                <span className="block text-2xl font-bold">24/7</span>
                                <span className="text-sm opacity-80">Emergency Care</span>
                            </div>
                        </div>
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