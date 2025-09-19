
import { ClassData, Teachers } from './types';

export const INITIAL_TIMETABLE_DATA: ClassData[] = [
    {
      id: 1,
      class: "BCA I SEM",
      schedule: [
        { time: "10:45 - 11:30 AM", subject: "C.F.- R:143 SK", day: "all" },
        { time: "11:30 - 12:15 PM", subject: "PC/OS- Lab SR", day: "all" },
        { time: "12:15 - 01:00 PM", subject: "GE- Physical Geography- 136", day: "all" },
        { time: "01:00 - 01:30 PM", subject: "LUNCH TIME", day: "all" },
        { time: "01:30 - 02:15 PM", subject: "DM-141- IP", day: "all" },
        { time: "02:15 - 03:00 PM", subject: "ENG/-11 B.R.", day: "all" },
        { time: "03:00 - 03:45 PM", subject: "LAB", day: "all" },
        { time: "03:45 - 04:30 PM", subject: "Extracurricular Activities/Sports", day: "all" }
      ]
    },
    {
      id: 2,
      class: "BCA III SEM",
      schedule: [
        { time: "10:45 - 11:30 AM", subject: "Prog. In Java- 142- SR", day: "all" },
        { time: "11:30 - 12:15 PM", subject: "RDBMS - 143 IP", day: "all" },
        { time: "12:15 - 01:00 PM", subject: "LAB -DS", day: "all" },
        { time: "01:00 - 01:30 PM", subject: "LUNCH TIME", day: "all" },
        { time: "01:30 - 02:15 PM", subject: "DSE - 142-Cyber Security - AS", day: "all" },
        { time: "02:15 - 03:00 PM", subject: "SE - R-142 SR - (M,T,W) LAB , (T,F,S)", day: "all" },
        { time: "03:00 - 03:45 PM", subject: "Library", day: "all" },
        { time: "03:45 - 04:30 PM", subject: "Extracurricular Activities/Sports", day: "all" }
      ]
    },
    {
      id: 3,
      class: "BCA V SEM",
      schedule: [
        { time: "10:45 - 11:30 AM", subject: "Prog. In Java- 142- SR", day: "all" },
        { time: "11:30 - 12:15 PM", subject: "Python - 142 / LAB AS", day: "all" },
        { time: "12:15 - 01:00 PM", subject: "E-com/Com. Skill - 141 - AS", day: "all" },
        { time: "01:00 - 01:30 PM", subject: "LUNCH TIME", day: "all" },
        { time: "01:30 - 02:15 PM", subject: "ENG (M,T,W) - BR HINDI (T,F,S)-AA -R-138", day: "all" },
        { time: "02:15 - 03:00 PM", subject: "SE -R-142 - SR (M,T,W) AI R-142 - (T,F,S) - IP", day: "all" },
        { time: "03:00 - 03:45 PM", subject: "Project - LAB", day: "all" },
        { time: "03:45 - 04:30 PM", subject: "Extracurricular Activities/Sports", day: "all" }
      ]
    },
    {
      id: 4,
      class: "B.Sc. CS I SEM",
      schedule: [
        { time: "10:45 - 11:30 AM", subject: "C.F.- R:143 SK", day: "all" },
        { time: "11:30 - 12:15 PM", subject: "", day: "all" },
        { time: "12:15 - 01:00 PM", subject: "", day: "all" },
        { time: "01:00 - 01:30 PM", subject: "LUNCH TIME", day: "all" },
        { time: "01:30 - 02:15 PM", subject: "", day: "all" },
        { time: "02:15 - 03:00 PM", subject: "", day: "all" },
        { time: "03:00 - 03:45 PM", subject: "LAB", day: "all" },
        { time: "03:45 - 04:30 PM", subject: "Extracurricular Activities/Sports", day: "all" }
      ]
    },
    {
      id: 7,
      class: "M.SC. CS I SEM",
      schedule: [
        { time: "10:45 - 11:30 AM", subject: "Prog. In Java- 142- SR", day: "all" },
        { time: "11:30 - 12:15 PM", subject: "ACN - 141 - SK", day: "all" },
        { time: "12:15 - 01:00 PM", subject: "Prog. In Python -LAB- DS (M,T,W)", day: "all" },
        { time: "01:00 - 01:30 PM", subject: "LUNCH TIME", day: "all" },
        { time: "01:30 - 02:15 PM", subject: "Com. Arch-115.-DS (T,F,S)", day: "all" },
        { time: "02:15 - 03:00 PM", subject: "LAB", day: "all" },
        { time: "03:00 - 03:45 PM", subject: "Library", day: "all" },
        { time: "03:45 - 04:30 PM", subject: "Extracurricular Activities/Sports", day: "all" }
      ]
    }
];

export const TEACHERS: Teachers = {
    "DS": "Mr. Dhaneshwar Suryavanshi",
    "SR": "Mr. Salikram",
    "IP": "Mr. Indra Patel",
    "SK": "Ms. Shital Kashyap",
    "AS": "Aayushman Sharma",
    "BR": "Ms. Bhavana Ratnakar",
    "AA": "Aashutosh Aditya"
};

export const TIME_SLOTS = [
  '10:45 - 11:30 AM', 
  '11:30 - 12:15 PM', 
  '12:15 - 01:00 PM', 
  '01:00 - 01:30 PM', 
  '01:30 - 02:15 PM', 
  '02:15 - 03:00 PM', 
  '03:00 - 03:45 PM', 
  '03:45 - 04:30 PM'
];

export const TIME_SLOT_COLORS: { [key: string]: string } = {
  '10:45 - 11:30 AM': 'bg-blue-50 border-blue-200 text-blue-800',
  '11:30 - 12:15 PM': 'bg-green-50 border-green-200 text-green-800',
  '12:15 - 01:00 PM': 'bg-yellow-50 border-yellow-200 text-yellow-800',
  '01:00 - 01:30 PM': 'bg-orange-100 border-orange-300 text-orange-800',
  '01:30 - 02:15 PM': 'bg-purple-50 border-purple-200 text-purple-800',
  '02:15 - 03:00 PM': 'bg-pink-50 border-pink-200 text-pink-800',
  '03:00 - 03:45 PM': 'bg-indigo-50 border-indigo-200 text-indigo-800',
  '03:45 - 04:30 PM': 'bg-teal-100 border-teal-300 text-teal-800',
  'default': 'bg-gray-50 border-gray-200 text-gray-800'
};
