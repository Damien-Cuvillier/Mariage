import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation(); // Récupère l'URL actuelle

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-center space-x-8">
                    <Link to="/" className="relative text-gray-800 hover:font-bold transition-colors">
                        Programme
                        {location.pathname === '/' && (
                            <span className="absolute left-0 right-0 bottom-0 border-b-2 border-gray-700 mt-1" />
                        )}
                    </Link>
                    {/* <Link to="/lieu" className="relative text-gray-800 hover:font-bold transition-colors">
                        Lieu
                        {location.pathname === '/lieu' && (
                            <span className="absolute left-0 right-0 bottom-0 border-b-2 border-gray-700 mt-1" />
                        )}
                    </Link> */}
                    <Link to="/hebergement" className="relative text-gray-800 hover:font-bold transition-colors">
                        Hébergement
                        {location.pathname === '/hebergement' && (
                            <span className="absolute left-0 right-0 bottom-0 border-b-2 border-gray-700 mt-1" />
                        )}
                    </Link>
                    <Link to="/rsvp" className="relative text-gray-800 hover:font-bold transition-colors rounded-lg">
                        Confirmez votre venue !
                        {location.pathname === '/rsvp' && (
                            <span className="absolute left-0 right-0 bottom-0 border-b-2 border-gray-700 mt-1" />
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;