"use client";

import { useState } from "react";

import SearchBox from "@/components/SearchBox"; 
import StatsPanel from "@/components/StatsPanel";
import StudentList from "@/components/StudentList";
import { students as initialStudents, type Student } from "@/data/students";

const StudentPortal = () => {
  // ===== State =====
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchText, setSearchText] = useState(""); 

  // ===== Derived values (worked out on every render, not state) ===== 
  const search = searchText.trim().toLowerCase(); 
  const filteredStudents = students.filter((student) => 
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(search), 
  ); 

  // ===== Event handlers =====
  const handleRemove = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleClearAll = () => {
    setStudents([]);
  };

  // ===== Output =====
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      {/* Overview section */}
      <section id="overview">
        <h2 className="mb-4 text-3xl font-bold text-indigo-900">Overview</h2>
        <StatsPanel students={students} />
      </section>

      {/* Students section */}
      <section id="students">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Students</h2>
          <button
            type="button"
            onClick={handleClearAll}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
          >
            Clear all
          </button>
        </div>
        <SearchBox value={searchText} onChange={setSearchText} /> 
        <StudentList students={filteredStudents} onRemove={handleRemove} /> 
      </section>

      {/* Add a student section */}
      <section id="add">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Add a student</h2>
        <p className="text-slate-600">Coming next.</p>
      </section>
    </div>
  );
};

export default StudentPortal;