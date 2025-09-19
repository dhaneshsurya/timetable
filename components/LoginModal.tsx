
import React, { useState, useEffect } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (password: string) => boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setPassword('');
      setError('');
    }
  }, [isOpen]);

  const handleLoginAttempt = () => {
    const success = onLogin(password);
    if (!success) {
      setError('Invalid password. Please try again.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLoginAttempt();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-sm m-4 transform transition-all" role="dialog">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Admin Login</h3>
        <p className="text-sm text-gray-500 mb-6">Enter the password to access admin features.</p>
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter admin password"
          className={`w-full px-4 py-2.5 border rounded-lg mb-2 focus:outline-none focus:ring-2 ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
          }`}
          autoFocus
        />
        {error && <p className="text-red-600 text-xs mb-4">{error}</p>}
        
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleLoginAttempt}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
