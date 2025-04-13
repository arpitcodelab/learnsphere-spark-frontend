
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Circle, Triangle, Hexagon } from 'lucide-react';
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
  return (
    <div 
      className={`bg-learnsphere-card border border-learnsphere-secondary/30 rounded-xl p-8 flex flex-col relative
      ${isPopular ? 'border-learnsphere-secondary/70 scale-105 z-10' : ''} card-hover-effect`}
    >
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-full ${isPopular ? 'bg-learnsphere-secondary/20' : 'bg-learnsphere-tertiary/30'}`}>
          {icon}
        </div>
      </div>
      
      <div className="text-center">
        <Badge 
          variant="outline" 
          className={`uppercase text-xs font-semibold mb-2 
          ${isPopular ? 'bg-learnsphere-secondary/20 text-learnsphere-secondary border-learnsphere-secondary/30' : 'bg-learnsphere-tertiary/20'}`}
        >
          {name}
        </Badge>
        <h3 className="text-2xl font-bold text-learnsphere-white mb-1">{price}</h3>
        <p className="text-learnsphere-gray text-sm mb-4">{description}</p>
      </div>
      
      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-learnsphere-secondary mr-2 mt-1 flex-shrink-0" />
            <span className="text-learnsphere-gray text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/signup"
        className={`mt-auto py-3 px-4 rounded-md text-center font-medium transition-all duration-300
        flex items-center justify-center gap-2
        ${isPopular 
          ? 'bg-learnsphere-secondary text-learnsphere-white hover:bg-learnsphere-secondary/90' 
          : 'bg-learnsphere-tertiary/50 text-learnsphere-white hover:bg-learnsphere-tertiary'
        }`}
      >
        <span className={`p-1 rounded-full ${isPopular ? 'bg-learnsphere-white/20' : 'bg-learnsphere-secondary/20'}`}>
          {icon}
        </span>
        {buttonText}
      </Link>
      
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <div className="bg-learnsphere-secondary text-xs uppercase font-semibold text-learnsphere-white py-1 px-3 rounded-full">
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

  return (
    <section id="pricing" className="py-20 bg-learnsphere-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-60 h-60 rounded-full bg-learnsphere-secondary blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-learnsphere-tertiary blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible pricing</h2>
          <p className="text-learnsphere-gray max-w-2xl mx-auto">
            for teams of all sizes
          </p>
        </div>

        {/* Monthly/Annual Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-learnsphere-tertiary/50 rounded-md">
            <button
              className={`py-2 px-6 rounded text-sm font-medium transition-all ${
                !isAnnual ? 'bg-learnsphere-secondary text-learnsphere-white' : 'text-learnsphere-gray'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              MONTHLY
            </button>
            <button
              className={`py-2 px-6 rounded text-sm font-medium transition-all ${
                isAnnual ? 'bg-learnsphere-secondary text-learnsphere-white' : 'text-learnsphere-gray'
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
        
        {/* Limited Time Offer */}
        <div className="text-center mt-8 text-learnsphere-gray text-sm">
          <p>- Limited time offer -</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
