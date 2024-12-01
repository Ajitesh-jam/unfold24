import React from 'react';
import {
    Stethoscope,
    Clock,
    CalendarCheck,
    Phone,
    Shield,
    Users,
    BadgeCheck,
    HeartPulse
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Stethoscope className="w-8 h-8" />,
            title: "Professional Staff",
            description: "Expert medical professionals dedicated to your well-being",
            color: "from-blue-600 to-blue-400"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Emergency Care",
            description: "24/7 emergency medical assistance whenever you need it",
            color: "from-purple-600 to-purple-400"
        },
        {
            icon: <CalendarCheck className="w-8 h-8" />,
            title: "Online Booking",
            description: "Easy and convenient appointment scheduling system",
            color: "from-teal-600 to-teal-400"
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "24/7 Services",
            description: "Round-the-clock healthcare support and assistance",
            color: "from-red-600 to-red-400"
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 mb-4">
                        <span className="text-blue-600 text-sm font-semibold">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                        Experience Excellence in Healthcare
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover why thousands of patients trust us with their health and well-being
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                            <div className="absolute inset-[1px] rounded-2xl bg-white"></div>
                            <div className="relative">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                                <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { value: "75+", label: "Expert Doctors", icon: <Users /> },
                        { value: "850+", label: "Active Patients", icon: <HeartPulse /> },
                        { value: "25+", label: "Years Experience", icon: <BadgeCheck /> },
                        { value: "15+", label: "Medical Awards", icon: <Shield /> }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative bg-white p-8 rounded-2xl border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                    <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                                        {React.cloneElement(stat.icon, { className: "w-8 h-8" })}
                                    </span>
                                </div>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Features;