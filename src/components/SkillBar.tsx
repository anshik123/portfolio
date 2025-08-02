import React, { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
  delay?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ 
  skill, 
  percentage, 
  color, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedPercentage(percentage);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [percentage, delay]);

  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{skill}</span>
        <span className="text-sm text-gray-400">{animatedPercentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{
            width: isVisible ? `${animatedPercentage}%` : '0%'
          }}
        />
      </div>
    </div>
  );
};