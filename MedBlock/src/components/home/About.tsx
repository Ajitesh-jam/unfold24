import React from 'react';
import { Shield, Clock, Heart, CheckCircle } from 'lucide-react';

const About = () => {
    const benefits = [
        "Professional Medical Staff",
        "24/7 Emergency Services",
        "Modern Medical Equipment",
        "Comfortable Facilities"
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 blur-lg opacity-20"></div>
                            <img
                                src="/api/placeholder/600/400"
                                alt="About Medical Care"
                                className="relative rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Trusted by</p>
                                        <p className="font-bold text-gray-900">10,000+ Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <span className="text-blue-600 font-semibold mb-2 block">About Us</span>
                        <h2 className="text-4xl font-bold mb-6">
                            Providing Quality Healthcare Solutions
                        </h2>
                        <p className="text-gray-600 mb-8">
                            With over 20 years of experience in healthcare services, we're dedicated to providing
                            the highest quality medical care to our community. Our team of experienced professionals
                            ensures that you receive the best possible treatment and care.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;