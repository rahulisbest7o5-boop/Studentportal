/*
 * File: app/page.tsx
 * Author: [Rahul Thakur]
 * Date: October 27, 2026
 */
/*
// main page of the student portal
import StudentPortal from "@/components/StudentPortal";

const HomePage = () => {
  return <StudentPortal />;
};

export default HomePage;
*/
// Temporary test page
const HomePage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Overview section */}
      <section id="overview" className="mb-12">
        <h1 className="text-3xl font-bold text-indigo-900">Student Portal</h1>
        <p>Welcome to the Student Portal!</p>
      </section>

      {/* Students section */}
      <section id="students" className="mb-12">
        <h2 className="text-2xl font-bold">Students</h2>
        <p>Student list will be added by Member B.</p>
      </section>

      {/* Add student section */}
      <section id="add">
        <h2 className="text-2xl font-bold">Add a student</h2>
        <p>Add student functionality will be added by Member C.</p>
      </section>
    </div>
  );
};

export default HomePage;
