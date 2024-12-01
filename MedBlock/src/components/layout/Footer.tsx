import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Clock
} from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Our Services', href: '#' },
        { name: 'Meet The Team', href: '#' },
        { name: 'Latest News', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'FAQs', href: '#' }
    ];

    const services = [
        { name: 'Emergency Care', href: '#' },
        { name: 'Primary Care', href: '#' },
        { name: 'Dental Care', href: '#' },
        { name: 'Pediatrics', href: '#' },
        { name: 'Cardiology', href: '#' },
        { name: 'Neurology', href: '#' }
    ];

    const socials = [
        { icon: <Facebook />, href: '#', name: 'Facebook' },
        { icon: <Twitter />, href: '#', name: 'Twitter' },
        { icon: <Instagram />, href: '#', name: 'Instagram' },
        { icon: <Linkedin />, href: '#', name: 'LinkedIn' }
    ];

    return (
        <footer className="relative bg-navy-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-900/95"></div>
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="border-b border-white/10">
                    <div className="container mx-auto px-4 py-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Stay updated with the latest medical news and health tips
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <div className="flex-grow relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-6 py-4 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                                    />
                                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                </div>
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <div className="mb-6">
                                <img
                                    src="/api/placeholder/150/50"
                                    alt="MediCare Logo"
                                    className="h-12"
                                />
                            </div>
                            <p className="text-gray-400 mb-6">
                                Providing quality healthcare services with advanced medical technology and experienced professionals.
                            </p>
                            <div className="flex space-x-4">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white flex items-center group"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                            <ul className="space-y-4">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href={service.href}
                                            className="text-gray-400 hover:text-white flex items-center group"
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                                            {service.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Phone className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                                    <div>
                                        <p className="text-white">+1 (555) 123-4567</p>
                                        <p className="text-gray-400 text-sm">Mon-Fri 9am-6pm</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Mail className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                                    <div>
                                        <p className="text-white">contact@medicare.com</p>
                                        <p className="text-gray-400 text-sm">Online support</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                                    <div>
                                        <p className="text-white">123 Medical Drive</p>
                                        <p className="text-gray-400 text-sm">New York, NY 10001</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Clock className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                                    <div>
                                        <p className="text-white">Working Hours</p>
                                        <p className="text-gray-400 text-sm">24/7 Emergency Service</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} MediCare. All rights reserved.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;