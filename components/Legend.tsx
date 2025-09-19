
import React from 'react';
import { TEACHERS, TIME_SLOTS, TIME_SLOT_COLORS } from '../constants';

const Legend: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-800 text-lg mb-4">Legend</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Time Periods</h4>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
            {TIME_SLOTS.map(time => {
              const color = (TIME_SLOT_COLORS[time] || '').split(' ')[0].replace('bg-', '').split('-')[0];
              const isSpecial = time === "01:00 - 01:30 PM" || time === "03:45 - 04:30 PM";
              const label = isSpecial ? (time.includes('01:00') ? 'Lunch' : 'Activities') : time;

              return (
                 <div key={time} className="flex items-center space-x-2 text-xs">
                    <div className={`w-3 h-3 rounded-full bg-${color}-500`}></div>
                    <span className="text-gray-600">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Teachers</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {Object.entries(TEACHERS).map(([code, name]) => (
              <div key={code} className="flex items-center space-x-2">
                <span className="font-mono text-blue-600 font-semibold">{code}</span>
                <span className="text-gray-600 truncate" title={name}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
