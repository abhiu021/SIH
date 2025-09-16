import React, { useState } from 'react';
import { aiAPI } from '../utils/api';

const AITripPlanner = () => {
  const [preferences, setPreferences] = useState({
    budget: '',
    duration: 3,
    interests: [],
    region: ''
  });
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const interests = [
    'Heritage', 'Nature', 'Adventure', 'Spiritual', 'Beach', 'Wildlife',
    'Photography', 'Food', 'Culture', 'Shopping', 'Relaxation'
  ];

  const handleInterestToggle = (interest) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await aiAPI.getRecommendations(preferences);
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          AI Trip Planner
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Get personalized recommendations based on your preferences
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            value={preferences.budget}
            onChange={(e) => setPreferences(prev => ({ ...prev, budget: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Select Budget</option>
            <option value="low">Low (₹5,000 - ₹15,000)</option>
            <option value="medium">Medium (₹15,000 - ₹35,000)</option>
            <option value="high">High (₹35,000+)</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Trip Duration: {preferences.duration} days
          </label>
          <input
            type="range"
            min="1"
            max="14"
            value={preferences.duration}
            onChange={(e) => setPreferences(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>

        {/* Interests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Interests
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {interests.map(interest => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  preferences.interests.includes(interest)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-3 text-lg disabled:opacity-50"
        >
          {loading ? 'Getting Recommendations...' : 'Get AI Recommendations'}
        </button>
      </form>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Recommended Destinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((destination, index) => (
              <div key={destination._id} className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {destination.name}
                  </h4>
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-full text-xs">
                    Score: {destination.score}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {destination.description.substring(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-1">
                  {destination.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AITripPlanner;
