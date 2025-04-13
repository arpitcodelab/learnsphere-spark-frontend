
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "Master New Skills with LearnSphere";
  
  useEffect(() => {
    // Animation function that handles the typing effect
    const startTypingAnimation = () => {
      // Reset state for new animation cycle
      setDisplayText('');
      setIsTypingComplete(false);
      
      let i = 0;
      // Type each character one by one
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(prev => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 100);
      
      return typingInterval;
    };
    
    // Start initial animation with a small delay
    const initialDelay = setTimeout(() => {
      const typingInterval = startTypingAnimation();
      
      // Set up the repeating animation cycle
      const animationCycle = setInterval(() => {
        // Wait for current typing to finish, then clear and restart
        clearInterval(typingInterval);
        setDisplayText('');
        setIsTypingComplete(false);
        
        // Short pause before starting the next typing cycle
        setTimeout(startTypingAnimation, 500);
      }, 6000); // Repeat every 6 seconds
      
      // Clean up all intervals and timeouts on unmount
      return () => {
        clearInterval(typingInterval);
        clearInterval(animationCycle);
      };
    }, 500);
    
    return () => clearTimeout(initialDelay);
  }, []); // Only run once when component mounts
  
  return (
    <section className="pt-32 pb-24 bg-learnsphere-primary relative overflow-hidden">
      {/* Background elements with increased opacity and blur for glassy effect */}
      <div className="absolute inset-0 backdrop-blur-sm bg-learnsphere-primary/50 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-learnsphere-secondary/70 blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-learnsphere-tertiary/70 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[4rem]">
            {displayText}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-8 ml-1 bg-learnsphere-secondary animate-pulse"></span>
            )}
          </h1>
          <p className="text-learnsphere-gray text-lg md:text-xl mb-10">
            Flexible plans for every learner. Join thousands of students already unlocking their potential.
          </p>
          <Link
            to="/signup"
            className={`inline-flex items-center justify-center bg-learnsphere-secondary/90 backdrop-blur-sm text-learnsphere-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,62,145,0.6)] border border-learnsphere-secondary/30 ${isClicked ? 'rounded-full' : 'rounded-md'}`}
            onClick={() => setIsClicked(true)}
            onMouseLeave={() => setIsClicked(false)}
          >
            Try for Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
