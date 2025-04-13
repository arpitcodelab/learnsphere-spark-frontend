
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-learnsphere-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-learnsphere-secondary blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-learnsphere-tertiary blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Master New Skills with <span className="text-learnsphere-secondary">LearnSphere</span>
          </h1>
          <p className="text-learnsphere-gray text-lg md:text-xl mb-10">
            Flexible plans for every learner. Join thousands of students already unlocking their potential.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center bg-learnsphere-secondary text-learnsphere-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,62,145,0.6)]"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
