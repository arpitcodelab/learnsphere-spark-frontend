
import React from 'react';
import { BookOpen, Award, Users, Clock, Video, Star } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-learnsphere-blue p-6 rounded-lg border border-learnsphere-red/20 card-hover-effect">
      <div className="text-learnsphere-red mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-learnsphere-gray">{description}</p>
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
    <section className="py-20 bg-learnsphere-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LearnSphere</h2>
          <p className="text-learnsphere-gray max-w-2xl mx-auto">
            Our platform offers everything you need to advance your skills and achieve your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
