import React from 'react';
import { Sliders } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const amenities = [
    'WiFi', 'Pool', 'Kitchen', 'Hot Tub', 'Parking', 'Air Conditioning'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <div className="flex items-center space-x-2 border-b pb-2">
        <Sliders className="h-5 w-5 text-gray-600" />
        <h3 className="font-medium text-gray-900">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="1000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              onChange={(e) => onFilterChange({ price: e.target.value })}
            />
            <span className="text-sm text-gray-600">$1000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => onFilterChange({ propertyType: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="cottage">Cottage</option>
            <option value="cabin">Cabin</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => onFilterChange({ bedrooms: e.target.value })}
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}+ Bedrooms</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map(amenity => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={(e) => onFilterChange({ amenity, checked: e.target.checked })}
                />
                <span className="text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
