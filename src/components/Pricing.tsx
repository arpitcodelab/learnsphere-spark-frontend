
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Circle, Triangle, Hexagon, Zap } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Badge } from '@/components/ui/badge';

interface PlanProps {
  name: string;
  price: string;
  annualPrice: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  icon: React.ReactNode;
}

const PricingCard = ({ 
  name, 
  price, 
  annualPrice, 
  description, 
  features, 
  buttonText, 
  isPopular, 
  icon 
}: PlanProps) => {
  // Define colors based on plan name
  const getBadgeColors = () => {
    switch(name) {
      case "Core":
        return "bg-blue-400/20 text-blue-400 border-blue-400/30";
      case "Overdrive":
        return "bg-green-400/20 text-green-400 border-green-400/30";
      case "Team":
        return "bg-purple-400/20 text-purple-400 border-purple-400/30";
      default:
        return "bg-learnsphere-tertiary/20";
    }
  };

  const getHoverGlow = () => {
    switch(name) {
      case "Core":
        return "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:border-blue-400/50";
      case "Overdrive":
        return "hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:border-green-400/50";
      case "Team":
        return "hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:border-purple-400/50";
      default:
        return "hover:shadow-[0_0_30px_rgba(0,62,145,0.5)]";
    }
  };
  
  return (
    <div 
      className={`bg-learnsphere-card/50 backdrop-blur-md border border-learnsphere-secondary/30 rounded-xl p-8 flex flex-col relative
      ${isPopular ? 'border-learnsphere-secondary/70 scale-105 z-10 shadow-[0_0_25px_rgba(0,62,145,0.4)]' : ''} 
      transition-all duration-300 ${getHoverGlow()}`}
    >
      {/* Futuristic corner lines */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-opacity-70 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-opacity-70 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-opacity-70 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-opacity-70 rounded-br-lg"></div>
      
      <div className="flex justify-center mb-4 relative">
        <div className={`p-3 rounded-full ${isPopular ? 'bg-learnsphere-secondary/20' : 'bg-learnsphere-tertiary/30'} relative`}>
          {icon}
          {/* Pulsing effect for the icon */}
          <div className={`absolute inset-0 rounded-full animate-pulse ${
            name === "Core" ? "bg-blue-400/10" : 
            name === "Overdrive" ? "bg-green-400/10" : 
            "bg-purple-400/10"
          }`}></div>
        </div>
      </div>
      
      <div className="text-center">
        <Badge 
          variant="outline" 
          className={`uppercase text-xs font-semibold mb-2 
          ${isPopular ? 'bg-learnsphere-secondary/20 text-learnsphere-secondary border-learnsphere-secondary/30' : getBadgeColors()}`}
        >
          {name}
        </Badge>
        <h3 className="text-2xl font-bold text-learnsphere-white mb-1 flex items-center justify-center">
          {price}
          <span className="ml-1 text-xs opacity-70">/mo</span>
        </h3>
        <p className="text-learnsphere-gray text-sm mb-4">{description}</p>
      </div>
      
      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start group">
            <div className="text-learnsphere-secondary mr-2 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Check size={18} className="group-hover:text-green-400" />
            </div>
            <span className="text-learnsphere-gray text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/signup"
        className={`mt-auto py-3 px-4 rounded-md text-center font-medium transition-all duration-300
        flex items-center justify-center gap-2 backdrop-blur-sm
        ${isPopular 
          ? 'bg-gradient-to-r from-learnsphere-secondary/90 to-cyan-500/80 text-learnsphere-white hover:shadow-[0_0_20px_rgba(0,62,145,0.6)]' 
          : name === "Core" 
            ? 'bg-gradient-to-r from-blue-500/70 to-blue-600/60 text-learnsphere-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]'
            : 'bg-gradient-to-r from-purple-500/70 to-purple-600/60 text-learnsphere-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]'
        }`}
      >
        <span className={`p-1 rounded-full ${isPopular ? 'bg-learnsphere-white/20' : 'bg-learnsphere-secondary/20'}`}>
          {icon}
        </span>
        {buttonText}
        <Zap size={16} className="ml-1 animate-pulse" />
      </Link>
      
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <div className="bg-gradient-to-r from-learnsphere-secondary/80 to-cyan-500/80 backdrop-blur-sm text-xs uppercase font-semibold text-learnsphere-white py-1 px-3 rounded-full shadow-[0_0_15px_rgba(0,100,200,0.5)]">
            Most Popular
          </div>
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Core",
      price: "$19",
      annualPrice: "$190",
      description: "Best for solo creators",
      icon: <Circle className="text-blue-400 w-5 h-5" />,
      features: [
        "100MB Cloud storage",
        "100+ prompt templates",
        "5 projects",
        "24/7 support",
        "Mobile access"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Overdrive",
      price: "$79",
      annualPrice: "$790",
      description: "Most popular plan",
      icon: <Triangle className="text-green-400 w-5 h-5" />,
      features: [
        "All Core features",
        "1TB additional storage",
        "Unlimited projects",
        "Analytics",
        "Priority support"
      ],
      buttonText: "Get Started",
      isPopular: true
    },
    {
      name: "Team",
      price: "$39",
      annualPrice: "$390",
      description: "Exclusively for teams",
      icon: <Hexagon className="text-purple-400 w-5 h-5" />,
      features: [
        "All Overdrive features",
        "10TB additional storage",
        "50% off per member",
        "Real-time collaboration",
        "Team management"
      ],
      buttonText: "Get Started"
    }
  ];

  // Animated particles background
  const particles = Array(20).fill(0);

  return (
    <section id="pricing" className="py-20 bg-learnsphere-primary relative overflow-hidden">
      {/* Animated particles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-learnsphere-secondary/30 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Background elements with enhanced glassmorphism effect */}
      <div className="absolute inset-0 backdrop-blur-lg bg-learnsphere-primary/30 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-learnsphere-secondary/30 blur-[100px]"></div>
        
        {/* Futuristic grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,62,145,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,62,145,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-learnsphere-white via-cyan-300 to-learnsphere-white bg-clip-text text-transparent">Flexible Pricing</h2>
          <p className="text-cyan-300 text-lg max-w-2xl mx-auto">
            for teams of all sizes
          </p>
        </div>

        {/* Monthly/Annual Toggle with enhanced styling */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-learnsphere-tertiary/50 backdrop-blur-sm rounded-md border border-learnsphere-secondary/30 shadow-[0_0_15px_rgba(0,62,145,0.3)]">
            <button
              className={`py-2 px-6 rounded text-sm font-medium transition-all ${
                !isAnnual 
                  ? 'bg-gradient-to-r from-learnsphere-secondary/90 to-cyan-500/80 text-learnsphere-white shadow-[0_0_10px_rgba(0,62,145,0.4)]' 
                  : 'text-learnsphere-gray hover:text-learnsphere-white'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              MONTHLY
            </button>
            <button
              className={`py-2 px-6 rounded text-sm font-medium transition-all ${
                isAnnual 
                  ? 'bg-gradient-to-r from-learnsphere-secondary/90 to-cyan-500/80 text-learnsphere-white shadow-[0_0_10px_rgba(0,62,145,0.4)]' 
                  : 'text-learnsphere-gray hover:text-learnsphere-white'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              ANNUAL
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              price={isAnnual ? plan.annualPrice : plan.price}
              annualPrice={plan.annualPrice}
            />
          ))}
        </div>
        
        {/* Limited Time Offer with enhanced styling */}
        <div className="text-center mt-12">
          <div className="inline-block bg-learnsphere-tertiary/30 backdrop-blur-sm border border-learnsphere-secondary/30 px-6 py-2 rounded-full">
            <p className="text-cyan-300 text-sm font-medium animate-pulse">- Limited time offer -</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
