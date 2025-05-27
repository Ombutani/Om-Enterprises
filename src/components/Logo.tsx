import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`inline-block ${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <circle cx="16" cy="16" r="15" fill="#2563EB" className="transition-colors duration-300" />
        
        {/* Ship Icon */}
        <path 
          d="M8 20L12 16L16 20L20 16L24 20" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="transition-all duration-300" 
        />
        
        {/* Arrow Up */}
        <path 
          d="M16 8L16 16" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="transition-all duration-300" 
        />
        <path 
          d="M12 12L16 8L20 12" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-all duration-300" 
        />
        
        {/* Arrow Down */}
        <path 
          d="M16 24L16 16" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="transition-all duration-300" 
        />
        <path 
          d="M12 20L16 24L20 20" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-all duration-300" 
        />
      </svg>
    </div>
  );
};

export default Logo; 