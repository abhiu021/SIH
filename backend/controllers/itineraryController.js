const Itinerary = require('../models/Itinerary');

// Get all itineraries
const getAllItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find()
      .populate('destinations', 'name slug images coordinates')
      .sort({ title: 1 });
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get itinerary by ID
const getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id)
      .populate('destinations', 'name slug description images coordinates bestTime tags');
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get itineraries by category
const getItinerariesByCategory = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ category: req.params.category })
      .populate('destinations', 'name slug images coordinates')
      .sort({ title: 1 });
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllItineraries,
  getItineraryById,
  getItinerariesByCategory
};
