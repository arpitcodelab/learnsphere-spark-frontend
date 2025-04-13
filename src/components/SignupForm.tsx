
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="bg-gradient-to-b from-learnsphere-primary to-learnsphere-tertiary/80 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-learnsphere-card border border-learnsphere-secondary/30 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-learnsphere-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-learnsphere-primary text-learnsphere-white border border-learnsphere-gray/30 rounded px-3 py-2 focus:outline-none focus:border-learnsphere-secondary"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-learnsphere-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-learnsphere-primary text-learnsphere-white border border-learnsphere-gray/30 rounded px-3 py-2 focus:outline-none focus:border-learnsphere-secondary"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-learnsphere-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-learnsphere-primary text-learnsphere-white border border-learnsphere-gray/30 rounded px-3 py-2 focus:outline-none focus:border-learnsphere-secondary"
                placeholder="********"
                required
                minLength={8}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  className="mr-2"
                  required
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <span className="text-learnsphere-gray text-sm">
                  I agree to the{' '}
                  <Link to="/terms" className="text-learnsphere-secondary hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-learnsphere-secondary hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-learnsphere-secondary text-learnsphere-white py-3 rounded font-medium btn-hover-effect"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-6 text-learnsphere-gray">
            Already have an account?{' '}
            <Link to="/login" className="text-learnsphere-secondary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
