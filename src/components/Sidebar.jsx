import { useState } from "react";
import { FaTasks, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* زر الفتح في الشاشات الصغيرة */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* الشريط الجانبي */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 text-black p-4 w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64 md:h-screen`}
      >
        <h2 className="text-xl font-bold flex items-center">
          <FaTasks className="mr-2" /> Task Dashboard
        </h2>
        <nav className="mt-4">
          <ul>
            <li className="p-2 hover:bg-gray-700 hover:text-white rounded cursor-pointer">
              All Tasks
            </li>
            <li className="p-2 hover:bg-gray-700 hover:text-white rounded cursor-pointer">
              Completed
            </li>
            <li className="p-2 hover:bg-gray-700 hover:text-white rounded cursor-pointer">
              Pending
            </li>
          </ul>
        </nav>
      </div>

      {/* خلفية عند فتح القائمة في الشاشات الصغيرة */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
