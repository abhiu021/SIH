const express = require('express');
const router = express.Router();
const {
  getAllEvents,
  getUpcomingEvents,
  getEventsByRegion
} = require('../controllers/eventController');

// GET /api/events - Get all events
router.get('/', getAllEvents);

// GET /api/events/upcoming - Get upcoming events
router.get('/upcoming', getUpcomingEvents);

// GET /api/events/region/:region - Get events by region
router.get('/region/:region', getEventsByRegion);

module.exports = router;
