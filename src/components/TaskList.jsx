import { FaEdit, FaTrash, FaCheckCircle, FaCircle } from "react-icons/fa";
import { TaskContext } from "../context/cardContext";
import React, { useContext } from "react";

const TaskList = () => {
  const { filteredTasks,handleEdit,handleDelete,handleToggleComplete } = useContext(TaskContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredTasks.map((task) => (
        <div key={task.id} className="bg-white shadow rounded p-4">
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
          {task.dueDate && ( // التأكد من أن dueDate موجود قبل عرضه
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
          )}
          <div className="flex justify-between mt-2">
            <button
              className="text-blue-500"
              onClick={() => handleEdit(task.id)} // تعديل المهمة
            >
              <FaEdit />
            </button>
            <button
              className="text-red-500"
              onClick={() => handleDelete(task.id)} // حذف المهمة
            >
              <FaTrash />
            </button>
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? <FaCheckCircle /> : <FaCircle />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
