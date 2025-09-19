
import React from 'react';

interface HeaderProps {
  isAdmin: boolean;
  onAdminLoginClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, onAdminLoginClick, onLogout }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-center flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
            CHAITANYA SCIENCE AND ARTS COLLEGE (AUTONOMOUS), PAMGARH
          </h1>
          <h2 className="text-sm md:text-base font-semibold text-blue-700 mt-1">
            DEPARTMENT OF COMPUTER SCIENCE AND APPLICATION
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            TIME-TABLE : SESSION - 2025-26
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          {isAdmin ? (
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">ADMIN</span>
              <button
                onClick={onLogout}
                className="px-3 py-1.5 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onAdminLoginClick}
              className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Admin Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
