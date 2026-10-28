/*
 * File: Navbar.tsx
 * Author: Rahul Thakur
 * Date: October 27, 2026
 * Description: This component displays the school navigation bar.
 * It does not receive any props.
 * It uses an array and .map() to display navigation links.
 * Each link takes the user to a section of the page.
 * Tailwind CSS is used to style the navigation bar.
 */

// Navigation links
const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Students", href: "#students" },
  { name: "Add a student", href: "#add" },
];

const Navbar = () => {
  return (
    <header className="bg-indigo-900 text-white p-4">
      <nav className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* School name */}
        <h1 className="text-xl font-bold">New Generation High School</h1>

        {/* Navigation links */}
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-yellow-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
