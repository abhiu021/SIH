const express = require('express');
const router = express.Router();
const {
  getPersonalizedRecommendations,
  generateSmartItinerary
} = require('../controllers/aiController');

// POST /api/ai/recommendations - Get personalized recommendations
router.post('/recommendations', getPersonalizedRecommendations);

// POST /api/ai/generate-itinerary - Generate smart itinerary
router.post('/generate-itinerary', generateSmartItinerary);

module.exports = router;
