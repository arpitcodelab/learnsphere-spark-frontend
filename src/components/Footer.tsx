
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Github, Youtube, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-learnsphere-tertiary to-learnsphere-primary py-14 border-t border-learnsphere-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,62,145,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,62,145,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        
        {/* Tech circles */}
        <div className="absolute bottom-20 right-10 w-72 h-72 border border-cyan-500/10 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 border border-cyan-500/5 rounded-full"></div>
        
        {/* Glowing orbs */}
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-blue-400/5 blur-[100px] animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-60 h-60 rounded-full bg-cyan-500/5 blur-[80px] animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating particles */}
        {Array(6).fill(0).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-cyan-400/30 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 5}s`
            }}
          />
        ))}

        {/* Tech scan line */}
        <div className="absolute h-20 w-full left-0 right-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-tech-scan"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-5 group">
              <span className="text-2xl font-bold text-learnsphere-white relative">
                Learn
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Sphere</span>
                <span className="absolute -inset-1 rounded-lg border border-cyan-500/0 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,200,255,0.3)] transition-all duration-700"></span>
              </span>
            </Link>
            <p className="text-learnsphere-gray text-sm leading-relaxed mb-6 group-hover:text-learnsphere-white/90 transition-colors duration-300">
              Empowering learners worldwide with cutting-edge education solutions for the digital future.
            </p>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3 text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 group">
                <div className="p-2 rounded-full bg-learnsphere-card/50 border border-learnsphere-secondary/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_8px_rgba(0,200,255,0.3)] transition-all duration-500">
                  <MapPin size={16} className="group-hover:animate-pulse" />
                </div>
                <span className="text-sm">123 Tech Avenue, Digital City</span>
              </div>
              
              <div className="flex items-center gap-3 text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 group">
                <div className="p-2 rounded-full bg-learnsphere-card/50 border border-learnsphere-secondary/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_8px_rgba(0,200,255,0.3)] transition-all duration-500">
                  <Mail size={16} className="group-hover:animate-pulse" />
                </div>
                <a href="mailto:support@learnsphere.com" className="text-sm">support@learnsphere.com</a>
              </div>
              
              <div className="flex items-center gap-3 text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 group">
                <div className="p-2 rounded-full bg-learnsphere-card/50 border border-learnsphere-secondary/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_8px_rgba(0,200,255,0.3)] transition-all duration-500">
                  <Phone size={16} className="group-hover:animate-pulse" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-5 bg-gradient-to-r from-learnsphere-white to-cyan-300 bg-clip-text text-transparent">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-5 bg-gradient-to-r from-learnsphere-white to-cyan-300 bg-clip-text text-transparent">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-5 bg-gradient-to-r from-learnsphere-white to-cyan-300 bg-clip-text text-transparent">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Community
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-learnsphere-gray hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-learnsphere-secondary/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_5px_rgba(0,200,255,0.5)] transition-all duration-300"></span>
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center my-8">
          <Button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-learnsphere-tertiary to-learnsphere-secondary hover:from-learnsphere-secondary hover:to-learnsphere-tertiary text-learnsphere-white border border-learnsphere-secondary/30 group relative overflow-hidden"
          >
            <span className="flex items-center gap-2 relative z-10">
              <span>Back to Top</span>
              <ArrowUp size={16} className="group-hover:animate-bounce" />
            </span>
            
            {/* Button effects */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000"></span>
          </Button>
        </div>
        
        <div className="border-t border-learnsphere-secondary/10 mt-6 pt-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {/* Social Media Icons */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-learnsphere-card/80 border border-learnsphere-secondary/20 text-learnsphere-gray hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_8px_rgba(0,200,255,0.3)] transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Facebook size={18} className="group-hover:animate-pulse" />
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-learnsphere-card/80 border border-learnsphere-secondary/20 text-learnsphere-gray hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_8px_rgba(0,200,255,0.3)] transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter size={18} className="group-hover:animate-pulse" />
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-learnsphere-card/80 border border-learnsphere-secondary/20 text-learnsphere-gray hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_8px_rgba(0,200,255,0.3)] transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram size={18} className="group-hover:animate-pulse" />
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-learnsphere-card/80 border border-learnsphere-secondary/20 text-learnsphere-gray hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_8px_rgba(0,200,255,0.3)] transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={18} className="group-hover:animate-pulse" />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-learnsphere-card/80 border border-learnsphere-secondary/20 text-learnsphere-gray hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_8px_rgba(0,200,255,0.3)] transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="group-hover:animate-pulse" />
            </a>
          </div>
          
          <p className="text-learnsphere-gray text-sm relative inline-block group">
            &copy; {new Date().getFullYear()} LearnSphere. All rights reserved.
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover:w-full transition-all duration-700"></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
