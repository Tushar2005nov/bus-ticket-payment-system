import React, { useState } from 'react';
import { CreditCard, ArrowLeft } from 'lucide-react';

interface PaymentSectionProps {
  bus: any;
  onBack: () => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ bus, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to bus selection
      </button>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Bus</span>
            <span className="font-medium">{bus?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Departure</span>
            <span className="font-medium">{bus?.departure}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Arrival</span>
            <span className="font-medium">{bus?.arrival}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Price</span>
            <span className="font-medium">₹{bus?.price}</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              className={`p-4 border rounded-lg flex items-center justify-center ${
                paymentMethod === 'card'
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-300'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Credit/Debit Card
            </button>
            <button
              className={`p-4 border rounded-lg flex items-center justify-center ${
                paymentMethod === 'upi'
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-300'
              }`}
              onClick={() => setPaymentMethod('upi')}
            >
              UPI
            </button>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </form>
        )}

        {paymentMethod === 'upi' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">UPI ID</label>
              <input
                type="text"
                placeholder="username@upi"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        )}

        <button
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Pay ₹{bus?.price}
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;