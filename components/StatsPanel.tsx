/*
 * File: components/StatsPanel.tsx
 * Author: Rahul Thakur
 * Date: October 27, 2026
 * Description: StatsPanel shows three numbers about the whole student list.
 * Its input is the students prop, the full list held in StudentPortal (not
 * the search results). On every render it counts the students, the students
 * on the honour roll (average of 80 or more) and the students in grade 12.
 * Because the numbers are worked out from the list each time, they change as
 * soon as a student is added or removed. Its output is three stat tiles.
 */

import { Student } from "@/data/students";

// ===== Props =====
interface StatsPanelProps {
  students: Student[];
}

// ===== StatsPanel =====
const StatsPanel = ({ students }: StatsPanelProps) => {
  // ----- Derived values (worked out on every render, not state) -----
  const totalStudents = students.length;
  const honourRollCount = students.filter((s) => s.average >= 80).length;
  const graduatingCount = students.filter((s) => s.grade === 12).length;

  const stats = [
    { label: "Students", value: totalStudents },
    { label: "Honour roll", value: honourRollCount },
    { label: "Graduating", value: graduatingCount },
  ];

  // ----- Output -----
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          <p className="mt-1 text-4xl font-bold text-indigo-900">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsPanel;
