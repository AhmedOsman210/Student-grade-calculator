import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" bg-green-600 text-white font-bold py-4 lg:py-6 px-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 ">
                    <h1 className="text-lg lg:text-xl">Somalia Wedding Guest</h1>
               
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex lg:items-center space-x-6 ${isOpen ? '' : 'hidden'}`}>
                    <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                        <Link to="/" className="py-2 lg:py-0">Home</Link>
                        <Link to="/About" className="py-2 lg:py-0">About</Link>
                        <Link to="/Grade" className="py-2 lg:py-0">Grade</Link>
                    </div>
                   
                </div>
            </div>
        </nav>
    );
}

export default Navbar;