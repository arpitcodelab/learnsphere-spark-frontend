
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-learnsphere-tertiary py-10 border-t border-learnsphere-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-learnsphere-white">
                Learn<span className="text-learnsphere-secondary">Sphere</span>
              </span>
            </Link>
            <p className="text-learnsphere-gray text-sm">
              Empowering learners worldwide with flexible education solutions.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-learnsphere-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-learnsphere-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-learnsphere-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:support@learnsphere.com" className="text-learnsphere-gray hover:text-learnsphere-secondary transition-colors">
                  support@learnsphere.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-learnsphere-secondary/10 mt-8 pt-8 text-center">
          <p className="text-learnsphere-gray text-sm">
            &copy; {new Date().getFullYear()} LearnSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
