const Event = require('../models/Event');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ dateStart: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get upcoming events
const getUpcomingEvents = async (req, res) => {
  try {
    const today = new Date();
    const events = await Event.find({
      dateStart: { $gte: today }
    }).sort({ dateStart: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get events by region
const getEventsByRegion = async (req, res) => {
  try {
    const events = await Event.find({ region: req.params.region });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEvents,
  getUpcomingEvents,
  getEventsByRegion
};
