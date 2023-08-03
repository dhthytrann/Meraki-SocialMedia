import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import api from "../../api/api";
import { getNewFeed } from "../NewFeed/newFeedSlice";
import { getUser } from "../User/userSlice";

const initialState = {
  currentComment: null,
  loading: false,
  error: false,
};

export const postComment = createAsyncThunk(
  "comment/postComment",
  async (data, thunkAPI) => {
    const { postId, content } = data;

    try {
      const result = await api.post("/api/v1/comment", {
        postId,
        content,
      });
      thunkAPI.dispatch(getNewFeed());
      thunkAPI.dispatch(getUser());
      message.success("Comment successfully!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    //Post Comment
    [postComment.pending]: (state, action) => {
      state.loading = true;
    },
    [postComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentComment = action.payload;
      state.error = false;
    },
    [postComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
