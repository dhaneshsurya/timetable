
import React from 'react';
import { ViewMode } from '../types';
import { TEACHERS } from '../constants';

interface ControlsProps {
  isAdmin: boolean;
  editingData: boolean;
  setEditingData: (editing: boolean) => void;
  addNewClass: () => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  selectedClass: string;
  setSelectedClass: (cls: string) => void;
  allClasses: string[];
  selectedTeacher: string;
  setSelectedTeacher: (teacher: string) => void;
  allTeachers: string[];
}

const Controls: React.FC<ControlsProps> = ({
  isAdmin,
  editingData,
  setEditingData,
  addNewClass,
  viewMode,
  setViewMode,
  selectedClass,
  setSelectedClass,
  allClasses,
  selectedTeacher,
  setSelectedTeacher,
  allTeachers,
}) => {
  return (
    <div className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {isAdmin && (
          <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setEditingData(!editingData)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                    editingData
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-700 text-white hover:bg-gray-800'
                  }`}
                >
                  {editingData ? 'Finish Editing' : 'Edit Timetable'}
                </button>
                {editingData && (
                  <button
                    onClick={addNewClass}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Add New Class
                  </button>
                )}
              </div>
              <div className="text-xs font-medium text-yellow-800">
                Admin mode is active.
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">View:</span>
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode(ViewMode.Class)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  viewMode === ViewMode.Class
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-300'
                }`}
              >
                By Class
              </button>
              <button
                onClick={() => setViewMode(ViewMode.Teacher)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  viewMode === ViewMode.Teacher
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-300'
                }`}
              >
                By Teacher
              </button>
            </div>
          </div>

          {!editingData && viewMode === ViewMode.Class && (
            <div className="min-w-[200px]">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Classes</option>
                {allClasses.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
          )}

          {!editingData && viewMode === ViewMode.Teacher && (
            <div className="min-w-[200px]">
              <select
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Teachers</option>
                {allTeachers.map(code => (
                  <option key={code} value={code}>{TEACHERS[code]} ({code})</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Controls;
