
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-learnsphere-primary relative overflow-hidden">
      {/* Enhanced background elements for futuristic look */}
      <div className="absolute inset-0 backdrop-blur-sm bg-learnsphere-primary/30 pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan-500/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-400/30 blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Futuristic grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,62,145,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,62,145,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        {/* Floating particles */}
        {Array(15).fill(0).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-cyan-400/40 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-learnsphere-white via-cyan-300 to-learnsphere-white bg-clip-text text-transparent">
            Master New Skills with LearnSphere
          </h1>
          <p className="text-cyan-300 text-lg md:text-xl mb-10">
            Flexible plans for every learner. Join thousands of students already unlocking their potential.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center bg-gradient-to-r from-learnsphere-secondary/90 to-cyan-500/80 text-learnsphere-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,62,145,0.6)] rounded-md border border-learnsphere-secondary/30 group"
          >
            <span>Try for Free</span>
            <Zap className="ml-2 w-5 h-5 group-hover:animate-pulse" />
          </Link>
          
          {/* Futuristic stats counter */}
          <div className="mt-16 grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">5000+</div>
              <div className="text-learnsphere-gray text-sm">Active Learners</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">200+</div>
              <div className="text-learnsphere-gray text-sm">Courses</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">98%</div>
              <div className="text-learnsphere-gray text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
