import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold tracking-wider">SIPENA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-blue-200 transition duration-300 text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              to="/penelitian" 
              className="text-white hover:text-blue-200 transition duration-300 text-sm font-medium"
            >
              Penelitian
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
