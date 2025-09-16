import React from 'react';

const Hero = ({ title, subtitle, backgroundImage, children }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300/30 rounded-full blur-xl floating-animation"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-amber-400/40 rounded-full blur-lg floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-yellow-400/35 rounded-full blur-lg floating-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-orange-500/30 rounded-full blur-md floating-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Welcome Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-orange-200">
            <span className="text-2xl mr-3">🏛️</span>
            <span className="text-orange-600 font-bold text-lg">Maharashtra Tourism</span>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="block text-gradient">
            {title}
          </span>
        </h1>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-700 font-medium">
            {subtitle}
          </p>
        )}
        
        {/* Action Buttons */}
        {children && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {children}
          </div>
        )}

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700 font-semibold text-sm">Amazing Destinations</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600 mb-2">25+</div>
            <div className="text-gray-700 font-semibold text-sm">Cultural Events</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-700 font-semibold text-sm">Travel Routes</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3">
          <span className="text-gray-600 font-medium text-sm">Discover More</span>
          <div className="w-8 h-12 border-2 border-orange-300 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-orange-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
