import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const { name, slug, description, region, bestTime, images, tags } = destination;

  return (
    <div className="card card-hover overflow-hidden group relative">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={images?.[0] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Region Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {region}
          </span>
        </div>

        {/* Favorite Button */}
        <div className="absolute top-4 right-4 z-20">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">
            {name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Best Time */}
        <div className="flex items-center text-sm mb-4 p-3 bg-orange-50 rounded-xl">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-gray-800">Best Time to Visit</div>
            <div className="text-orange-600 font-semibold">{bestTime}</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags?.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-3 py-1.5 rounded-full text-xs font-bold hover:from-orange-200 hover:to-amber-200 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <Link
          to={`/destinations/${slug}`}
          className="btn-primary w-full text-center block group/btn"
        >
          <span className="flex items-center justify-center">
            Explore Now
            <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
