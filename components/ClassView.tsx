
import React from 'react';
import { ClassData } from '../types';
import ClassAccordion from './ClassAccordion';

interface ClassViewProps {
  classes: ClassData[];
  editingData: boolean;
  updateClassName: (id: number, newName: string) => void;
  updateScheduleSlot: (classId: number, slotIndex: number, value: string) => void;
  removeClass: (id: number) => void;
}

const ClassView: React.FC<ClassViewProps> = ({ classes, editingData, ...props }) => {
  if (classes.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
        <p className="text-gray-500 text-lg">No classes found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {classes.map(classItem => (
        <ClassAccordion 
          key={classItem.id} 
          classData={classItem} 
          editingData={editingData}
          {...props} 
        />
      ))}
    </div>
  );
};

export default ClassView;
