import React from 'react';
import Hero from '../components/Hero';
import ShivajiLegacy from '../components/ShivajiLegacy';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="About Maharashtra"
        subtitle="Discover the rich heritage and vibrant culture of India's most dynamic state"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to Maharashtra
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Maharashtra, the land of warriors and visionaries, is India's second-most populous state and one of its most economically developed regions. 
              From the bustling metropolis of Mumbai to the serene hill stations of the Western Ghats, Maharashtra offers an incredible diversity of experiences.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Rich Historical Heritage</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Maharashtra's history dates back to ancient times, with evidence of human settlement from the Stone Age. 
                The state has been home to several powerful dynasties including the Mauryas, Satavahanas, Chalukyas, and the Marathas.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                The Maratha Empire, founded by Chhatrapati Shivaji Maharaj, was one of the most significant powers in Indian history. 
                Today, Maharashtra preserves this rich heritage through its magnificent forts, ancient caves, and historical monuments.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>UNESCO World Heritage Sites: Ajanta and Ellora Caves</li>
                <li>Historic forts like Raigad, Sinhagad, and Pratapgad</li>
                <li>Ancient temples and architectural marvels</li>
                <li>Colonial architecture in Mumbai and Pune</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
                alt="Ajanta Caves"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Shivaji Maharaj Legacy Section */}
        <ShivajiLegacy />

        {/* Culture Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800"
                alt="Ganesh Chaturthi Festival"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Vibrant Culture & Festivals</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Maharashtra's culture is a beautiful blend of traditional values and modern aspirations. 
                The state is known for its rich literary tradition, classical music, and folk arts.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Festivals like Ganesh Chaturthi, Diwali, and Gudi Padwa are celebrated with great enthusiasm. 
                The state is also home to various folk dances like Lavani, Tamasha, and Powada.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Ganesh Chaturthi - The most celebrated festival</li>
                <li>Classical music traditions and renowned artists</li>
                <li>Rich literature in Marathi language</li>
                <li>Traditional crafts and handloom industries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Geography Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Diverse Geography</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Maharashtra's geography is incredibly diverse, offering everything from coastal plains to mountain ranges, 
              from dense forests to arid regions. This diversity makes it a perfect destination for all types of travelers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Coastal Region</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Beautiful beaches and coastal towns</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Western Ghats</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Hill stations and biodiversity</p>
            </div>
            
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Urban Centers</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Modern cities and business hubs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Wildlife Sanctuaries</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">National parks and tiger reserves</p>
            </div>
          </div>
        </section>

        {/* Food Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Culinary Delights</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Maharashtra's cuisine is as diverse as its geography. From the spicy Kolhapuri dishes to the sweet Modaks of Ganesh Chaturthi, 
                the state offers a culinary journey that reflects its rich cultural heritage.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Street food in Mumbai, traditional Maharashtrian thali, and coastal seafood specialties make Maharashtra a food lover's paradise.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Vada Pav - Mumbai's favorite street food</li>
                <li>Misal Pav - Spicy curry with bread</li>
                <li>Puran Poli - Sweet flatbread</li>
                <li>Kolhapuri cuisine - Spicy and flavorful</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800"
                alt="Maharashtrian Food"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary-600 rounded-lg p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Maharashtra?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Start your journey through this incredible state and discover its rich heritage, diverse landscapes, and vibrant culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/destinations" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Explore Destinations
            </a>
            <a href="/itineraries" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Plan Your Trip
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
