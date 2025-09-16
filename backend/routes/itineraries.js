const express = require('express');
const router = express.Router();
const {
  getAllItineraries,
  getItineraryById,
  getItinerariesByCategory
} = require('../controllers/itineraryController');

// GET /api/itineraries - Get all itineraries
router.get('/', getAllItineraries);

// GET /api/itineraries/category/:category - Get itineraries by category
router.get('/category/:category', getItinerariesByCategory);

// GET /api/itineraries/:id - Get itinerary by ID
router.get('/:id', getItineraryById);

module.exports = router;
