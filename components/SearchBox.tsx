/*
 * File: components/SearchBox.tsx
 * Author: Aman Kumar
 * Date: October 30, 2026
 * Description: SearchBox is the text box used to search the student list by name.
 * Its inputs are two props from StudentPortal: value, the current search text,
 * and onChange, a function to call when the text changes.
 * It does not keep the search text itself; it is a controlled input, so it always
 * shows the value it is given and sends every keystroke up through onChange.
 * StudentPortal then filters the list, so the cards update as the user types.
 * Its output is a labelled text input.
 */

"use client";

// Props
interface SearchBoxProps {
  value: string;
  onChange: (text: string) => void;
}

// SearchBox
const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="search"
        className="mb-1 block text-sm font-medium text-slate-700"
      >
        Search by name
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="e.g. Ahmed"
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
};

export default SearchBox;