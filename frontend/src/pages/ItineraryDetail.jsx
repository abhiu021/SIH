import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import MapLeaflet from '../components/MapLeaflet';
import ItineraryCostEstimator from '../components/ItineraryCostEstimator';
import { itineraryAPI } from '../utils/api';

const ItineraryDetail = () => {
  const { id } = useParams();
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await itineraryAPI.getById(id);
        setItinerary(response.data);
      } catch (error) {
        console.error('Error fetching itinerary:', error);
        setError('Itinerary not found');
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !itinerary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Itinerary not found</p>
          <Link to="/itineraries" className="btn-primary">
            Back to Itineraries
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category) => {
    const colors = {
      Heritage: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      Nature: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      Adventure: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      Spiritual: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      Coastal: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      Cultural: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      Moderate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      Challenging: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={itinerary.title}
        subtitle={`${itinerary.days} Day ${itinerary.category} Experience`}
        backgroundImage={itinerary.destinations?.[0]?.images?.[0] || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920'}
      />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link to="/itineraries" className="ml-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    Itineraries
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-500 dark:text-gray-400">{itinerary.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About This Itinerary</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {itinerary.description}
              </p>
            </div>

            {/* Day-wise Plan */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Day-wise Plan</h3>
              <div className="space-y-6">
                {itinerary.destinations?.map((destination, index) => (
                  <div key={destination._id} className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Day {index + 1}: {destination.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {destination.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Best time: {destination.bestTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Destinations */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Destinations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {itinerary.destinations?.map((destination) => (
                  <DestinationCard key={destination._id} destination={destination} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Quick Info */}
              <div className="card p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Itinerary Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</span>
                    <p className="text-gray-900 dark:text-white">{itinerary.days} {itinerary.days === 1 ? 'Day' : 'Days'}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</span>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(itinerary.category)}`}>
                      {itinerary.category}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Difficulty</span>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(itinerary.difficulty)}`}>
                      {itinerary.difficulty}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Destinations</span>
                    <p className="text-gray-900 dark:text-white">{itinerary.destinations?.length || 0} stops</p>
                  </div>
                </div>
              </div>

              {/* Cost Estimator */}
              <div className="mb-6">
                <ItineraryCostEstimator itinerary={itinerary} />
              </div>

              {/* Map */}
              {itinerary.destinations && itinerary.destinations.length > 0 && (
                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Route Map</h3>
                  <MapLeaflet 
                    destinations={itinerary.destinations} 
                    height="300px"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link to="/destinations" className="btn-primary w-full text-center block">
                  Explore Destinations
                </Link>
                <Link to="/itineraries" className="btn-secondary w-full text-center block">
                  More Itineraries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetail;
