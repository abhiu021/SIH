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

// Manual seed route for debugging
app.post('/api/seed', async (req, res) => {
  try {
    const seedDatabase = require('./scripts/seedData');
    res.json({ message: 'Database seeded successfully!' });
  } catch (error) {
    console.error('Error seeding database:', error);
    res.status(500).json({ error: 'Failed to seed database', details: error.message });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/maharashtra-tourism')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Check if database is empty and seed if needed
    const Destination = require('./models/Destination');
    const Event = require('./models/Event');
    const Itinerary = require('./models/Itinerary');
    
    const destinationCount = await Destination.countDocuments();
    const eventCount = await Event.countDocuments();
    const itineraryCount = await Itinerary.countDocuments();
    
    if (destinationCount === 0 || eventCount === 0 || itineraryCount === 0) {
      console.log('Database appears to be empty. Seeding data...');
      try {
        // Import and run seed script
        const seedDatabase = require('./scripts/seedData');
        console.log('Database seeded successfully!');
      } catch (error) {
        console.error('Error seeding database:', error);
      }
    } else {
      console.log(`Database has ${destinationCount} destinations, ${eventCount} events, and ${itineraryCount} itineraries`);
    }
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
