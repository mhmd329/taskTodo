import { useEffect, useState, useContext } from "react";
import { TaskContext } from "../context/cardContext";
import { v4 as uuidv4 } from "uuid"; // إذا أردت استخدام UUID لتوليد id فريد

const TaskForm = () => {
  const { handleAddTask, handleSave ,editingTask} = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      // تحديث الحقول عند تعديل المهمة
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]); // التحديث عند تغيير المهمة

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }
    if (new Date(dueDate) < new Date()) {
      alert("Due date must be in the future.");
      return;
    }

    if (editingTask) {
      // تعديل مهمة موجودة
      const updatedTask = { ...editingTask, title, description, dueDate };
      handleSave(updatedTask);
    } else {
      // إضافة مهمة جديدة
      const newTask = {
        id: uuidv4(),
        title,
        description,
        dueDate,
        completed: false,
      };
      handleAddTask(newTask);
    }

    // إعادة تعيين المدخلات
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded w-full"
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded w-full"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 border rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {editingTask ? "Save Changes" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
