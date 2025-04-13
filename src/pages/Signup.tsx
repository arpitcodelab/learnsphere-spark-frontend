
import React from 'react';
import Header from '@/components/Header';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col bg-learnsphere-primary">
      <Header />
      <main className="flex-grow">
        <div className="pt-20">
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
