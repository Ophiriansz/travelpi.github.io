import React from 'react';
import { Star, Heart } from 'lucide-react';

interface CottageCardProps {
  cottage: {
    id: string;
    name: string;
    location: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    amenities: string[];
  };
  onBookNow: (id: string) => void;
}

export default function CottageCard({ cottage, onBookNow }: CottageCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={cottage.image}
          alt={cottage.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{cottage.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{cottage.rating}</span>
            <span className="text-sm text-gray-500">({cottage.reviews})</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3">{cottage.location}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {cottage.amenities.map((amenity, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">${cottage.price}</span>
            <span className="text-gray-600 text-sm"> /night</span>
          </div>
          <button
            onClick={() => onBookNow(cottage.id)}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
