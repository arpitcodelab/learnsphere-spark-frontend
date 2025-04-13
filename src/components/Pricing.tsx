
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface PlanProps {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const PricingCard = ({ name, price, features, buttonText, isPopular }: PlanProps) => {
  return (
    <div className={`bg-learnsphere-blue border border-learnsphere-red/30 rounded-lg p-8 flex flex-col card-hover-effect ${isPopular ? 'relative overflow-hidden' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-learnsphere-red text-xs uppercase font-semibold text-learnsphere-white py-1 px-3 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      <h3 className="text-2xl font-bold text-learnsphere-white mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-learnsphere-red">{price}</span>
        {price !== "Free" && <span className="text-learnsphere-gray">/month</span>}
      </div>
      <ul className="mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start mb-3">
            <Check size={18} className="text-learnsphere-red mr-2 mt-1 flex-shrink-0" />
            <span className="text-learnsphere-gray">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/signup"
        className="mt-auto bg-learnsphere-red text-learnsphere-white py-3 px-4 rounded text-center font-medium btn-hover-effect"
      >
        {buttonText}
      </Link>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Access to 10 courses",
        "Basic tutorials",
        "Community forums",
        "Mobile access",
        "Email support"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Standard",
      price: "$12",
      features: [
        "Unlimited courses",
        "Advanced tutorials",
        "Priority support",
        "Offline downloads",
        "Course completion certificates"
      ],
      buttonText: "Try for Free",
      isPopular: true
    },
    {
      name: "Premium",
      price: "$30",
      features: [
        "Everything in Standard",
        "Personalized coaching",
        "Exclusive webinars",
        "Project reviews",
        "Career guidance"
      ],
      buttonText: "Try for Free"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-learnsphere-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-learnsphere-gray max-w-2xl mx-auto">
            Select the perfect learning plan that suits your needs and budget. 
            All plans come with a 7-day free trial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
