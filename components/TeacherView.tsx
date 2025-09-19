
import React, { useMemo } from 'react';
import { ClassData, ScheduleSlot } from '../types';
import { TEACHERS } from '../constants';
import TeacherAccordion from './TeacherAccordion';

interface TeacherViewProps {
  timetableData: ClassData[];
  selectedTeacher: string;
  allTeachers: string[];
}

interface TeacherSchedule {
  class: string;
  slots: ScheduleSlot[];
}

const TeacherView: React.FC<TeacherViewProps> = ({ timetableData, selectedTeacher, allTeachers }) => {
  const getClassesForTeacher = (teacherCode: string): TeacherSchedule[] => {
    const teacherClasses: TeacherSchedule[] = [];
    timetableData.forEach(cls => {
      const teacherSlots = cls.schedule.filter(slot =>
        (slot.subject.includes(`-${teacherCode}`) || slot.subject.includes(` ${teacherCode}`)) &&
        slot.subject.trim() !== "" && slot.subject !== "LUNCH TIME"
      );
      if (teacherSlots.length > 0) {
        teacherClasses.push({
          class: cls.class,
          slots: teacherSlots,
        });
      }
    });
    return teacherClasses;
  };

  const teachersToDisplay = useMemo(() => {
    return selectedTeacher !== 'all' ? [selectedTeacher] : allTeachers;
  }, [selectedTeacher, allTeachers]);

  if (teachersToDisplay.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
        <p className="text-gray-500 text-lg">No teachers found in the timetable.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {teachersToDisplay.map(teacherCode => {
        const teacherSchedule = getClassesForTeacher(teacherCode);
        const teacherName = TEACHERS[teacherCode] || teacherCode;
        return (
          <TeacherAccordion
            key={teacherCode}
            teacherCode={teacherCode}
            teacherName={teacherName}
            schedule={teacherSchedule}
          />
        );
      })}
    </div>
  );
};

export default TeacherView;
