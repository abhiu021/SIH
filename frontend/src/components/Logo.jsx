import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "", showText = true, size = "default" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  const textSizeClasses = {
    small: "text-lg",
    default: "text-xl",
    large: "text-2xl"
  };

  const taglineSizeClasses = {
    small: "text-xs",
    default: "text-xs",
    large: "text-sm"
  };

  return (
    <Link to="/" className={`flex items-center space-x-4 group ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M10 10c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm10 0c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Main Icon - Fort/Temple Design */}
        <div className="relative z-10">
          <svg 
            width={size === "small" ? "20" : size === "large" ? "28" : "24"} 
            height={size === "small" ? "20" : size === "large" ? "28" : "24"} 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white"
          >
            {/* Fort Base */}
            <rect x="3" y="12" width="18" height="8" fill="currentColor" rx="1"/>
            
            {/* Fort Walls */}
            <rect x="2" y="10" width="20" height="2" fill="currentColor"/>
            
            {/* Central Tower */}
            <rect x="10" y="6" width="4" height="6" fill="currentColor" rx="0.5"/>
            
            {/* Tower Top */}
            <polygon points="12,2 8,6 16,6" fill="currentColor"/>
            
            {/* Side Towers */}
            <rect x="5" y="8" width="2" height="4" fill="currentColor" rx="0.5"/>
            <rect x="17" y="8" width="2" height="4" fill="currentColor" rx="0.5"/>
            
            {/* Tower Tops */}
            <polygon points="6,6 4,8 8,8" fill="currentColor"/>
            <polygon points="18,6 16,8 20,8" fill="currentColor"/>
            
            {/* Flag */}
            <rect x="11.5" y="1" width="1" height="2" fill="currentColor"/>
            <polygon points="12.5,1 12.5,2 13.5,1.5" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>

      {/* Text */}
      {showText && (
        <div>
          <span className={`${textSizeClasses[size]} font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300`}>
            Maharashtra Tourism
          </span>
          <div className={`${taglineSizeClasses[size]} text-orange-500 font-semibold -mt-1`}>
            Explore the Land of Warriors
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
