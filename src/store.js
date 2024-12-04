import { configureStore } from "@reduxjs/toolkit"
import notesReducer from "./slices/notesSlice"
import todoReducer from "./slices/todoSlice"

export default configureStore({
  reducer: {
    notes: notesReducer,
    todo: todoReducer
  }
})
