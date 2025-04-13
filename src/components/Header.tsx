
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-learnsphere-primary bg-opacity-60 backdrop-blur-md border-b border-learnsphere-secondary/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <span className="text-2xl font-bold relative">
            <span className="bg-gradient-to-r from-learnsphere-white via-cyan-300 to-learnsphere-white bg-clip-text text-transparent">
              Learn<span className="text-cyan-400">Sphere</span>
            </span>
            <Zap size={18} className="absolute -top-2 -right-4 text-cyan-400 opacity-70 group-hover:animate-pulse" />
          </span>
        </Link>

        {/* Desktop Navigation with enhanced styling */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/#pricing" className="relative text-learnsphere-white hover:text-cyan-300 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cyan-400/70 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Pricing
          </Link>
          <Link to="/signup" className="relative text-learnsphere-white hover:text-cyan-300 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cyan-400/70 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Sign Up
          </Link>
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-learnsphere-secondary/90 to-cyan-500/80 text-learnsphere-white px-4 py-2 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,62,145,0.6)] border border-learnsphere-secondary/30 hover:scale-105"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-learnsphere-white hover:text-cyan-300 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu with enhanced styling */}
      {isOpen && (
        <div className="md:hidden bg-learnsphere-tertiary/80 backdrop-blur-lg border-t border-learnsphere-secondary/30">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/#pricing" 
              className="text-learnsphere-white py-2 border-b border-learnsphere-secondary/20 hover:text-cyan-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/signup" 
              className="text-learnsphere-white py-2 border-b border-learnsphere-secondary/20 hover:text-cyan-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-learnsphere-secondary/90 to-cyan-500/80 text-learnsphere-white px-4 py-2 rounded text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,62,145,0.6)] border border-learnsphere-secondary/30"
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
