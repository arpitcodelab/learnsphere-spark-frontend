
import React from 'react';
import Header from '@/components/Header';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
