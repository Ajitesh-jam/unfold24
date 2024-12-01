import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div
                            onClick={() => handleScroll('hero')}
                            className="cursor-pointer"
                        >
                            <img
                                src="/api/placeholder/150/50"
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </div>

                        <nav className="hidden md:flex items-center space-x-12">
                            {['Home', 'About Us', 'Services', 'Team', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleScroll(item.toLowerCase().replace(' ', '-'))}
                                    className={`text-base font-medium border-none outline-none focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'
                                        } hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full`}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden border-none outline-none focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <div
                    className={`fixed inset-0 bg-navy-900/95 backdrop-blur-lg md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    style={{ top: '80px' }}
                >
                    <nav className="flex flex-col items-center py-8 space-y-8">
                        {['Home', 'About Us', 'Services', 'Team', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleScroll(item.toLowerCase().replace(' ', '-'))}
                                className="text-white text-lg font-medium border-none outline-none focus:outline-none hover:text-blue-400 transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg border-none outline-none focus:outline-none hover:bg-blue-700 transition-all duration-300 z-50 ${showBackToTop
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-16 opacity-0'
                    }`}
                aria-label="Back to top"
            >
                <ArrowUp size={24} />
            </button>
        </>
    );
};

export default Header;