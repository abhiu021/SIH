import React from 'react';
import { Link } from 'react-router-dom';

const ShivajiLegacy = () => {
  const forts = [
    {
      name: 'Shivneri Fort',
      significance: 'Birthplace of Chhatrapati Shivaji Maharaj',
      description: 'The fort where the great Maratha king was born in 1630',
      icon: '🏰'
    },
    {
      name: 'Torna Fort',
      significance: 'First Fort Captured',
      description: 'Captured by Shivaji Maharaj at age 16, marking the beginning of the Maratha Empire',
      icon: '⚔️'
    },
    {
      name: 'Raigad Fort',
      significance: 'Capital of Maratha Empire',
      description: 'The magnificent capital where Shivaji Maharaj was coronated as Chhatrapati',
      icon: '👑'
    },
    {
      name: 'Pratapgad Fort',
      significance: 'Victory over Afzal Khan',
      description: 'Historic site of the legendary battle where Shivaji Maharaj defeated Afzal Khan',
      icon: '🛡️'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8">
            <span className="text-orange-600 font-bold text-lg">🏛️ Chhatrapati Shivaji Maharaj</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-gradient">The Great Maratha Warrior King</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Discover the legendary forts and historical sites that shaped the Maratha Empire and learn about the life and legacy of Maharashtra's greatest ruler
          </p>
        </div>

        {/* Key Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-4xl mb-4">⚔️</div>
            <div className="text-2xl font-bold text-orange-600 mb-2">300+ Forts</div>
            <div className="text-gray-700 font-semibold">Built and Captured</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-4xl mb-4">👑</div>
            <div className="text-2xl font-bold text-orange-600 mb-2">1674</div>
            <div className="text-gray-700 font-semibold">Coronation as Chhatrapati</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <div className="text-2xl font-bold text-orange-600 mb-2">50+ Years</div>
            <div className="text-gray-700 font-semibold">Of Military Excellence</div>
          </div>
        </div>

        {/* Forts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {forts.map((fort, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 text-center">{fort.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                {fort.name}
              </h3>
              <div className="text-sm font-semibold text-orange-600 mb-2 text-center">
                {fort.significance}
              </div>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {fort.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Explore the Maratha Empire's Legacy
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Follow the footsteps of Chhatrapati Shivaji Maharaj through his magnificent forts, 
              learn about his military strategies, and experience the rich history of the Maratha Empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/itineraries"
                className="btn-primary group text-lg px-8 py-3"
              >
                <span className="flex items-center justify-center">
                  View Fort Trail Itinerary
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/destinations"
                className="btn-secondary group text-lg px-8 py-3"
              >
                <span className="flex items-center justify-center">
                  Explore All Forts
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300/20 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-400/30 rounded-full blur-lg floating-animation" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default ShivajiLegacy;
