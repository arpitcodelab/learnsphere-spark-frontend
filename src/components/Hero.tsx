
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-learnsphere-primary to-learnsphere-tertiary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Master New Skills with <span className="text-learnsphere-secondary">LearnSphere</span>
          </h1>
          <p className="text-learnsphere-gray text-lg md:text-xl mb-10">
            Flexible plans for every learner. Join thousands of students already unlocking their potential.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-learnsphere-secondary text-learnsphere-white px-8 py-4 rounded-md text-lg font-medium btn-hover-effect"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
