import React, { useState, useEffect } from 'react';

const WeatherWidget = ({ destination }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock weather data - in real app, you'd call a weather API
    const mockWeather = {
      current: {
        temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
        humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
        condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 4)],
        windSpeed: Math.floor(Math.random() * 10) + 5, // 5-15 km/h
        visibility: Math.floor(Math.random() * 5) + 8 // 8-12 km
      },
      forecast: [
        { date: new Date(), high: 32, low: 24, condition: 'Sunny', precipitation: 0 },
        { date: new Date(Date.now() + 86400000), high: 30, low: 22, condition: 'Partly Cloudy', precipitation: 20 },
        { date: new Date(Date.now() + 172800000), high: 28, low: 20, condition: 'Rainy', precipitation: 80 },
        { date: new Date(Date.now() + 259200000), high: 31, low: 23, condition: 'Sunny', precipitation: 0 },
        { date: new Date(Date.now() + 345600000), high: 29, low: 21, condition: 'Cloudy', precipitation: 40 }
      ]
    };

    setTimeout(() => {
      setWeather(mockWeather);
      setLoading(false);
    }, 1000);
  }, [destination]);

  const getWeatherIcon = (condition) => {
    const icons = {
      'Sunny': '☀️',
      'Partly Cloudy': '⛅',
      'Cloudy': '☁️',
      'Rainy': '🌧️'
    };
    return icons[condition] || '🌤️';
  };

  if (loading) {
    return (
      <div className="card p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Weather in {destination.name}
      </h3>
      
      {/* Current Weather */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {weather.current.temperature}°C
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {getWeatherIcon(weather.current.condition)} {weather.current.condition}
            </div>
          </div>
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            <div>Humidity: {weather.current.humidity}%</div>
            <div>Wind: {weather.current.windSpeed} km/h</div>
            <div>Visibility: {weather.current.visibility} km</div>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          5-Day Forecast
        </h4>
        <div className="space-y-2">
          {weather.forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500 dark:text-gray-400 w-16">
                  {index === 0 ? 'Today' : day.date.toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                <span className="text-lg">{getWeatherIcon(day.condition)}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {day.condition}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {day.precipitation}%
                </span>
                <div className="text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">{day.high}°</span>
                  <span className="text-gray-500 dark:text-gray-400">/{day.low}°</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
