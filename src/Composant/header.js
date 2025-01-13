import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-center space-x-8">
                    <Link to="/" className="text-gray-800 hover:text-gray-600 transition-colors">
                        Programme
                    </Link>
                    <Link to="/lieu" className="text-gray-800 hover:text-gray-600 transition-colors">
                        Lieu
                    </Link>
                    <Link to="/hebergement" className="text-gray-800 hover:text-gray-600 transition-colors">
                        Hébergement
                    </Link>
                    <Link to="/rsvp" className="text-gray-800 hover:text-gray-600 transition-colors">
                        RSVP
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
