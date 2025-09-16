import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API functions
export const destinationAPI = {
  getAll: () => api.get('/destinations'),
  getBySlug: (slug) => api.get(`/destinations/${slug}`),
  getByRegion: (region) => api.get(`/destinations/region/${region}`),
  search: (query) => api.get(`/destinations/search?q=${query}`),
};

export const eventAPI = {
  getAll: () => api.get('/events'),
  getUpcoming: () => api.get('/events/upcoming'),
  getByRegion: (region) => api.get(`/events/region/${region}`),
};

export const itineraryAPI = {
  getAll: () => api.get('/itineraries'),
  getById: (id) => api.get(`/itineraries/${id}`),
  getByCategory: (category) => api.get(`/itineraries/category/${category}`),
};

export const aiAPI = {
  getRecommendations: (preferences) => api.post('/ai/recommendations', preferences),
  generateItinerary: (data) => api.post('/ai/generate-itinerary', data),
};

export default api;
