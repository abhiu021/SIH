import React from 'react';
import { Link } from 'react-router-dom';

const ItineraryCard = ({ itinerary }) => {
  const { _id, title, description, days, difficulty, category, destinations } = itinerary;

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
    <div className="card overflow-hidden group">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {days} {days === 1 ? 'Day' : 'Days'}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
      </div>

      {/* Destinations Preview */}
      <div className="p-6">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          Destinations ({destinations?.length || 0})
        </h4>
        
        {destinations && destinations.length > 0 && (
          <div className="space-y-2 mb-4">
            {destinations.slice(0, 3).map((destination, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                {destination.name}
              </div>
            ))}
            {destinations.length > 3 && (
              <div className="text-sm text-gray-500 dark:text-gray-400 ml-5">
                +{destinations.length - 3} more destinations
              </div>
            )}
          </div>
        )}

        {/* Cost Preview */}
        <div className="mb-4 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-orange-600 mr-2">💰</span>
              <span className="text-sm font-semibold text-gray-700">Estimated Cost</span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-orange-600">
                ₹{Math.round((1500 + 800 + 900 + 1150) * days * 0.8)} - ₹{Math.round((3000 + 1200 + 1200 + 1500) * days * 1.2)}
              </div>
              <div className="text-xs text-gray-500">for 2 people</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/itineraries/${_id}`}
          className="btn-primary w-full text-center block"
        >
          View Itinerary
        </Link>
      </div>
    </div>
  );
};

export default ItineraryCard;
