import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk(
    "todos/getTodos",
    async () => {
      const todo = await axios.get("https://dummyjson.com/todos");
      return todo.data;
    }
  );


const TodoSlice = createSlice ({
    name: "todo",
    initialState:{
        user:{}
    },
    reducers: {
        addUser : (state, action) => {
            state.todo = action.payload;
        }
    },  reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getTodos.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getTodos.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.error = "Error"
            }
        })
    }
})

export default TodoSlice.reducer;