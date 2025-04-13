
import React from 'react';
import { BookOpen, Award, Users, Clock, Video, Star } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div 
      className="bg-gradient-to-br from-learnsphere-tertiary/80 to-learnsphere-card/90 p-6 rounded-lg border border-learnsphere-secondary/30 backdrop-blur-sm relative overflow-hidden group animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,62,145,0.4),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-colors duration-700"></div>
      
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 border border-cyan-500/0 rounded-lg group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,200,255,0.3),inset_0_0_15px_rgba(0,200,255,0.2)] transition-all duration-700"></div>
      
      <div className="relative z-10">
        {/* Icon with glow effect */}
        <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300 group-hover:animate-pulse-glow">
          <div className="relative">
            {icon}
            <div className="absolute inset-0 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 text-cyan-400">{icon}</div>
          </div>
        </div>
        
        {/* Title with gradient text on hover */}
        <h3 className="text-xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-learnsphere-white group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        
        {/* Description with fade-in effect */}
        <p className="text-learnsphere-gray group-hover:text-learnsphere-white/90 transition-colors duration-500">
          {description}
        </p>
      </div>
      
      {/* Tech lines in background */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BookOpen size={40} />,
      title: "Comprehensive Courses",
      description: "Access thousands of expertly crafted courses across multiple disciplines."
    },
    {
      icon: <Award size={40} />,
      title: "Certificates",
      description: "Earn recognized certificates to showcase your newly acquired skills."
    },
    {
      icon: <Users size={40} />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience."
    },
    {
      icon: <Clock size={40} />,
      title: "Learn at Your Pace",
      description: "Flexible learning schedule that adapts to your busy lifestyle."
    },
    {
      icon: <Video size={40} />,
      title: "HD Video Content",
      description: "High-quality video lessons with practical demonstrations."
    },
    {
      icon: <Star size={40} />,
      title: "Personalized Learning",
      description: "Tailored recommendations based on your interests and progress."
    }
  ];

  return (
    <section className="py-20 bg-learnsphere-primary relative overflow-hidden">
      {/* Background futuristic elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,62,145,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,62,145,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        
        {/* Glowing orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-400/10 blur-[100px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Tech circles */}
        <div className="absolute top-40 right-10 w-72 h-72 border border-cyan-500/10 rounded-full"></div>
        <div className="absolute top-60 right-20 w-40 h-40 border border-cyan-500/5 rounded-full"></div>
        
        {/* Floating particles */}
        {Array(8).fill(0).map((_, index) => (
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-learnsphere-white via-cyan-300 to-learnsphere-white bg-clip-text text-transparent inline-block">
            Why Choose LearnSphere
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent mx-auto my-4"></div>
          <p className="text-learnsphere-gray max-w-2xl mx-auto">
            Our platform offers everything you need to advance your skills and achieve your goals in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
