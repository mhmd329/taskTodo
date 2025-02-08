import React, { createContext, useState } from "react";
import tasksData from "../data/tasksData";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksData);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // إضافة مهمة جديدة
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // تعديل مهمة موجودة
  const handleSave = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  // حذف مهمة
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // تبديل حالة الإتمام
  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // تحديد المهمة للتعديل
  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  // ترتيب المهام حسب `dueDate`
  const sortTasksByDueDate = () => {
    setTasks((prevTasks) =>
      [...prevTasks].sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      })
    );
  };

  // تحديد المهمة وعرض التفاصيل في مودال (اختياري)
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setSelectedTask(task);
    setShowModal(true);
  };

  // فلترة المهام وتصفيتها حسب `filter` و `searchTerm`
  const filteredTasks = tasks
    .filter((task) => {
      const isCompleted =
        filter === "Completed"
          ? task.completed
          : filter === "Pending"
          ? !task.completed
          : true;
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return isCompleted && matchesSearch;
    })
    .sort((a, b) => {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  return (
    <TaskContext.Provider
      value={{
        filteredTasks,
        tasks,
        handleEdit,
        handleDelete,
        toggleDarkMode,
        handleAddTask,
        handleSave,
        handleToggleComplete,
        sortTasksByDueDate,
        handleTaskClick,
        setTasks,
        editingTask,
        setFilter,
        filter,
        setSearchTerm,
        darkMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
