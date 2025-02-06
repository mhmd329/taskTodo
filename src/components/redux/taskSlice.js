// redux/store.js
import { createStore } from "redux";

// تعريف الـ initialState
const initialState = {
  tasks: []
};

// تعريف الـ reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
};

// إنشاء الـ store
const store = createStore(taskReducer);

export default store;
