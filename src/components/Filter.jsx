const Filters = ({ onFilter }) => {
    return (
      <div className="flex space-x-4 justify-between">
        <button onClick={() => onFilter("All")} className="text-blue-500">All</button>
        <button onClick={() => onFilter("Completed")} className="text-blue-500">Completed</button>
        <button onClick={() => onFilter("Pending")} className="text-blue-500">Pending</button>
      </div>
    );
  };
 
  export default Filters;
 