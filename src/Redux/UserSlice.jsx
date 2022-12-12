import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async () => {
      const user = await axios.get("https://dummyjson.com/users");
      return user.data;
    }
  );
const UserSlice = createSlice ({
    name: "user",
    initialState: {
        data: [],
        error: null,
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getUser.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.error = "Error"
            }
        })
    }
})

export default UserSlice.reducer;




