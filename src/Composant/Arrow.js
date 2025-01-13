// mariage/src/Composant/Arrow.js
import React from 'react';

import "../App.css"
export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute left-0 z-10 flex items-center justify-center w-50 h-50 bg-gray-400 rounded-full shadow-lg cursor-pointer hover:bg-gray-700`}
            style={{ ...style, display: "block", top: "50%", transform: "translateY(-50%)" }}
            onClick={onClick}
        >
            &#10094; {/* Flèche gauche */}
        </div>
    );
};

export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute right-0 z-10 flex items-center justify-center w-50 h-50 bg-gray-400 rounded-full shadow-lg cursor-pointer hover:bg-gray-700`}
            style={{ ...style, display: "block", top: "50%", transform: "translateY(-50%)" }}
            onClick={onClick}
        >
            &#10095; {/* Flèche droite */}
        </div>
    );
};