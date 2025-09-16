import React, { useState } from 'react';

const CostEstimator = () => {
  const [tripDetails, setTripDetails] = useState({
    duration: 3,
    travelers: 2,
    accommodation: 'mid-range',
    transport: 'mixed',
    activities: 'moderate',
    food: 'local'
  });

  const [estimatedCost, setEstimatedCost] = useState(null);

  const costRanges = {
    accommodation: {
      budget: { min: 800, max: 1500 },
      'mid-range': { min: 1500, max: 3000 },
      luxury: { min: 3000, max: 8000 }
    },
    transport: {
      public: { min: 200, max: 500 },
      mixed: { min: 500, max: 1200 },
      private: { min: 1200, max: 3000 }
    },
    activities: {
      minimal: { min: 300, max: 600 },
      moderate: { min: 600, max: 1200 },
      extensive: { min: 1200, max: 2500 }
    },
    food: {
      budget: { min: 400, max: 800 },
      local: { min: 800, max: 1500 },
      premium: { min: 1500, max: 3000 }
    }
  };

  const calculateCost = () => {
    const { duration, travelers, accommodation, transport, activities, food } = tripDetails;
    
    const accommodationCost = (costRanges.accommodation[accommodation].min + costRanges.accommodation[accommodation].max) / 2;
    const transportCost = (costRanges.transport[transport].min + costRanges.transport[transport].max) / 2;
    const activitiesCost = (costRanges.activities[activities].min + costRanges.activities[activities].max) / 2;
    const foodCost = (costRanges.food[food].min + costRanges.food[food].max) / 2;
    
    const totalPerPerson = (accommodationCost + transportCost + activitiesCost + foodCost) * duration;
    const totalCost = totalPerPerson * travelers;
    
    const breakdown = {
      accommodation: accommodationCost * duration * travelers,
      transport: transportCost * duration * travelers,
      activities: activitiesCost * duration * travelers,
      food: foodCost * duration * travelers,
      total: totalCost,
      perPerson: totalPerPerson
    };
    
    setEstimatedCost(breakdown);
  };

  const handleInputChange = (field, value) => {
    setTripDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Trip Details</h3>
          
          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Trip Duration (Days)
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value={tripDetails.duration}
              onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
              className="w-full p-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Number of Travelers */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Travelers
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={tripDetails.travelers}
              onChange={(e) => handleInputChange('travelers', parseInt(e.target.value))}
              className="w-full p-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Accommodation */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Accommodation Type
            </label>
            <select
              value={tripDetails.accommodation}
              onChange={(e) => handleInputChange('accommodation', e.target.value)}
              className="w-full p-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
            >
              <option value="budget">Budget (₹800-1500/night)</option>
              <option value="mid-range">Mid-range (₹1500-3000/night)</option>
              <option value="luxury">Luxury (₹3000-8000/night)</option>
            </select>
          </div>

          {/* Transport */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Transportation
            </label>
            <select
              value={tripDetails.transport}
              onChange={(e) => handleInputChange('transport', e.target.value)}
              className="w-full p-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
            >
              <option value="public">Public Transport (₹200-500/day)</option>
              <option value="mixed">Mixed (₹500-1200/day)</option>
              <option value="private">Private Vehicle (₹1200-3000/day)</option>
            </select>
          </div>

          {/* Activities */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Activities & Sightseeing
            </label>
            <select
              value={tripDetails.activities}
              onChange={(e) => handleInputChange('activities', e.target.value)}
              className="w-full p-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
            >
              <option value="minimal">Minimal (₹300-600/day)</option>
              <option value="moderate">Moderate (₹600-1200/day)</option>
              <option value="extensive">Extensive (₹1200-2500/day)</option>
            </select>
          </div>

          {/* Food */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Food & Dining
            </label>
            <select
              value={tripDetails.food}
              onChange={(e) => handleInputChange('food', e.target.value)}
              className="w-full p-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
            >
              <option value="budget">Budget (₹400-800/day)</option>
              <option value="local">Local Cuisine (₹800-1500/day)</option>
              <option value="premium">Premium Dining (₹1500-3000/day)</option>
            </select>
          </div>

          <button
            onClick={calculateCost}
            className="w-full btn-primary py-4 text-lg font-bold"
          >
            Calculate Trip Cost
          </button>
        </div>

        {/* Cost Breakdown */}
        <div>
          {estimatedCost ? (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cost Breakdown</h3>
              
              {/* Total Cost */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center">
                <div className="text-sm font-semibold mb-2">Total Trip Cost</div>
                <div className="text-4xl font-bold mb-2">{formatCurrency(estimatedCost.total)}</div>
                <div className="text-orange-100">
                  {formatCurrency(estimatedCost.perPerson)} per person
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-orange-600 font-bold">🏨</span>
                      </div>
                      <span className="font-semibold text-gray-800">Accommodation</span>
                    </div>
                    <span className="font-bold text-orange-600">{formatCurrency(estimatedCost.accommodation)}</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-orange-600 font-bold">🚗</span>
                      </div>
                      <span className="font-semibold text-gray-800">Transportation</span>
                    </div>
                    <span className="font-bold text-orange-600">{formatCurrency(estimatedCost.transport)}</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-orange-600 font-bold">🎯</span>
                      </div>
                      <span className="font-semibold text-gray-800">Activities</span>
                    </div>
                    <span className="font-bold text-orange-600">{formatCurrency(estimatedCost.activities)}</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-orange-600 font-bold">🍽️</span>
                      </div>
                      <span className="font-semibold text-gray-800">Food & Dining</span>
                    </div>
                    <span className="font-bold text-orange-600">{formatCurrency(estimatedCost.food)}</span>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                <h4 className="font-bold text-gray-800 mb-2">💡 Money-Saving Tips</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Book accommodations in advance for better rates</li>
                  <li>• Use public transport for local sightseeing</li>
                  <li>• Try local street food for authentic experiences</li>
                  <li>• Visit during off-season for lower prices</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 text-center border border-orange-200">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Calculate?</h3>
              <p className="text-gray-600">
                Fill in your trip details and click "Calculate Trip Cost" to get an estimated budget for your Maharashtra adventure!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
