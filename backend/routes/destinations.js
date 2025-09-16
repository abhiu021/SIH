const express = require('express');
const router = express.Router();
const {
  getAllDestinations,
  getDestinationBySlug,
  getDestinationsByRegion,
  searchDestinations
} = require('../controllers/destinationController');

// GET /api/destinations - Get all destinations
router.get('/', getAllDestinations);

// GET /api/destinations/search?q=query - Search destinations
router.get('/search', searchDestinations);

// GET /api/destinations/region/:region - Get destinations by region
router.get('/region/:region', getDestinationsByRegion);

// GET /api/destinations/:slug - Get destination by slug
router.get('/:slug', getDestinationBySlug);

module.exports = router;
