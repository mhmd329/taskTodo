import { TaskContext } from "../context/cardContext";
import React, { useContext } from "react";

const Filters = () => {
  const { setFilter, filter } = useContext(TaskContext); // ✅ جلب setFilter

  return (
    <div className="flex space-x-4 justify-between">
      <button onClick={() => setFilter("All")} className={`text-blue-500 ${filter === "All" ? "font-bold" : ""}`}>
        All
      </button>
      <button onClick={() => setFilter("Completed")} className={`text-blue-500 ${filter === "Completed" ? "font-bold" : ""}`}>
        Completed
      </button>
      <button onClick={() => setFilter("Pending")} className={`text-blue-500 ${filter === "Pending" ? "font-bold" : ""}`}>
        Pending
      </button>
    </div>
  );
};

export default Filters;
