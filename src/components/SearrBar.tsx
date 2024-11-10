import React from 'react';
import { Search, Users, Calendar } from 'lucide-react';

interface SearchBarProps {
  onSearch: (searchParams: any) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      destination: e.currentTarget['destination'].value,
      checkIn: e.currentTarget['checkIn'].value,
      checkOut: e.currentTarget['checkOut'].value,
      guests: e.currentTarget['guests'].value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
      <div className="flex-1">
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Where are you going?"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex-1 md:flex md:space-x-4">
        <div className="flex-1">
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="w-32">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <select
            id="guests"
            name="guests"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-4 md:mt-6"
      >
        Search
      </button>
    </form>
  );
}
