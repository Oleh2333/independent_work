import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllTodo } from "../services/todoService"


const fetchTodos = createAsyncThunk("products/fetchTodos", async () => {
  return getAllTodo()
})

const todoSlice = createSlice({
  name: "Todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload
      // state = action.payload
    })
  }
})

export { fetchTodos }

export default todoSlice.reducer
