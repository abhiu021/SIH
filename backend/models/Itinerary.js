const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    required: true,
    min: 1
  },
  destinations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination',
    required: true
  }],
  difficulty: {
    type: String,
    enum: ['Easy', 'Moderate', 'Challenging'],
    default: 'Easy'
  },
  category: {
    type: String,
    enum: ['Heritage', 'Nature', 'Adventure', 'Spiritual', 'Coastal', 'Cultural'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Itinerary', itinerarySchema);
