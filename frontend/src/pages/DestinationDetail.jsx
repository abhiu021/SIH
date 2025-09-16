import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MapLeaflet from '../components/MapLeaflet';
import { destinationAPI } from '../utils/api';

const DestinationDetail = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await destinationAPI.getBySlug(slug);
        setDestination(response.data);
      } catch (error) {
        console.error('Error fetching destination:', error);
        setError('Destination not found');
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Destination not found</p>
          <Link to="/destinations" className="btn-primary">
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={destination.name}
        subtitle={destination.region}
        backgroundImage={destination.images?.[0] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920'}
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
                  <Link to="/destinations" className="ml-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    Destinations
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-500 dark:text-gray-400">{destination.name}</span>
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About {destination.name}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Images Gallery */}
            {destination.images && destination.images.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${destination.name} - Image ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {destination.tags && destination.tags.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Quick Info */}
              <div className="card p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Region</span>
                    <p className="text-gray-900 dark:text-white">{destination.region}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Time to Visit</span>
                    <p className="text-gray-900 dark:text-white">{destination.bestTime}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Coordinates</span>
                    <p className="text-gray-900 dark:text-white text-sm">
                      {destination.coordinates.lat.toFixed(4)}, {destination.coordinates.lng.toFixed(4)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Location</h3>
                <MapLeaflet 
                  destinations={[destination]} 
                  center={[destination.coordinates.lat, destination.coordinates.lng]}
                  zoom={12}
                  height="300px"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Link to="/itineraries" className="btn-primary w-full text-center block">
                  Plan Your Trip
                </Link>
                <Link to="/destinations" className="btn-secondary w-full text-center block">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
