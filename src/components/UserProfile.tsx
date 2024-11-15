import React from 'react';
import { User } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">Tushar Gupta</p>
        <p className="text-xs text-gray-500">Delhi</p>
      </div>
      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
        <User className="h-6 w-6 text-indigo-600" />
      </div>
    </div>
  );
};

export default UserProfile;