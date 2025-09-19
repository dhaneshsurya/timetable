
export enum ViewMode {
  Class = 'class',
  Teacher = 'teacher',
}

export interface ScheduleSlot {
  time: string;
  subject: string;
  day: string;
}

export interface ClassData {
  id: number;
  class: string; 
  schedule: ScheduleSlot[];
}

export interface Teachers {
  [key: string]: string;
}
