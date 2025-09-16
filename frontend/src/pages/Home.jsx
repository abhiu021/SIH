import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import EventCard from '../components/EventCard';
import ItineraryCard from '../components/ItineraryCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { destinationAPI, eventAPI, itineraryAPI } from '../utils/api';

const Home = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [featuredItineraries, setFeaturedItineraries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [destinationsRes, eventsRes, itinerariesRes] = await Promise.all([
          destinationAPI.getAll(),
          eventAPI.getUpcoming(),
          itineraryAPI.getAll()
        ]);

        setFeaturedDestinations(destinationsRes.data.slice(0, 4));
        setUpcomingEvents(eventsRes.data.slice(0, 3));
        setFeaturedItineraries(itinerariesRes.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <LoadingSpinner size="xlarge" text="Loading amazing destinations..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Welcome to Maharashtra"
        subtitle="Discover the land of warriors, rich heritage, and diverse landscapes"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/destinations" className="btn-primary text-lg px-8 py-3">
            Explore Destinations
          </Link>
          <Link to="/itineraries" className="btn-secondary text-lg px-8 py-3">
            Plan Your Trip
          </Link>
        </div>
      </Hero>

      {/* Featured Destinations */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8">
              <span className="text-orange-600 font-bold text-lg">🌟 Featured Destinations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-gradient">Explore Maharashtra</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              From ancient caves to pristine beaches, from historic forts of Chhatrapati Shivaji Maharaj to modern cities, discover the incredible diversity of Maharashtra's destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination._id} destination={destination} />
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/destinations" className="btn-primary group text-lg px-12 py-4">
              <span className="flex items-center">
                View All Destinations
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-saffron-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-saffron-100 dark:bg-saffron-900/30 rounded-full mb-6">
              <span className="text-saffron-600 dark:text-saffron-400 font-semibold text-sm">🎉 Events</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-gradient">Upcoming Events & Festivals</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the vibrant culture and traditions of Maharashtra through its festivals and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Suggested Itineraries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let us help you plan the perfect trip with our curated itineraries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItineraries.map((itinerary) => (
              <ItineraryCard key={itinerary._id} itinerary={itinerary} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/itineraries" className="btn-primary">
              View All Itineraries
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Maharashtra?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Start planning your adventure today and discover the incredible beauty and culture of Maharashtra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Start Exploring
            </Link>
            <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
