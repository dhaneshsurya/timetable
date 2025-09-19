
import React, { useState, useMemo, useCallback } from 'react';
import { INITIAL_TIMETABLE_DATA, TEACHERS } from './constants';
import { ClassData, ScheduleSlot, ViewMode } from './types';
import Header from './components/Header';
import Controls from './components/Controls';
import LoginModal from './components/LoginModal';
import ClassView from './components/ClassView';
import TeacherView from './components/TeacherView';
import Legend from './components/Legend';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [timetableData, setTimetableData] = useState<ClassData[]>(INITIAL_TIMETABLE_DATA);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedTeacher, setSelectedTeacher] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Class);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [editingData, setEditingData] = useState<boolean>(false);

  const allTeachers = useMemo(() => {
    const teacherSet = new Set<string>();
    timetableData.forEach(cls => {
      cls.schedule.forEach(slot => {
        const subject = slot.subject;
        Object.keys(TEACHERS).forEach(code => {
          if (subject.includes(`-${code}`) || subject.includes(` ${code}`)) {
            teacherSet.add(code);
          }
        });
      });
    });
    return Array.from(teacherSet).sort();
  }, [timetableData]);

  const handleLogin = useCallback((password: string) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      setShowLogin(false);
      return true;
    }
    return false;
  }, []);

  const handleLogout = useCallback(() => {
    setIsAdmin(false);
    setEditingData(false);
  }, []);

  const addNewClass = useCallback(() => {
    const newClass: ClassData = {
      id: Date.now(),
      class: "New Class",
      schedule: [
        { time: "10:45 - 11:30 AM", subject: "", day: "all" },
        { time: "11:30 - 12:15 PM", subject: "", day: "all" },
        { time: "12:15 - 01:00 PM", subject: "", day: "all" },
        { time: "01:00 - 01:30 PM", subject: "LUNCH TIME", day: "all" },
        { time: "01:30 - 02:15 PM", subject: "", day: "all" },
        { time: "02:15 - 03:00 PM", subject: "", day: "all" },
        { time: "03:00 - 03:45 PM", subject: "", day: "all" },
        { time: "03:45 - 04:30 PM", subject: "Extracurricular Activities/Sports", day: "all" }
      ]
    };
    setTimetableData(prevData => [...prevData, newClass]);
  }, []);

  const updateClassName = useCallback((id: number, newName: string) => {
    setTimetableData(prevData =>
      prevData.map(cls => (cls.id === id ? { ...cls, class: newName } : cls))
    );
  }, []);
  
  const updateScheduleSlot = useCallback((classId: number, slotIndex: number, value: string) => {
    setTimetableData(prevData =>
      prevData.map(cls => {
        if (cls.id === classId) {
          const newSchedule = [...cls.schedule];
          newSchedule[slotIndex] = { ...newSchedule[slotIndex], subject: value };
          return { ...cls, schedule: newSchedule };
        }
        return cls;
      })
    );
  }, []);

  const removeClass = useCallback((id: number) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
        setTimetableData(prevData => prevData.filter(cls => cls.id !== id));
    }
  }, []);


  const filteredClasses = useMemo(() => {
    return selectedClass ? timetableData.filter(cls => cls.class === selectedClass) : [...timetableData];
  }, [selectedClass, timetableData]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
      />
      
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg shadow-md">
        <Header 
          isAdmin={isAdmin} 
          onAdminLoginClick={() => setShowLogin(true)} 
          onLogout={handleLogout} 
        />
        <Controls
          isAdmin={isAdmin}
          editingData={editingData}
          setEditingData={setEditingData}
          addNewClass={addNewClass}
          viewMode={viewMode}
          setViewMode={setViewMode}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          allClasses={timetableData.map(c => c.class)}
          selectedTeacher={selectedTeacher}
          setSelectedTeacher={setSelectedTeacher}
          allTeachers={allTeachers}
        />
      </div>

      <main className="pt-[190px] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Legend />
          <div className="mt-8 space-y-4">
            {viewMode === ViewMode.Class ? (
              <ClassView 
                classes={filteredClasses}
                editingData={editingData}
                updateClassName={updateClassName}
                updateScheduleSlot={updateScheduleSlot}
                removeClass={removeClass}
              />
            ) : (
              <TeacherView 
                timetableData={timetableData}
                selectedTeacher={selectedTeacher}
                allTeachers={allTeachers}
              />
            )}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
