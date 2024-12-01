import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/80 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full blur opacity-30"></div>
                        <img
                            src="/api/placeholder/150/50"
                            alt="MediCare Logo"
                            className="h-12 w-auto relative"
                        />
                    </div>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {[
                            'Home',
                            'About Us',
                            'Services',
                            'Team',
                            'Pages',
                            'Contact'
                        ].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className={`relative text-base font-medium group ${isScrolled ? 'text-gray-800' : 'text-white'
                                    }`}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>
                    <button className="relative hidden lg:inline-flex items-center">
                        <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full blur opacity-70 group-hover:opacity-100 animate-pulse"></span>
                        <span className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5">
                            Request A Pickup
                        </span>
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-50"
                    >
                        {isOpen ? (
                            <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
                        ) : (
                            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
                        )}
                    </button>
                </div>
                <div className={`
          fixed inset-0 bg-navy-900/95 backdrop-blur-xl transform transition-transform duration-300 lg:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
                    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
                        {[
                            'Home',
                            'About Us',
                            'Services',
                            'Team',
                            'Pages',
                            'Contact'
                        ].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-white text-2xl font-medium hover:text-blue-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full text-white font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5">
                            Request A Pickup
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;