const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true,
    enum: ['Mumbai', 'Pune', 'Konkan', 'Vidarbha', 'Marathwada', 'Khandesh', 'Western Ghats']
  },
  bestTime: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  coordinates: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  images: [{
    type: String
  }]
}, {
  timestamps: true
});

// Create index for better search performance
destinationSchema.index({ name: 'text', description: 'text', tags: 'text' });

module.exports = mongoose.model('Destination', destinationSchema);
