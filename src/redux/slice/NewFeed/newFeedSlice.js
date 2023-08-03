import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    currentNewFeed: null,
    loading: false,
    error: false,

  };

export const getNewFeed = createAsyncThunk(
    "newFeed/getNewFeed",
    async (data, thunkAPI) => {
        try {
            const result = await api.get("/api/v1/newfeeds");
            //localStorage.setItem("newFeedData", JSON.stringify(result.data.data));
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Error when fetching user information");
        }
    }
)

const newFeedSlice = createSlice({
  name: "newFeed",
  initialState,
  reducers: {},
  extraReducers: {
    [getNewFeed.pending]: (state, action) => {
      state.loading = true;
    },
    [getNewFeed.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentNewFeed = action.payload;
      state.error = false;
    },
    [getNewFeed.rejected]: (state, action) => {
      state.loading = false;
      state.error = true; 
    },
  },
});

export const {} = newFeedSlice.actions;
export default newFeedSlice.reducer;
