
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    console.log('Login submitted:', formData);
    alert('Login successful! (This is a demo)');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-learnsphere-black to-learnsphere-blue/80 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-learnsphere-blue border border-learnsphere-red/30 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-learnsphere-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-learnsphere-black text-learnsphere-white border border-learnsphere-gray/30 rounded px-3 py-2 focus:outline-none focus:border-learnsphere-red"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="password" className="block text-learnsphere-white">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-sm text-learnsphere-red hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-learnsphere-black text-learnsphere-white border border-learnsphere-gray/30 rounded px-3 py-2 focus:outline-none focus:border-learnsphere-red"
                    placeholder="********"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="mr-2"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <span className="text-learnsphere-gray">Remember me</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-learnsphere-red text-learnsphere-white py-3 rounded font-medium btn-hover-effect"
                >
                  Log In
                </button>
              </form>
              <p className="text-center mt-6 text-learnsphere-gray">
                Don't have an account?{' '}
                <Link to="/signup" className="text-learnsphere-red hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
