# Maharashtra Tourism Promotion Website

A comprehensive tourism website built with the MERN stack to showcase the rich heritage, diverse landscapes, and vibrant culture of Maharashtra, India.

## 🚀 Features

- **Destinations**: Explore popular tourist destinations with detailed information, images, and interactive maps
- **Events & Festivals**: Discover upcoming cultural events and festivals across Maharashtra
- **Travel Itineraries**: Pre-planned routes for different types of travelers (Heritage, Nature, Adventure, etc.)
- **Interactive Maps**: Location-based exploration using React-Leaflet
- **Responsive Design**: Mobile-first design with dark mode support
- **Search & Filter**: Advanced filtering options for destinations and itineraries

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React-Leaflet** - Interactive maps
- **Axios** - HTTP client

## 📁 Project Structure

```
maharashtra-tourism/
├── backend/
│   ├── controllers/          # Route controllers
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── scripts/             # Database seeding
│   ├── server.js            # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context
│   │   ├── utils/           # Utility functions
│   │   └── App.jsx          # Main app component
│   └── package.json
├── package.json             # Root package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd maharashtra-tourism
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   
   **Backend:**
   ```bash
   cd backend
   cp env.example .env
   ```
   
   Edit `.env` file:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/maharashtra-tourism
   NODE_ENV=development
   ```
   
   **Frontend:**
   ```bash
   cd frontend
   cp env.example .env
   ```
   
   Edit `.env` file:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start MongoDB**
   - Local: Start your MongoDB service
   - Atlas: Use your MongoDB Atlas connection string in the `.env` file

5. **Seed the database**
   ```bash
   npm run seed
   ```

6. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on `http://localhost:5000`
   - Frontend development server on `http://localhost:3000`

## 📊 Database Models

### Destination
- `name` - Destination name
- `slug` - URL-friendly identifier
- `description` - Detailed description
- `region` - Geographic region
- `bestTime` - Best time to visit
- `tags` - Array of tags
- `coordinates` - Latitude and longitude
- `images` - Array of image URLs

### Event
- `title` - Event title
- `description` - Event description
- `location` - Event location
- `dateStart` - Start date
- `dateEnd` - End date
- `region` - Geographic region
- `image` - Event image URL

### Itinerary
- `title` - Itinerary title
- `description` - Itinerary description
- `days` - Number of days
- `destinations` - Array of destination references
- `difficulty` - Difficulty level
- `category` - Itinerary category

## 🔗 API Endpoints

### Destinations
- `GET /api/destinations` - Get all destinations
- `GET /api/destinations/:slug` - Get destination by slug
- `GET /api/destinations/region/:region` - Get destinations by region
- `GET /api/destinations/search?q=query` - Search destinations

### Events
- `GET /api/events` - Get all events
- `GET /api/events/upcoming` - Get upcoming events
- `GET /api/events/region/:region` - Get events by region

### Itineraries
- `GET /api/itineraries` - Get all itineraries
- `GET /api/itineraries/:id` - Get itinerary by ID
- `GET /api/itineraries/category/:category` - Get itineraries by category

## 🎨 Features Overview

### Home Page
- Hero section with call-to-action
- Featured destinations grid
- Upcoming events preview
- Suggested itineraries

### Destinations
- Grid view of all destinations
- Search and filter functionality
- Interactive map showing all locations
- Detailed destination pages with galleries

### Events & Festivals
- List of all events with filtering
- Upcoming events highlight
- Event details with dates and locations

### Itineraries
- Category-based filtering
- Difficulty level indicators
- Day-wise planning
- Route maps

### About Maharashtra
- Rich content about history, culture, and geography
- Visual sections with images
- Call-to-action sections

## 🌙 Dark Mode
The application includes a complete dark mode implementation using Tailwind CSS dark mode classes and React Context for state management.

## 📱 Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly navigation
- Optimized images and content

## 🗺️ Map Integration
- Interactive maps using React-Leaflet
- OpenStreetMap tiles
- Destination markers with popups
- Route visualization for itineraries

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or a cloud MongoDB service
2. Update environment variables for production
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Maharashtra Tourism Development Corporation
- OpenStreetMap contributors
- Unsplash for sample images
- The React and Node.js communities

---

**Built with ❤️ for Maharashtra Tourism**
