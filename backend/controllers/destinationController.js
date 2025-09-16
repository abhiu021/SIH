const Destination = require('../models/Destination');

// Get all destinations
const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().sort({ name: 1 });
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get destination by slug
const getDestinationBySlug = async (req, res) => {
  try {
    const destination = await Destination.findOne({ slug: req.params.slug });
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get destinations by region
const getDestinationsByRegion = async (req, res) => {
  try {
    const destinations = await Destination.find({ region: req.params.region });
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search destinations
const searchDestinations = async (req, res) => {
  try {
    const { q } = req.query;
    const destinations = await Destination.find({
      $text: { $search: q }
    }).sort({ score: { $meta: 'textScore' } });
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationBySlug,
  getDestinationsByRegion,
  searchDestinations
};
