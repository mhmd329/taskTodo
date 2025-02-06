import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 text-black p-4 h-screen">
      <h2 className="text-xl font-bold flex items-center">
        <FaTasks className="mr-2" /> Task Dashboard
      </h2>
      <nav className="mt-4">
        <ul>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">All Tasks</li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Completed</li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Pending</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
