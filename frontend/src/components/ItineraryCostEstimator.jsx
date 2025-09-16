import React, { useState } from 'react';

const ItineraryCostEstimator = ({ itinerary }) => {
  const [travelers, setTravelers] = useState(2);
  const [accommodation, setAccommodation] = useState('mid-range');
  const [transport, setTransport] = useState('mixed');
  const [food, setFood] = useState('local');

  const { days, difficulty, category, destinations } = itinerary;

  // Cost ranges based on itinerary characteristics
  const getCostRanges = () => {
    let baseMultiplier = 1;
    
    // Adjust based on difficulty
    if (difficulty === 'Challenging') baseMultiplier = 1.3;
    else if (difficulty === 'Easy') baseMultiplier = 0.8;
    
    // Adjust based on category
    if (category === 'Heritage') baseMultiplier *= 1.1; // Heritage sites might have entry fees
    else if (category === 'Nature') baseMultiplier *= 0.9; // Nature trips might be cheaper
    else if (category === 'Adventure') baseMultiplier *= 1.2; // Adventure activities cost more
    
    return {
      accommodation: {
        budget: { min: 800 * baseMultiplier, max: 1500 * baseMultiplier },
        'mid-range': { min: 1500 * baseMultiplier, max: 3000 * baseMultiplier },
        luxury: { min: 3000 * baseMultiplier, max: 8000 * baseMultiplier }
      },
      transport: {
        public: { min: 200 * baseMultiplier, max: 500 * baseMultiplier },
        mixed: { min: 500 * baseMultiplier, max: 1200 * baseMultiplier },
        private: { min: 1200 * baseMultiplier, max: 3000 * baseMultiplier }
      },
      activities: {
        minimal: { min: 300 * baseMultiplier, max: 600 * baseMultiplier },
        moderate: { min: 600 * baseMultiplier, max: 1200 * baseMultiplier },
        extensive: { min: 1200 * baseMultiplier, max: 2500 * baseMultiplier }
      },
      food: {
        budget: { min: 400 * baseMultiplier, max: 800 * baseMultiplier },
        local: { min: 800 * baseMultiplier, max: 1500 * baseMultiplier },
        premium: { min: 1500 * baseMultiplier, max: 3000 * baseMultiplier }
      }
    };
  };

  const calculateCost = () => {
    const costRanges = getCostRanges();
    
    const accommodationCost = (costRanges.accommodation[accommodation].min + costRanges.accommodation[accommodation].max) / 2;
    const transportCost = (costRanges.transport[transport].min + costRanges.transport[transport].max) / 2;
    const activitiesCost = (costRanges.activities.moderate.min + costRanges.activities.moderate.max) / 2; // Default to moderate
    const foodCost = (costRanges.food[food].min + costRanges.food[food].max) / 2;
    
    const totalPerPerson = (accommodationCost + transportCost + activitiesCost + foodCost) * days;
    const totalCost = totalPerPerson * travelers;
    
    return {
      accommodation: accommodationCost * days * travelers,
      transport: transportCost * days * travelers,
      activities: activitiesCost * days * travelers,
      food: foodCost * days * travelers,
      total: totalCost,
      perPerson: totalPerPerson
    };
  };

  const estimatedCost = calculateCost();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getItinerarySpecificTips = () => {
    const tips = [];
    
    if (category === 'Heritage') {
      tips.push('• Heritage sites may have entry fees - budget ₹100-500 per site');
      tips.push('• Consider hiring a guide for historical context');
    }
    
    if (difficulty === 'Challenging') {
      tips.push('• Challenging itineraries may require special equipment');
      tips.push('• Factor in additional time for rest and recovery');
    }
    
    if (destinations && destinations.length > 3) {
      tips.push('• Multiple destinations may require additional transport costs');
      tips.push('• Consider staying longer in fewer places to save on travel');
    }
    
    tips.push('• Book accommodations in advance for better rates');
    tips.push('• Use local transport for authentic experiences');
    
    return tips;
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-orange-200 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
          <span className="text-white font-bold text-xl">💰</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Cost Estimation</h3>
          <p className="text-sm text-gray-600">{days} days • {travelers} {travelers === 1 ? 'person' : 'people'}</p>
        </div>
      </div>

      {/* Quick Settings */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Travelers</label>
          <select
            value={travelers}
            onChange={(e) => setTravelers(parseInt(e.target.value))}
            className="w-full p-2 border border-orange-200 rounded-lg text-sm focus:border-orange-500 focus:outline-none"
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Accommodation</label>
          <select
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            className="w-full p-2 border border-orange-200 rounded-lg text-sm focus:border-orange-500 focus:outline-none"
          >
            <option value="budget">Budget</option>
            <option value="mid-range">Mid-range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Transport</label>
          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            className="w-full p-2 border border-orange-200 rounded-lg text-sm focus:border-orange-500 focus:outline-none"
          >
            <option value="public">Public</option>
            <option value="mixed">Mixed</option>
            <option value="private">Private</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Food</label>
          <select
            value={food}
            onChange={(e) => setFood(e.target.value)}
            className="w-full p-2 border border-orange-200 rounded-lg text-sm focus:border-orange-500 focus:outline-none"
          >
            <option value="budget">Budget</option>
            <option value="local">Local</option>
            <option value="premium">Premium</option>
          </select>
        </div>
      </div>

      {/* Total Cost Display */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-white text-center mb-6">
        <div className="text-sm font-semibold mb-1">Total Trip Cost</div>
        <div className="text-3xl font-bold mb-1">{formatCurrency(estimatedCost.total)}</div>
        <div className="text-orange-100 text-sm">
          {formatCurrency(estimatedCost.perPerson)} per person
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span className="text-orange-600 mr-2">🏨</span>
            <span className="text-gray-700">Accommodation</span>
          </div>
          <span className="font-semibold text-gray-800">{formatCurrency(estimatedCost.accommodation)}</span>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span className="text-orange-600 mr-2">🚗</span>
            <span className="text-gray-700">Transportation</span>
          </div>
          <span className="font-semibold text-gray-800">{formatCurrency(estimatedCost.transport)}</span>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span className="text-orange-600 mr-2">🎯</span>
            <span className="text-gray-700">Activities</span>
          </div>
          <span className="font-semibold text-gray-800">{formatCurrency(estimatedCost.activities)}</span>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span className="text-orange-600 mr-2">🍽️</span>
            <span className="text-gray-700">Food & Dining</span>
          </div>
          <span className="font-semibold text-gray-800">{formatCurrency(estimatedCost.food)}</span>
        </div>
      </div>

      {/* Itinerary-specific Tips */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 border border-orange-200">
        <h4 className="font-semibold text-gray-800 mb-2 text-sm">💡 Tips for this itinerary</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          {getItinerarySpecificTips().map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItineraryCostEstimator;
