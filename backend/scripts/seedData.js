const mongoose = require('mongoose');
const slugify = require('slugify');
require('dotenv').config();

const Destination = require('../models/Destination');
const Event = require('../models/Event');
const Itinerary = require('../models/Itinerary');

// Sample destinations data
const destinationsData = [
  {
    name: 'Ajanta and Ellora Caves',
    description: 'UNESCO World Heritage Sites featuring ancient Buddhist, Hindu, and Jain rock-cut caves with magnificent sculptures and paintings dating back to 2nd century BCE.',
    region: 'Marathwada',
    bestTime: 'October to March',
    tags: ['UNESCO', 'Heritage', 'Archaeology', 'Buddhist', 'Hindu', 'Jain'],
    coordinates: { lat: 20.5524, lng: 75.7004 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  },
  {
    name: 'Alibaug',
    description: 'A coastal town known for its pristine beaches, historic forts, and serene backwaters. Perfect for a weekend getaway from Mumbai.',
    region: 'Konkan',
    bestTime: 'October to May',
    tags: ['Beach', 'Fort', 'Weekend Getaway', 'Coastal', 'Relaxation'],
    coordinates: { lat: 18.6414, lng: 72.8722 },
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
    ]
  },
  {
    name: 'Mahabaleshwar',
    description: 'A hill station famous for its strawberry farms, scenic viewpoints, and pleasant climate. Known as the "Queen of Hill Stations" in Maharashtra.',
    region: 'Western Ghats',
    bestTime: 'October to June',
    tags: ['Hill Station', 'Strawberry', 'Viewpoints', 'Nature', 'Cool Climate'],
    coordinates: { lat: 17.9242, lng: 73.6576 },
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
    ]
  },
  {
    name: 'Tadoba Andhari Tiger Reserve',
    description: 'Maharashtra\'s oldest and largest national park, home to the Royal Bengal Tiger and diverse wildlife including leopards, sloth bears, and various bird species.',
    region: 'Vidarbha',
    bestTime: 'October to June',
    tags: ['Wildlife', 'Tiger Reserve', 'Safari', 'Nature', 'Conservation'],
    coordinates: { lat: 20.1667, lng: 79.3000 },
    images: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800',
      'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800'
    ]
  },
  {
    name: 'Lonavala',
    description: 'A popular hill station between Mumbai and Pune, famous for its waterfalls, caves, and monsoon beauty. Known for chikki and fudge.',
    region: 'Western Ghats',
    bestTime: 'June to September (Monsoon), October to March',
    tags: ['Hill Station', 'Waterfalls', 'Monsoon', 'Caves', 'Chikki'],
    coordinates: { lat: 18.7500, lng: 73.4167 },
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
    ]
  },
  {
    name: 'Pune',
    description: 'The cultural capital of Maharashtra, known for its educational institutions, historical monuments, and vibrant food scene.',
    region: 'Pune',
    bestTime: 'October to March',
    tags: ['Cultural', 'Education', 'History', 'Food', 'IT Hub'],
    coordinates: { lat: 18.5204, lng: 73.8567 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  },
  {
    name: 'Raigad Fort',
    description: 'The capital fort of Chhatrapati Shivaji Maharaj\'s Maratha Empire. This magnificent hill fort offers breathtaking views and houses the ruins of the royal palace, throne room, and other historical structures.',
    region: 'Konkan',
    bestTime: 'October to March',
    tags: ['Shivaji Maharaj', 'Fort', 'History', 'Maratha Empire', 'Capital', 'Heritage'],
    coordinates: { lat: 18.2347, lng: 73.4406 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  },
  {
    name: 'Pratapgad Fort',
    description: 'The historic fort where Chhatrapati Shivaji Maharaj defeated Afzal Khan in 1659. This strategic fort offers panoramic views of the Sahyadri mountains and houses the famous Bhavani Temple.',
    region: 'Western Ghats',
    bestTime: 'October to March',
    tags: ['Shivaji Maharaj', 'Fort', 'Battle of Pratapgad', 'Afzal Khan', 'History', 'Temple'],
    coordinates: { lat: 17.9333, lng: 73.5667 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  },
  {
    name: 'Sinhagad Fort',
    description: 'Formerly known as Kondhana, this fort was captured by Tanaji Malusare in a legendary battle. It offers stunning views of Pune city and houses memorials dedicated to the brave Maratha warriors.',
    region: 'Pune',
    bestTime: 'October to March',
    tags: ['Shivaji Maharaj', 'Fort', 'Tanaji Malusare', 'Battle', 'History', 'Memorial'],
    coordinates: { lat: 18.3667, lng: 73.7500 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  },
  {
    name: 'Shivneri Fort',
    description: 'The birthplace of Chhatrapati Shivaji Maharaj, this fort holds immense historical significance. It features the exact location where the great Maratha king was born and offers insights into his early life.',
    region: 'Pune',
    bestTime: 'October to March',
    tags: ['Shivaji Maharaj', 'Birthplace', 'Fort', 'History', 'Jijabai', 'Childhood'],
    coordinates: { lat: 19.2000, lng: 73.8667 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  },
  {
    name: 'Rajgad Fort',
    description: 'One of the most important forts in Shivaji Maharaj\'s empire, serving as his capital for 25 years. This massive fort complex includes palaces, temples, and water reservoirs, showcasing Maratha architecture.',
    region: 'Pune',
    bestTime: 'October to March',
    tags: ['Shivaji Maharaj', 'Fort', 'Capital', 'Maratha Architecture', 'History', 'Palace'],
    coordinates: { lat: 18.2333, lng: 73.6833 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  },
  {
    name: 'Torna Fort',
    description: 'The first fort captured by Shivaji Maharaj at the age of 16, marking the beginning of the Maratha Empire. This fort offers challenging trekking routes and spectacular views of the Sahyadri range.',
    region: 'Pune',
    bestTime: 'October to March',
    tags: ['Shivaji Maharaj', 'Fort', 'First Capture', 'Trekking', 'History', 'Sahyadri'],
    coordinates: { lat: 18.2667, lng: 73.6167 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  },
  {
    name: 'Purandar Fort',
    description: 'A strategic fort that played a crucial role in Shivaji Maharaj\'s military campaigns. It houses the famous Purandareshwar Temple and offers panoramic views of the surrounding landscape.',
    region: 'Pune',
    bestTime: 'October to March',
    tags: ['Shivaji Maharaj', 'Fort', 'Military', 'Temple', 'History', 'Strategic'],
    coordinates: { lat: 18.2833, lng: 73.9833 },
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800'
    ]
  }
];

// Sample events data
const eventsData = [
  {
    title: 'Ganesh Chaturthi',
    description: 'The most celebrated festival in Maharashtra, honoring Lord Ganesha with grand processions, cultural performances, and community celebrations.',
    location: 'Mumbai, Pune, and across Maharashtra',
    dateStart: new Date('2024-09-07'),
    dateEnd: new Date('2024-09-17'),
    region: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800'
  },
  {
    title: 'Ellora Festival',
    description: 'A cultural extravaganza showcasing classical music and dance performances against the backdrop of the magnificent Ellora Caves.',
    location: 'Ellora Caves, Aurangabad',
    dateStart: new Date('2024-12-15'),
    dateEnd: new Date('2024-12-17'),
    region: 'Marathwada',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
  },
  {
    title: 'Pune International Film Festival',
    description: 'An annual film festival showcasing international and Indian cinema, with screenings, workshops, and celebrity interactions.',
    location: 'Pune',
    dateStart: new Date('2024-11-20'),
    dateEnd: new Date('2024-11-27'),
    region: 'Pune',
    image: 'https://images.unsplash.com/photo-1489599808411-1b0b0b0b0b0b?w=800'
  },
  {
    title: 'Mahabaleshwar Strawberry Festival',
    description: 'Celebrate the sweetest fruit of the hills with strawberry picking, local delicacies, and cultural performances.',
    location: 'Mahabaleshwar',
    dateStart: new Date('2024-03-15'),
    dateEnd: new Date('2024-03-17'),
    region: 'Western Ghats',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
  },
  {
    title: 'Shiv Jayanti - Birth Anniversary of Chhatrapati Shivaji Maharaj',
    description: 'Celebrate the birth anniversary of the great Maratha warrior king with grand processions, cultural programs, and historical reenactments across Maharashtra.',
    location: 'Shivneri Fort, Pune, and across Maharashtra',
    dateStart: new Date('2024-02-19'),
    dateEnd: new Date('2024-02-19'),
    region: 'Pune',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
  },
  {
    title: 'Raigad Festival',
    description: 'A grand celebration at Raigad Fort featuring light and sound shows, cultural performances, and historical exhibitions showcasing the Maratha Empire\'s glory.',
    location: 'Raigad Fort',
    dateStart: new Date('2024-04-15'),
    dateEnd: new Date('2024-04-17'),
    region: 'Konkan',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
  },
  {
    title: 'Pratapgad Victory Day',
    description: 'Commemorate the historic victory of Chhatrapati Shivaji Maharaj over Afzal Khan with special ceremonies, historical talks, and cultural performances at Pratapgad Fort.',
    location: 'Pratapgad Fort',
    dateStart: new Date('2024-11-10'),
    dateEnd: new Date('2024-11-10'),
    region: 'Western Ghats',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
  },
  {
    title: 'Maratha Heritage Festival',
    description: 'A week-long celebration of Maratha culture, history, and traditions featuring folk dances, traditional music, historical exhibitions, and fort tours.',
    location: 'Pune and surrounding forts',
    dateStart: new Date('2024-12-01'),
    dateEnd: new Date('2024-12-07'),
    region: 'Pune',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
  }
];

// Sample itineraries data
const itinerariesData = [
  {
    title: 'Heritage Trail of Maharashtra',
    description: 'Explore the rich cultural heritage of Maharashtra through its ancient caves, forts, and historical monuments.',
    days: 7,
    difficulty: 'Moderate',
    category: 'Heritage',
    destinations: [] // Will be populated after destinations are created
  },
  {
    title: 'Coastal Maharashtra Adventure',
    description: 'Discover the pristine beaches, forts, and coastal culture of Maharashtra\'s Konkan region.',
    days: 5,
    difficulty: 'Easy',
    category: 'Coastal',
    destinations: [] // Will be populated after destinations are created
  },
  {
    title: 'Wildlife and Nature Safari',
    description: 'Experience Maharashtra\'s diverse wildlife and natural beauty through national parks and hill stations.',
    days: 6,
    difficulty: 'Moderate',
    category: 'Nature',
    destinations: [] // Will be populated after destinations are created
  },
  {
    title: 'Shivaji Maharaj Fort Trail',
    description: 'Follow the footsteps of the great Maratha warrior king through his most important forts, from his birthplace to his capital, experiencing the rich history and architectural marvels of the Maratha Empire.',
    days: 8,
    difficulty: 'Challenging',
    category: 'Heritage',
    destinations: [] // Will be populated after destinations are created
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/maharashtra-tourism');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Destination.deleteMany({});
    await Event.deleteMany({});
    await Itinerary.deleteMany({});
    console.log('Cleared existing data');

    // Add slugs to destinations
    destinationsData.forEach(destination => {
      destination.slug = slugify(destination.name, { lower: true });
    });

    // Insert destinations
    const destinations = await Destination.insertMany(destinationsData);
    console.log(`Inserted ${destinations.length} destinations`);

    // Insert events
    const events = await Event.insertMany(eventsData);
    console.log(`Inserted ${events.length} events`);

    // Update itineraries with destination references
    const findDestination = (name) => {
      const dest = destinations.find(d => d.name === name);
      if (!dest) {
        throw new Error(`Destination "${name}" not found`);
      }
      return dest._id;
    };

    const heritageItinerary = {
      ...itinerariesData[0],
      destinations: [
        findDestination('Ajanta and Ellora Caves'),
        findDestination('Pune')
      ]
    };

    const coastalItinerary = {
      ...itinerariesData[1],
      destinations: [
        findDestination('Alibaug'),
        findDestination('Pune')
      ]
    };

    const natureItinerary = {
      ...itinerariesData[2],
      destinations: [
        findDestination('Tadoba Andhari Tiger Reserve'),
        findDestination('Mahabaleshwar'),
        findDestination('Lonavala')
      ]
    };

    const shivajiFortTrail = {
      ...itinerariesData[3],
      destinations: [
        findDestination('Shivneri Fort'),
        findDestination('Torna Fort'),
        findDestination('Rajgad Fort'),
        findDestination('Pratapgad Fort'),
        findDestination('Sinhagad Fort'),
        findDestination('Raigad Fort')
      ]
    };

    // Insert itineraries
    const itineraries = await Itinerary.insertMany([heritageItinerary, coastalItinerary, natureItinerary, shivajiFortTrail]);
    console.log(`Inserted ${itineraries.length} itineraries`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
