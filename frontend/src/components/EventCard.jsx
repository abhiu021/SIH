import React from 'react';

const EventCard = ({ event }) => {
  const { title, description, location, dateStart, dateEnd, region, image } = event;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isUpcoming = new Date(dateStart) > new Date();

  return (
    <div className="card card-hover overflow-hidden group relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image || 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        
        {/* Region Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
            {region}
          </span>
        </div>
        
        {/* Upcoming Badge */}
        {isUpcoming && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm pulse-glow">
              ✨ Upcoming
            </span>
          </div>
        )}

        {/* Date Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {formatDate(dateStart)}
                </span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                to {formatDate(dateEnd)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-gray-700 dark:text-gray-300">Location</div>
            <div className="text-xs">{location}</div>
          </div>
        </div>

        {/* Action Button */}
        <button className="btn-primary w-full group/btn">
          <span className="flex items-center justify-center">
            Learn More
            <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default EventCard;
