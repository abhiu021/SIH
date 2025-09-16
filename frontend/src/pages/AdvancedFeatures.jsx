import React, { useState } from 'react';
import Hero from '../components/Hero';
import AITripPlanner from '../components/AITripPlanner';
import WeatherWidget from '../components/WeatherWidget';
import VoiceSearch from '../components/VoiceSearch';
import ARViewer from '../components/ARViewer';
import { destinationAPI } from '../utils/api';

const AdvancedFeatures = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await destinationAPI.getAll();
        setDestinations(response.data);
        if (response.data.length > 0) {
          setSelectedDestination(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchDestinations();
  }, []);

  const handleVoiceSearch = (transcript) => {
    setSearchTerm(transcript);
    // In a real app, you would trigger search with the transcript
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Advanced Features"
        subtitle="Experience the future of tourism with AI, AR, and smart technologies"
        backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* AI Trip Planner Section */}
        <section className="mb-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-12 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="text-center mb-12 relative">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8">
              <span className="text-orange-600 font-bold text-lg">🤖 AI-Powered Trip Planning</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-gradient">Smart Travel Planning</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Get personalized recommendations based on your preferences, budget, and interests using advanced AI technology
            </p>
          </div>
          <div className="relative">
            <AITripPlanner />
          </div>
        </section>

        {/* Voice Search Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8">
              <span className="text-orange-600 font-bold text-lg">🎤 Voice Search</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-gradient">Speak to Search</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Search destinations using natural language voice commands - just speak and discover
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 text-center">
              <div className="mb-6">
                <VoiceSearch onSearch={handleVoiceSearch} />
              </div>
              {searchTerm && (
                <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                  <p className="text-orange-800 font-semibold">
                    <strong>Searching for:</strong> "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Weather Integration Section */}
        <section className="mb-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-12 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="text-center mb-12 relative">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8">
              <span className="text-orange-600 font-bold text-lg">🌤️ Real-time Weather</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-gradient">Live Weather Updates</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Get current weather and 5-day forecasts for any destination to plan your perfect trip
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
                Select a Destination
              </h3>
              <div className="space-y-3">
                {destinations.slice(0, 5).map((destination) => (
                  <button
                    key={destination._id}
                    onClick={() => setSelectedDestination(destination)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedDestination?._id === destination._id
                        ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg'
                        : 'border-orange-200 bg-white hover:border-orange-300 hover:shadow-md'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">
                      {destination.name}
                    </div>
                    <div className="text-sm text-orange-600 font-medium">
                      {destination.region}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              {selectedDestination && (
                <WeatherWidget destination={selectedDestination} />
              )}
            </div>
          </div>
        </section>

        {/* AR Experience Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8">
              <span className="text-orange-600 font-bold text-lg">🥽 Augmented Reality</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-gradient">AR Destination Experience</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Experience destinations in augmented reality with your camera - see the future of travel
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {selectedDestination && (
              <ARViewer destination={selectedDestination} />
            )}
          </div>
        </section>


        {/* Future Features Preview */}
        <section className="mb-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-12 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="text-center mb-12 relative">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8">
              <span className="text-orange-600 font-bold text-lg">🚀 Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-gradient">Future Innovations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Exciting features in development that will revolutionize your travel experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div className="card p-6 text-center card-hover">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Mobile App
              </h3>
              <p className="text-gray-600">
                Native mobile app with offline maps and push notifications
              </p>
            </div>
            
            <div className="card p-6 text-center card-hover">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Social Features
              </h3>
              <p className="text-gray-600">
                User reviews, photo sharing, and travel communities
              </p>
            </div>
            
            <div className="card p-6 text-center card-hover">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Booking Integration
              </h3>
              <p className="text-gray-600">
                Direct booking for hotels, tours, and transportation
              </p>
            </div>
            
            <div className="card p-6 text-center card-hover">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Gamification
              </h3>
              <p className="text-gray-600">
                Travel challenges, badges, and achievement system
              </p>
            </div>
            
            <div className="card p-6 text-center card-hover">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Multi-language
              </h3>
              <p className="text-gray-600">
                Support for multiple languages and local dialects
              </p>
            </div>
            
            <div className="card p-6 text-center card-hover">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                Travel insights, spending tracking, and trip statistics
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Experience the Future of Tourism
            </h2>
            <p className="text-lg text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              These advanced features showcase how technology can enhance travel experiences and make tourism more accessible and engaging for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/destinations" className="btn-primary text-lg px-8 py-3">
                Explore Destinations
              </a>
              <a href="/itineraries" className="btn-secondary text-lg px-8 py-3">
                Plan Your Trip
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdvancedFeatures;
