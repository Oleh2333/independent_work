import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllNotes } from "../services/notesService"

const fetchNotes = createAsyncThunk("products/fetchNotes", async () => {
  return getAllNotes()
})

const notestSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      return action.payload
      // state = action.payload
    })
  }
})

export { fetchNotes }

export default notestSlice.reducer
