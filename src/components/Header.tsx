
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-learnsphere-black bg-opacity-95 border-b border-learnsphere-red/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-learnsphere-white">
            Learn<span className="text-learnsphere-red">Sphere</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/#pricing" className="nav-link-hover text-learnsphere-white">
            Pricing
          </Link>
          <Link to="/signup" className="nav-link-hover text-learnsphere-white">
            Sign Up
          </Link>
          <Link 
            to="/login" 
            className="bg-learnsphere-red text-learnsphere-white px-4 py-2 rounded btn-hover-effect"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-learnsphere-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-learnsphere-blue/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/#pricing" 
              className="text-learnsphere-white py-2 border-b border-learnsphere-white/10"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/signup" 
              className="text-learnsphere-white py-2 border-b border-learnsphere-white/10"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            <Link 
              to="/login" 
              className="bg-learnsphere-red text-learnsphere-white px-4 py-2 rounded text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
