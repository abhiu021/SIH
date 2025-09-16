const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/events', require('./routes/events'));
app.use('/api/itineraries', require('./routes/itineraries'));
app.use('/api/ai', require('./routes/ai'));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Maharashtra Tourism API is running!' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/maharashtra-tourism')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
