import React from 'react';
import { Clock, Wifi, Coffee, Battery } from 'lucide-react';

interface BusScheduleProps {
  onSelectBus: (bus: any) => void;
}

const buses = [
  {
    id: 1,
    name: 'Express Deluxe',
    departure: '06:00 AM',
    arrival: '12:00 PM',
    duration: '6h',
    price: 899,
    amenities: ['wifi', 'coffee', 'charging'],
    seats: 12,
  },
  {
    id: 2,
    name: 'Super Fast',
    departure: '08:30 AM',
    arrival: '02:30 PM',
    duration: '6h',
    price: 799,
    amenities: ['wifi', 'charging'],
    seats: 8,
  },
  {
    id: 3,
    name: 'Night Rider',
    departure: '10:00 PM',
    arrival: '04:00 AM',
    duration: '6h',
    price: 999,
    amenities: ['wifi', 'coffee', 'charging'],
    seats: 15,
  },
];

const BusSchedule: React.FC<BusScheduleProps> = ({ onSelectBus }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Buses</h2>
      
      <div className="space-y-4">
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{bus.name}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{bus.departure} - {bus.arrival} ({bus.duration})</span>
                </div>
                <div className="mt-2 flex items-center space-x-4">
                  {bus.amenities.includes('wifi') && (
                    <Wifi className="h-4 w-4 text-gray-400" />
                  )}
                  {bus.amenities.includes('coffee') && (
                    <Coffee className="h-4 w-4 text-gray-400" />
                  )}
                  {bus.amenities.includes('charging') && (
                    <Battery className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">₹{bus.price}</p>
                <p className="text-sm text-gray-500">{bus.seats} seats left</p>
                <button
                  onClick={() => onSelectBus(bus)}
                  className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Select Bus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusSchedule;