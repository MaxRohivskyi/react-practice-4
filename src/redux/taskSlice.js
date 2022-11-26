import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = { todos: [] };

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },

    deleteTask: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },

    updateTask: (state, { payload }) => {
      state.todos.map(item => {
        return item.id === payload.id ? payload : item;
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
