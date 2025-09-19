
import React, { useState } from 'react';
import { ClassData, ScheduleSlot } from '../types';
import { TIME_SLOTS, TIME_SLOT_COLORS } from '../constants';
import { TrashIcon, PencilIcon, SaveIcon, XMarkIcon } from './icons';

interface ClassAccordionProps {
  classData: ClassData;
  editingData: boolean;
  updateClassName: (id: number, newName: string) => void;
  updateScheduleSlot: (classId: number, slotIndex: number, value: string) => void;
  removeClass: (id: number) => void;
}

const TimeSlotCard: React.FC<{ time: string; subject: string }> = ({ time, subject }) => {
  const colorClass = TIME_SLOT_COLORS[time] || TIME_SLOT_COLORS['default'];
  const isSpecial = time === "01:00 - 01:30 PM" || time === "03:45 - 04:30 PM";

  return (
    <div className={`h-full border p-2 ${colorClass} rounded-lg flex flex-col justify-center`}>
      {subject && subject.trim() !== "" ? (
        <div className={`text-xs font-semibold ${isSpecial ? 'text-center' : ''}`}>
          {subject}
        </div>
      ) : (
        <div className="text-center text-xs text-gray-400">-</div>
      )}
    </div>
  );
};

const ClassAccordion: React.FC<ClassAccordionProps> = ({ classData, editingData, updateClassName, updateScheduleSlot, removeClass }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [className, setClassName] = useState(classData.class);
  const [schedule, setSchedule] = useState(classData.schedule);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
    updateClassName(classData.id, e.target.value);
  };
  
  const handleSlotChange = (index: number, value: string) => {
    updateScheduleSlot(classData.id, index, value);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className={`w-full text-left p-3 flex justify-between items-center cursor-pointer ${editingData ? 'bg-gray-100' : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'}`}
        onClick={() => !editingData && setIsOpen(!isOpen)}>
        {editingData ? (
          <div className="flex-grow flex items-center">
             <PencilIcon className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              value={className}
              onChange={handleNameChange}
              className="bg-white border-b-2 border-yellow-400 text-gray-800 font-semibold text-sm focus:outline-none w-full"
            />
          </div>
        ) : (
          <span className="font-semibold text-sm">{classData.class}</span>
        )}
        
        {editingData ? (
           <button onClick={() => removeClass(classData.id)} className="ml-4 text-red-500 hover:text-red-700">
            <TrashIcon className="w-5 h-5" />
          </button>
        ) : (
          <span className="text-lg transition-transform duration-300" style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
            ▼
          </span>
        )}
      </div>

      {(isOpen || editingData) && (
        <div className="p-4 bg-gray-50/50">
          {editingData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {classData.schedule.map((slot, index) => (
                <div key={index} className="bg-white p-2 rounded-md border">
                  <label className="text-xs font-medium text-gray-500">{slot.time}</label>
                  <input
                    type="text"
                    value={slot.subject}
                    onChange={(e) => handleSlotChange(index, e.target.value)}
                    className="w-full mt-1 px-2 py-1 border border-gray-300 rounded-md text-xs focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Subject"
                  />
                </div>
              ))}
            </div>
          ) : (
             <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
              {TIME_SLOTS.map((time) => {
                const slot = classData.schedule.find(s => s.time === time);
                return (
                  <div key={time} className="flex flex-col">
                    <div className="text-xs text-gray-500 font-medium text-center mb-1 h-8 flex items-center justify-center">
                      {time.replace(' - ', '\n')}
                    </div>
                    <div className="flex-1">
                      <TimeSlotCard time={time} subject={slot?.subject || ''} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClassAccordion;
