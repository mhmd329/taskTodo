import { useContext } from "react";
import { TaskContext } from "../context/cardContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filters from "../components/Filter";

const Dashboard = () => {
  const { toggleDarkMode, sortTasksByDueDate, setFilter, setSearchTerm, darkMode } =
    useContext(TaskContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={sortTasksByDueDate} className="p-2 bg-blue-500 text-white rounded">
        Sort by Due Date
      </button>
      <button onClick={toggleDarkMode} className="p-2 bg-gray-800 text-white rounded mt-4 ml-10">
        Toggle Dark Mode
      </button>

      <Filters onFilter={setFilter} />
      <input
        type="text"
        placeholder="Search tasks..."
        className="p-2 border rounded mt-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Dashboard;
