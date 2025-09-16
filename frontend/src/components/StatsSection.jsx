import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: '50+',
      label: 'Destinations',
      icon: '🏛️',
      description: 'Amazing places to explore'
    },
    {
      number: '25+',
      label: 'Events',
      icon: '🎉',
      description: 'Festivals & celebrations'
    },
    {
      number: '15+',
      label: 'Itineraries',
      icon: '🗺️',
      description: 'Curated travel routes'
    },
    {
      number: '100K+',
      label: 'Visitors',
      icon: '👥',
      description: 'Happy travelers'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Maharashtra by Numbers
          </h2>
          <p className="text-lg text-orange-100 max-w-3xl mx-auto font-medium">
            Discover the incredible scale and diversity of Maharashtra's tourism offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/30 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 shadow-2xl">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-orange-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-orange-200 font-medium text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default StatsSection;
