/*
 * File: components/AddStudent.tsx
 * Author: Aman Kumar
 * Date: October 30, 2026
 * Description: AddStudent lets the user add a new student to the portal.
 * Its input is one prop, onAdd, a function from StudentPortal that receives the
 * new student's first name, last name, grade and average (without an id).
 * It keeps its four inputs in its own state, starting with empty names, grade 9
 * and average 70, and every input is controlled by that state.
 * When Add student is clicked, nothing happens if either name is empty;
 * otherwise it sends the student up through onAdd and resets the inputs.
 * Its output is the four inputs and the Add student button.
 */

"use client";

import { useState } from "react";

import type { Student } from "@/data/students";

// Props
interface AddStudentProps {
  onAdd: (newStudent: Omit<Student, "id">) => void;
}

// Starting values
const STARTING_GRADE = 9;
const STARTING_AVERAGE = 70;

// AddStudent
const AddStudent = ({ onAdd }: AddStudentProps) => {
  // State (one per input)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(STARTING_GRADE);
  const [average, setAverage] = useState(STARTING_AVERAGE);

  // Add button
  const handleAddClick = () => {
    // Stop if either name is empty
    if (firstName.trim() === "" || lastName.trim() === "") {
      return;
    }

    // Send the new student up to StudentPortal
    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
      average,
    });

    // Reset the inputs to their starting values
    setFirstName("");
    setLastName("");
    setGrade(STARTING_GRADE);
    setAverage(STARTING_AVERAGE);
  };

  // Output 
  const inputClasses =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";
  const labelClasses = "mb-1 block text-sm font-medium text-slate-700";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* First name */}
        <div>
          <label htmlFor="first-name" className={labelClasses}>
            First name
          </label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className={inputClasses}
          />
        </div>

        {/* Last name */}
        <div>
          <label htmlFor="last-name" className={labelClasses}>
            Last name
          </label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className={inputClasses}
          />
        </div>

        {/* Grade */}
        <div>
          <label htmlFor="grade" className={labelClasses}>
            Grade
          </label>
          <select
            id="grade"
            value={grade}
            onChange={(event) => setGrade(Number(event.target.value))}
            className={inputClasses}
          >
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </select>
        </div>

        {/* Average */}
        <div>
          <label htmlFor="average" className={labelClasses}>
            Average (out of 100)
          </label>
          <input
            id="average"
            type="number"
            min={0}
            max={100}
            value={average}
            onChange={(event) => setAverage(Number(event.target.value))}
            className={inputClasses}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleAddClick}
        className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500 sm:w-auto"
      >
        Add student
      </button>
    </div>
  );
};

export default AddStudent;