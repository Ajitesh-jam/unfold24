import React, { useState } from 'react';
import {
    Brain,
    Microscope,
    HeartPulse,
    Eye,
    Stethoscope,
    Activity,
    ArrowRight
} from 'lucide-react';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            icon: <Brain />,
            title: "Neurosurgery",
            description: "Expert care for neurological conditions and disorders",
            details: [
                "Brain and spine surgery",
                "Neurological treatments",
                "Advanced diagnostics",
                "Rehabilitation support"
            ]
        },
        {
            icon: <Microscope />,
            title: "Modern Laboratory",
            description: "State-of-the-art diagnostic testing facility",
            details: [
                "Advanced testing equipment",
                "Quick result delivery",
                "Accurate diagnostics",
                "Research capabilities"
            ]
        },
        {
            icon: <HeartPulse />,
            title: "Cardiology",
            description: "Comprehensive heart care services",
            details: [
                "Heart disease treatment",
                "Cardiac surgery",
                "Preventive care",
                "Rehabilitation programs"
            ]
        },
        {
            icon: <Eye />,
            title: "Ophthalmology",
            description: "Complete eye care and vision services",
            details: [
                "Vision correction",
                "Eye surgery",
                "Disease treatment",
                "Preventive care"
            ]
        },
        {
            icon: <Stethoscope />,
            title: "Primary Care",
            description: "Your first stop for healthcare needs",
            details: [
                "Regular checkups",
                "Preventive care",
                "Health monitoring",
                "Lifestyle advice"
            ]
        },
        {
            icon: <Activity />,
            title: "Emergency Care",
            description: "24/7 emergency medical services",
            details: [
                "Immediate response",
                "Critical care",
                "Trauma treatment",
                "Emergency surgery"
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        We Offer For You
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Medical & Saving Lives
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Comprehensive healthcare solutions tailored to your needs
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-6">
                                    {React.cloneElement(service.icon, {
                                        className: "w-6 h-6"
                                    })}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className={`space-y-3 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0'
                                    }`}>
                                    {service.details.map((detail, i) => (
                                        <div key={i} className="flex items-center text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-6 flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                    Learn More
                                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20 text-center">
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-75"></div>
                        <button className="relative px-8 py-4 bg-white rounded-full font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                            View All Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;