import { FaEdit, FaTrash, FaCheckCircle, FaCircle } from "react-icons/fa";

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
      <div className="flex justify-between mt-2">
        <button
          className="text-blue-500"
          onClick={() => onEdit(task.id)} // Edit task
        >
          <FaEdit />
        </button>
        <button
          className="text-red-500"
          onClick={() => onDelete(task.id)} // Delete task
        >
          <FaTrash />
        </button>
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? <FaCheckCircle /> : <FaCircle />}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
