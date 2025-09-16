const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination',
    required: true
  },
  current: {
    temperature: Number,
    humidity: Number,
    condition: String,
    windSpeed: Number,
    visibility: Number
  },
  forecast: [{
    date: Date,
    high: Number,
    low: Number,
    condition: String,
    precipitation: Number
  }],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Weather', weatherSchema);
