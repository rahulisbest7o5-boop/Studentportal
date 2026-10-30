"use client";

/*
 * File: components/StudentCard.tsx
 * Author: Henry Nguyen
 * Date: October 29, 2026
 * Description: This card component shows one student's details and actions inside the list.
 * It receives a student object and a callback for deletion, then toggles an expandable details panel on click.
 * The component processes the student data to show their name, grade, average, and honour-roll status.
 * Its output is a card with a detail toggle and a remove button.
 */

import { useState } from "react";

import type { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const isHonourRoll = student.average >= 80;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            {student.firstName} {student.lastName}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Grade {student.grade}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onRemove(student.id)}
          className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 transition hover:bg-red-100"
        >
          Remove
        </button>
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={() => setShowDetails((previous) => !previous)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>
      </div>

      {showDetails && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>
              <span className="font-semibold">Average:</span> {student.average}
            </p>
            {isHonourRoll && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Honour roll
              </span>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default StudentCard;
