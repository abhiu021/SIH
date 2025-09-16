const Destination = require('../models/Destination');
const Itinerary = require('../models/Itinerary');

// AI-powered trip recommendations
const getPersonalizedRecommendations = async (req, res) => {
  try {
    const { preferences, budget, duration, interests } = req.body;
    
    // Simple recommendation algorithm (can be enhanced with ML)
    let query = {};
    
    if (interests && interests.length > 0) {
      query.tags = { $in: interests };
    }
    
    const destinations = await Destination.find(query);
    
    // Score destinations based on preferences
    const scoredDestinations = destinations.map(dest => {
      let score = 0;
      
      // Budget scoring
      if (budget === 'low' && dest.tags.includes('Budget-friendly')) score += 2;
      if (budget === 'high' && dest.tags.includes('Luxury')) score += 2;
      
      // Duration scoring
      if (duration <= 3 && dest.tags.includes('Weekend Getaway')) score += 2;
      if (duration >= 7 && dest.tags.includes('Extended Stay')) score += 2;
      
      // Interest matching
      if (interests) {
        const matchingInterests = dest.tags.filter(tag => 
          interests.some(interest => 
            tag.toLowerCase().includes(interest.toLowerCase())
          )
        );
        score += matchingInterests.length;
      }
      
      return { ...dest.toObject(), score };
    });
    
    // Sort by score and return top recommendations
    const recommendations = scoredDestinations
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Smart itinerary generator
const generateSmartItinerary = async (req, res) => {
  try {
    const { destinations, days, preferences } = req.body;
    
    // Simple itinerary generation logic
    const selectedDestinations = await Destination.find({
      _id: { $in: destinations }
    });
    
    const daysPerDestination = Math.ceil(days / selectedDestinations.length);
    
    const itinerary = {
      title: `Custom ${days}-Day Maharashtra Adventure`,
      description: `A personalized ${days}-day journey through Maharashtra's most beautiful destinations`,
      days: days,
      destinations: selectedDestinations,
      dayPlan: selectedDestinations.map((dest, index) => ({
        day: index + 1,
        destination: dest,
        activities: generateActivities(dest, preferences),
        accommodation: suggestAccommodation(dest, preferences?.budget)
      }))
    };
    
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Helper functions
const generateActivities = (destination, preferences) => {
  const activities = [];
  
  if (destination.tags.includes('Heritage')) {
    activities.push('Guided heritage walk', 'Museum visit', 'Cultural show');
  }
  if (destination.tags.includes('Nature')) {
    activities.push('Nature trail', 'Wildlife spotting', 'Photography session');
  }
  if (destination.tags.includes('Adventure')) {
    activities.push('Trekking', 'Adventure sports', 'Camping');
  }
  
  return activities.slice(0, 3);
};

const suggestAccommodation = (destination, budget) => {
  const accommodations = {
    low: ['Budget hotels', 'Hostels', 'Guesthouses'],
    medium: ['3-star hotels', 'Resorts', 'Homestays'],
    high: ['5-star hotels', 'Luxury resorts', 'Boutique hotels']
  };
  
  return accommodations[budget] || accommodations.medium;
};

module.exports = {
  getPersonalizedRecommendations,
  generateSmartItinerary
};
