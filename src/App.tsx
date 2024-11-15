import React, { useState } from 'react';
import { Bus, Calendar, CreditCard, MapPin, Search, User } from 'lucide-react';
import BookingForm from './components/BookingForm';
import BusSchedule from './components/BusSchedule';
import PaymentSection from './components/PaymentSection';
import UserProfile from './components/UserProfile';

function App() {
  const [step, setStep] = useState<'search' | 'schedule' | 'payment'>('search');
  const [selectedBus, setSelectedBus] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bus className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">BusGo</span>
            </div>
            <UserProfile />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <Step
              icon={Search}
              text="Search"
              active={step === 'search'}
              completed={step !== 'search'}
            />
            <Step
              icon={Calendar}
              text="Schedule"
              active={step === 'schedule'}
              completed={step === 'payment'}
            />
            <Step
              icon={CreditCard}
              text="Payment"
              active={step === 'payment'}
              completed={false}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          {step === 'search' && (
            <BookingForm onSubmit={() => setStep('schedule')} />
          )}
          {step === 'schedule' && (
            <BusSchedule
              onSelectBus={(bus) => {
                setSelectedBus(bus);
                setStep('payment');
              }}
            />
          )}
          {step === 'payment' && (
            <PaymentSection
              bus={selectedBus}
              onBack={() => setStep('schedule')}
            />
          )}
        </div>
      </main>
    </div>
  );
}

function Step({ icon: Icon, text, active, completed }: {
  icon: React.ElementType;
  text: string;
  active: boolean;
  completed: boolean;
}) {
  return (
    <div className="flex items-center">
      <div
        className={`
          rounded-full p-2
          ${active ? 'bg-indigo-600 text-white' : ''}
          ${completed ? 'bg-green-500 text-white' : ''}
          ${!active && !completed ? 'bg-gray-200 text-gray-500' : ''}
        `}
      >
        <Icon className="h-6 w-6" />
      </div>
      <span className="ml-2 font-medium text-gray-900">{text}</span>
    </div>
  );
}

export default App;