const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  dateStart: {
    type: Date,
    required: true
  },
  dateEnd: {
    type: Date,
    required: true
  },
  region: {
    type: String,
    required: true,
    enum: ['Mumbai', 'Pune', 'Konkan', 'Vidarbha', 'Marathwada', 'Khandesh', 'Western Ghats']
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Create index for date-based queries
eventSchema.index({ dateStart: 1, dateEnd: 1 });

module.exports = mongoose.model('Event', eventSchema);
