import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  toDos: {
    text: string;
    id: number;
  }[];
};

const initialState: InitialState = {
  toDos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.toDos.push({
        text: action.payload,
        id: Date.now(),
      });
    },
    remove: (state, action) => {
      const newTodos = state.toDos.filter((toDo) => toDo.id !== action.payload);
      state.toDos = newTodos;
    },
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
