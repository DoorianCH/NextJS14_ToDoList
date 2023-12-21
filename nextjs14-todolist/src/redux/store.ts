import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "@/slice/todolistSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: { todo: todoSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
