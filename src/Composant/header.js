import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { path: '/Mariage', label: 'Programme' },
        { path: '/histoire', label: 'Notre histoire' },
        { path: '/hebergement', label: 'Hébergement' },
        { path: '/rsvp', label: 'Confirmez votre venue !' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            {/* Version Desktop */}
            <nav className="hidden md:block container mx-auto px-6 py-4">
                <div className="flex items-center justify-center space-x-8">
                    {menuItems.map((item) => (
                        <Link 
                            key={item.path}
                            to={item.path} 
                            className="relative text-gray-800 hover:font-bold transition-colors"
                        >
                            {item.label}
                            {location.pathname === item.path && (
                                <span className="absolute left-0 right-0 bottom-0 border-b-2 border-gray-700 mt-1" />
                            )}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Version Mobile */}
            <nav className="md:hidden">
                <div className="px-4 py-3 flex justify-between items-center">
                    <Link to="/Mariage" className="text-gray-800 font-semibold">
                        Notre Mariage
                    </Link>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-600 focus:outline-none"
                    >
                        <svg 
                            className="w-8 h-8" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menu mobile déroulant */}
                {isMenuOpen && (
                    <div className="bg-white border-t border-gray-200">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-3 text-gray-800 hover:bg-gray-150 ${
                                    location.pathname === item.path ? 'font-bold bg-gray-50' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;