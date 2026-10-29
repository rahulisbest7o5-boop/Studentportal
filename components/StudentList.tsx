/*
 * File: components/StudentList.tsx
 * Author: Henry Nguyen
 * Date: October 29, 2026
 * Description: This component renders the grid of student cards for the students section.
 * It accepts a list of student objects and a callback prop for removing a student.
 * The list processes the array with .map() and passes each student to a StudentCard.
 * Its output is either a student grid or a friendly empty-state message.
 */

import StudentCard from "@/components/StudentCard";
import type { Student } from "@/data/students";

interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {
  if (students.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
        No students to display.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default StudentList;
