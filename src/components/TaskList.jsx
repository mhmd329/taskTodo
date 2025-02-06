import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit} // تمرير onEdit
          onDelete={onDelete} // تمرير onDelete
          onToggleComplete={onToggleComplete} // تمرير onToggleComplete
        />
      ))}
    </div>
  );
};

export default TaskList;
