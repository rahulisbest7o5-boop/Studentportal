/*
 * File: data/students.ts
 * Author: Henry Nguyen
 * Date: October 29, 2026
 * Description: This file defines the Student data shape and the school roster used by the portal.
 * It exports a TypeScript interface for each student and a seed array with multiple grades and averages.
 * The data is passed into the list and card components to render the student portal UI.
 * It also ensures the page has enough students to test filtering, counting, and removal logic.
 */

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

export const students: Student[] = [
  { id: 1, firstName: "Aisha", lastName: "Ahmed", grade: 12, average: 94 },
  { id: 2, firstName: "Daniel", lastName: "Chen", grade: 11, average: 87 },
  { id: 3, firstName: "Aman", lastName: "Kumar", grade: 10, average: 82 },
  { id: 4, firstName: "Mohammed", lastName: "Al-Haifi", grade: 9, average: 76 },
  { id: 5, firstName: "Priya", lastName: "Singh", grade: 12, average: 91 },
  { id: 6, firstName: "Rahul", lastName: "Thakur", grade: 9, average: 88 },
  { id: 7, firstName: "Henry", lastName: "Nguyen", grade: 10, average: 79 },
  { id: 8, firstName: "Noah", lastName: "Brown", grade: 11, average: 85 },
];
