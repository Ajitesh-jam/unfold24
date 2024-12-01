import React, { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Calendar,
    Send,
    CheckCircle
} from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        date: '',
        time: ''
    });

    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('submitting');
        setTimeout(() => {
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: "+1 (555) 123-4567",
            subtitle: "24/7 Emergency Line"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "contact@medicare.com",
            subtitle: "Quick Response Time"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            value: "123 Medical Drive",
            subtitle: "New York, NY 10001"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Hours",
            value: "Mon - Fri: 8am - 8pm",
            subtitle: "Sat - Sun: 9am - 5pm"
        }
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-teal-50/90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4 inline-block">
                        Contact Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in Touch with
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                            Our Medical Team
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Have questions or need to schedule an appointment? We're here to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur opacity-20"></div>
                        <div className="relative bg-white rounded-2xl shadow-lg p-8">
                            <form onSubmit={handleSubmit}>
                                {/* Form Grid */}
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    {/* Name Input */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent"
                                            placeholder="Your Name"
                                            required
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
                        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
                        peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                                        >
                                            Your Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent"
                                            placeholder="Email Address"
                                            required
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
                        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
                        peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                                        >
                                            Email Address
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formState.phone}
                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <label
                                            htmlFor="phone"
                                            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
                        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
                        peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                                        >
                                            Phone Number
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            value={formState.service}
                                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                            required
                                        >
                                            <option value="">Select Service</option>
                                            <option value="consultation">Consultation</option>
                                            <option value="emergency">Emergency</option>
                                            <option value="checkup">Regular Checkup</option>
                                        </select>
                                        <label
                                            htmlFor="service"
                                            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600"
                                        >
                                            Select Service
                                        </label>
                                    </div>
                                </div>
                                <div className="relative mb-6">
                                    <textarea
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent h-32 resize-none"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
                      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
                      peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                                    >
                                        Your Message
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    disabled={submitStatus === 'submitting'}
                                    className={`w-full py-4 rounded-lg font-semibold text-white transition-all 
                    ${submitStatus === 'success'
                                            ? 'bg-green-500'
                                            : 'bg-gradient-to-r from-blue-600 to-teal-500 hover:shadow-lg transform hover:-translate-y-0.5'
                                        }
                  `}
                                >
                                    <span className="flex items-center justify-center">
                                        {submitStatus === 'submitting' && (
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        )}
                                        {submitStatus === 'success' && <CheckCircle className="mr-2" />}
                                        {submitStatus === 'idle' && <Send className="mr-2" />}
                                        {submitStatus === 'submitting' && 'Sending...'}
                                        {submitStatus === 'success' && 'Message Sent!'}
                                        {submitStatus === 'idle' && 'Send Message'}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                                            <p className="text-blue-600 font-medium">{info.value}</p>
                                            <p className="text-sm text-gray-500">{info.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="relative mt-8">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur opacity-20"></div>
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/api/placeholder/800/400"
                                    alt="Location Map"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                                    <div className="p-6 text-white">
                                        <h4 className="font-semibold mb-1">Visit Our Clinic</h4>
                                        <p className="text-sm opacity-90">123 Medical Drive, New York, NY 10001</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;