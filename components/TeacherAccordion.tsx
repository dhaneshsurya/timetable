
import React, { useState, useMemo } from 'react';
import { ScheduleSlot } from '../types';
import { TIME_SLOT_COLORS } from '../constants';

interface TeacherSchedule {
  class: string;
  slots: ScheduleSlot[];
}

interface TeacherAccordionProps {
  teacherCode: string;
  teacherName: string;
  schedule: TeacherSchedule[];
}

const getTimeValue = (timeString: string): number => {
    const [startTimePart] = timeString.split(' - ');
    const [time, period] = startTimePart.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    }
    if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    return hours * 60 + minutes;
};

const TeacherAccordion: React.FC<TeacherAccordionProps> = ({ teacherCode, teacherName, schedule }) => {
  const [isOpen, setIsOpen] = useState(false);

  const groupedSchedule = useMemo(() => {
    const grouped: { [time: string]: { class: string; subject: string }[] } = {};
    schedule.forEach(item => {
      item.slots.forEach(slot => {
        if (!grouped[slot.time]) {
          grouped[slot.time] = [];
        }
        grouped[slot.time].push({ class: item.class, subject: slot.subject });
      });
    });

    return Object.entries(grouped).sort((a, b) => getTimeValue(a[0]) - getTimeValue(b[0]));
  }, [schedule]);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <button
        className="w-full text-left bg-gradient-to-r from-green-500 to-green-600 text-white p-3 font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">{teacherName} ({teacherCode})</span>
        <span className="text-lg transition-transform duration-300" style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50/50">
          {groupedSchedule.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {groupedSchedule.map(([time, slots]) => (
                <div key={time} className={`border rounded-lg overflow-hidden ${TIME_SLOT_COLORS[time] || 'border-gray-200'}`}>
                  <div className={`font-semibold p-2 text-center text-sm ${TIME_SLOT_COLORS[time] || 'bg-gray-100'}`}>
                    {time}
                  </div>
                  <div className="p-2 space-y-2 bg-white">
                    {slots.map((slot, index) => (
                      <div key={`${slot.class}-${index}`} className="bg-gray-50 p-2 rounded-md">
                        <div className="font-semibold text-gray-800 text-xs mb-1">{slot.class}</div>
                        <div className="bg-white border border-gray-200 p-1.5 rounded text-xs text-gray-700">
                          {slot.subject}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4 text-sm">No classes found for this teacher.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherAccordion;
