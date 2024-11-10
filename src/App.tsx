import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import CottageCard from './components/CottageCard';
import BookingModal from './components/BookingModal';

// Mock data
const COTTAGES = [
  {
    id: '1',
    name: 'Lakeside Haven',
    location: 'Lake District, UK',
    price: 250,
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8',
    amenities: ['WiFi', 'Lake View', 'Hot Tub', 'Fireplace']
  },
  {
    id: '2',
    name: 'Mountain Retreat',
    location: 'Swiss Alps',
    price: 350,
    rating: 4.8,
    reviews: 96,
    image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4',
    amenities: ['WiFi', 'Mountain View', 'Sauna', 'Parking']
  },
  {
    id: '3',
    name: 'Coastal Cottage',
    location: 'Cornwall, UK',
    price: 180,
    rating: 4.7,
    reviews: 75,
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562',
    amenities: ['WiFi', 'Ocean View', 'Beach Access', 'BBQ']
  }
];

function App() {
  const [selectedCottage, setSelectedCottage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (searchParams: any) => {
    console.log('Search params:', searchParams);
    // Implement search logic
  };

  const handleFilterChange = (filters: any) => {
    console.log('Filters:', filters);
    // Implement filter logic
  };

  const handleBookNow = (cottageId: string) => {
    const cottage = COTTAGES.find(c => c.id === cottageId);
    setSelectedCottage(cottage);
    setIsModalOpen(true);
  };

  const handleBookingConfirm = (details: any) => {
    console.log('Booking confirmed:', details);
    setIsModalOpen(false);
    // Implement booking confirmation logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Travel Pi</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <Filters onFilterChange={handleFilterChange} />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COTTAGES.map(cottage => (
                <CottageCard
                  key={cottage.id}
                  cottage={cottage}
                  onBookNow={handleBookNow}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cottage={selectedCottage}
        onConfirm={handleBookingConfirm}
      />
    </div>
  );
}

export default App;
