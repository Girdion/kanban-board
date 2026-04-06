import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columns: [
    { id: "col-1", title: "To Do" },
    { id: "col-2", title: "In Progress" },
    { id: "col-3", title: "Done" },
  ],
  tasks: [
    {
      id: "task-1",
      title: "Example task",
      columnId: "col-1",
      priority: "high",
    },
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns.push(action.payload);
    },
    deleteColumn: (state, action) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
      state.tasks = state.tasks.filter(
        (task) => task.columnId !== action.payload,
      );
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    moveTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.taskId);
      if (task) task.columnId = action.payload.newColumnId;
    },
  },
});

export const { addColumn, deleteColumn, addTask, deleteTask, moveTask } =
  boardSlice.actions;
export default boardSlice.reducer;
