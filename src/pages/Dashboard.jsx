import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filters from "../components/Filter";
import tasksData from "../data/tasksData"; // البيانات المبدئية

const Dashboard = () => {
  const [tasks, setTasks] = useState(tasksData); // تأكد من أن هذه البيانات يتم تحميلها بشكل صحيح
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // إضافة مهمة جديدة
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // إضافة مهمة جديدة
  };

  const handleSave = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => 
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setEditingTask(null); // إنهاء التعديل بعد الحفظ
  };

  // حذف مهمة
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // حذف المهمة
  };

  // تبديل حالة الإتمام
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    ); // تبديل حالة إتمام المهمة
  };

  // الفلترة بناءً على الحالة (مكتمل أو غير مكتمل)
  const filteredTasks = tasks.filter((task) => {
    const isCompleted =
      filter === "Completed" ? task.completed : filter === "Pending" ? !task.completed : true;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isCompleted && matchesSearch;
  });

  // تحديد المهمة للتعديل
  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const sortTasksByDueDate = () => {
    setTasks((prevTasks) =>
      [...prevTasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    );
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setSelectedTask(task);
    setShowModal(true);
  };

 
  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={sortTasksByDueDate} className="p-2 bg-blue-500 text-white rounded">
        Sort by Due Date
      </button>
<button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-800 text-white rounded mt-4 ml-10"
      >
        Toggle Dark Mode
      </button>
      <Filters onFilter={setFilter} />
      
      <input
        type="text"
        placeholder="Search tasks..."
        className="p-2 border rounded mt-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TaskForm onAddTask={handleAddTask} task={editingTask} onSave={handleSave} />
      <TaskList
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        setTasks={setTasks}
        onToggleComplete={handleToggleComplete}
        onTaskClick={handleTaskClick} // إضافة onTaskClick
      />
     
     
    </div>
  );
};

export default Dashboard;
