import React from 'react';

interface LogoProps {
  className?: string;
  /**
   * Size can be:
   * - 'sm': small (mobile)
   * - 'md': medium (default/tablet)
   * - 'lg': large (desktop)
   * - 'responsive': auto scales with screen size
   */
  size?: 'sm' | 'md' | 'lg' | 'responsive';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  // Responsive sizing using Tailwind's responsive classes
  // 'responsive' will use w-8 h-8 on mobile, w-12 h-12 on md, w-16 h-16 on lg+
  const sizeClasses =
    size === 'responsive'
      ? 'w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16'
      : size === 'sm'
      ? 'w-8 h-8'
      : size === 'lg'
      ? 'w-13 h-13'
      : 'w-12 h-12';

  return (
    <div className={`inline-block ${sizeClasses} ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ display: 'block' }}
      >
        {/* Background Circle */}
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="#2563EB"
          className="transition-colors duration-300"
        />

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