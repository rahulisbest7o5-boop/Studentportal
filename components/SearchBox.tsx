"use client";

// ===== Props =====
interface SearchBoxProps {
  value: string;
  onChange: (text: string) => void;
}

// ===== SearchBox =====
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