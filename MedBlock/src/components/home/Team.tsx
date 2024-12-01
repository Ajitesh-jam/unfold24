import React, { useState } from 'react';
import {
    Linkedin,
    Twitter,
    Mail,
    Calendar,
    Star,
    Users
} from 'lucide-react';

const Team = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            role: "Neurologist",
            image: "/api/placeholder/400/500",
            specialty: "Brain & Spine Surgery",
            experience: "15+ Years Experience",
            patients: "1000+",
            rating: 4.9,
            availability: "Mon - Fri",
            bio: "Dr. Sarah Johnson is a renowned neurologist specializing in complex brain and spine surgeries with over 15 years of experience.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "sarah@example.com"
            }
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            role: "Cardiologist",
            image: "/api/placeholder/400/500",
            specialty: "Heart Surgery",
            experience: "12+ Years Experience",
            patients: "800+",
            rating: 4.8,
            availability: "Mon - Sat",
            bio: "Dr. Michael Chen is a distinguished cardiologist known for his innovative approaches to heart surgery and patient care.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "michael@example.com"
            }
        },
        {
            id: 3,
            name: "Dr. Emily Williams",
            role: "Ophthalmologist",
            image: "/api/placeholder/400/500",
            specialty: "Eye Surgery",
            experience: "10+ Years Experience",
            patients: "1200+",
            rating: 4.9,
            availability: "Tue - Sat",
            bio: "Dr. Emily Williams is a leading ophthalmologist specializing in advanced eye surgeries and treatments.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "emily@example.com"
            }
        },
        {
            id: 4,
            name: "Dr. James Wilson",
            role: "Pediatrician",
            image: "/api/placeholder/400/500",
            specialty: "Child Healthcare",
            experience: "8+ Years Experience",
            patients: "1500+",
            rating: 4.7,
            availability: "Mon - Fri",
            bio: "Dr. James Wilson is a compassionate pediatrician dedicated to providing exceptional care for children of all ages.",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "james@example.com"
            }
        }
    ];

    return (
        <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-teal-50/50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Meet Our
                        <span className="relative mx-4">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                                Expert Doctors
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></div>
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our team of experienced healthcare professionals is dedicated to providing you with the best medical care
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <div
                            key={doctor.id}
                            className="group relative"
                            onMouseEnter={() => setSelectedDoctor(doctor.id)}
                            onMouseLeave={() => setSelectedDoctor(null)}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative bg-white rounded-2xl overflow-hidden">
                                <div className="relative overflow-hidden aspect-[3/4]">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${selectedDoctor === doctor.id ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    <span className="text-sm">{doctor.experience}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="w-4 h-4 mr-2" />
                                                    <span className="text-sm">{doctor.patients}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                                <span className="text-sm">{doctor.rating} Rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                                    <p className="text-blue-600 mb-3">{doctor.role}</p>
                                    <p className="text-gray-600 text-sm mb-4">{doctor.specialty}</p>
                                    <div className="flex space-x-4">
                                        {Object.entries(doctor.social).map(([platform, link]) => (
                                            <a
                                                key={platform}
                                                href={link}
                                                className="group-hover:text-blue-600 transition-colors"
                                            >
                                                {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                                                {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                                                {platform === 'email' && <Mail className="w-5 h-5" />}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                                    <span className="text-sm font-medium text-gray-900">{doctor.availability}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all">
                        View All Doctors
                        <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;