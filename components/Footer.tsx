/*
 * File: components/Footer.tsx
 * Author: Rahul Thakur
 * Date: October 27, 2026
 * Description: The Footer sits at the bottom of every page.
 * It takes no props.
 * It displays the school's contact information.
 * It shows the school name, address, phone number, and email.
 * Tailwind CSS is used to make the footer responsive.
 */

// ===== Footer =====
const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-indigo-100">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
        {/* School name */}
        <p className="font-semibold text-white">New Generation High School</p>

        {/* Address */}
        <p>123 School Avenue, Calgary, AB</p>

        {/* Phone */}
        <p>
          Phone:{" "}
          <a href="tel:+14035550123" className="hover:text-amber-300">
            403-555-0123
          </a>
        </p>

        {/* Email */}
        <p>
          Email:{" "}
          <a
            href="mailto:info@newgenhigh.ca"
            className="break-all hover:text-amber-300"
          >
            info@newgenhigh.ca
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
