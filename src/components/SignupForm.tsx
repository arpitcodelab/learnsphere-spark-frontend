
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Sparkles, ShieldCheck } from 'lucide-react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would connect to Supabase for authentication
    console.log('Form submitted:', formData);
    alert('Signup successful! (This is a demo)');
  };

  return (
    <div className="bg-learnsphere-primary min-h-[80vh] relative overflow-hidden py-16">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-blue-400/20 blur-[100px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Futuristic grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,62,145,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,62,145,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        {/* Animated particles */}
        {Array(12).fill(0).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-cyan-400/30 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto bg-gradient-to-b from-learnsphere-card/90 to-learnsphere-tertiary/90 backdrop-blur-sm border border-learnsphere-secondary/30 rounded-lg p-8 shadow-[0_0_25px_rgba(0,62,145,0.3)] animate-fade-in">
          
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-learnsphere-white via-cyan-300 to-learnsphere-white bg-clip-text text-transparent">
              Begin Your Learning Journey
            </h2>
            <p className="text-cyan-300/80 text-sm mt-2">Join thousands of students unlocking their potential</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4 group">
              <label htmlFor="name" className="block text-learnsphere-white mb-2 text-sm">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-learnsphere-primary/70 text-learnsphere-white border border-learnsphere-secondary/30 rounded-md px-3 py-2 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 placeholder:text-learnsphere-gray/50"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="absolute inset-0 border border-cyan-400/0 rounded-md group-focus-within:border-cyan-400/20 group-focus-within:animate-pulse-glow pointer-events-none"></div>
              </div>
            </div>
            
            <div className="mb-4 group">
              <label htmlFor="email" className="block text-learnsphere-white mb-2 text-sm">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-learnsphere-primary/70 text-learnsphere-white border border-learnsphere-secondary/30 rounded-md px-3 py-2 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 placeholder:text-learnsphere-gray/50"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="absolute inset-0 border border-cyan-400/0 rounded-md group-focus-within:border-cyan-400/20 group-focus-within:animate-pulse-glow pointer-events-none"></div>
              </div>
            </div>
            
            <div className="mb-6 group">
              <label htmlFor="password" className="block text-learnsphere-white mb-2 text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-learnsphere-primary/70 text-learnsphere-white border border-learnsphere-secondary/30 rounded-md px-3 py-2 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 placeholder:text-learnsphere-gray/50"
                  placeholder="********"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="absolute inset-0 border border-cyan-400/0 rounded-md group-focus-within:border-cyan-400/20 group-focus-within:animate-pulse-glow pointer-events-none"></div>
                <ShieldCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400/50 w-4 h-4" />
              </div>
              <p className="text-xs text-learnsphere-gray mt-1">Minimum 8 characters required</p>
            </div>
            
            <div className="mb-6">
              <label className="flex items-center group cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    className="opacity-0 absolute h-4 w-4"
                    required
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <div className={`mr-2 w-4 h-4 border ${formData.agreeTerms ? 'bg-cyan-400/30 border-cyan-400/70' : 'border-learnsphere-gray/30 bg-learnsphere-primary/70'} rounded transition-colors duration-300`}>
                    {formData.agreeTerms && (
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-learnsphere-gray text-sm">
                  I agree to the{' '}
                  <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full group relative bg-gradient-to-r from-learnsphere-secondary/90 to-cyan-500/80 text-learnsphere-white py-3 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,62,145,0.6)] hover:scale-[1.02] overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center">
                <span>Join LearnSphere</span>
                <Sparkles className="ml-2 w-4 h-4 group-hover:animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-learnsphere-gray">
              Already have an account?{' '}
              <Link to="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:underline">
                Log in <Zap className="inline w-3 h-3" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
