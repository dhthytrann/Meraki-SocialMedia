import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { message } from "antd";
import { useContext } from "react";
import { DataContext } from "../../../context/dataContext";
import { getNewFeed } from "../NewFeed/newFeedSlice";
import { getUser } from "../User/userSlice";

const initialState = {
  currentPost: null,
  loading: false,
  error: false,

  listPosts: [],
};

export const createPost = createAsyncThunk(
  "post/createPost",
  async (data, thunkAPI) => {
    const { postContent, picture } = data;

    // const content = postContent;
    // const image = picture.pictureAsFile;
    // const imageList = image;

    const formData = new FormData();

    if (postContent != null) {
      formData.append("content", postContent);
    }
    if (picture != null) {
      formData.append("image", picture.pictureAsFile);
    }

    try {
      const result = await api.post("/api/v1/post", formData);
      thunkAPI.dispatch(getNewFeed());
      thunkAPI.dispatch(getUser());
      message.success("Post successfully!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (data, thunkAPI) => {
    const { idPost } = data;
    try {
      const result = await api.delete(`/api/v1/delete-post/${idPost}`);
      thunkAPI.dispatch(getNewFeed());
      thunkAPI.dispatch(getUser());
      message.success("Delete successfully");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (data, thunkAPI) => {
    const { postContent, picture, idUser, idPost } = data;

    const formData = new FormData();

    formData.append("user", idUser);
    formData.append("id", idPost);

    if (postContent != null) {
      formData.append("content", postContent);
    }
    if (picture != null) {
      formData.append("image", picture.pictureAsFile);
    }

    try {
      const result = await api.post("/api/v1/update-post", formData);
      message.success("Update Post successfully!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async (data, thunkAPI) => {
    const { idUser } = data;

    try {
      const result = await api.get(`/api/v1/posts?userId=${idUser}`);
      //const result = await api.get(`/api/v1/posts?userId=1`);
      // console.log(result.data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    //Create Post
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentPost = action.payload;
      state.error = false;
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Delete Post
    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentPost = action.payload;
      state.error = false;
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Update Post
    [updatePost.pending]: (state, action) => {
      state.loading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentPost = action.payload;
      state.error = false;
    },
    [updatePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Get All Post
    [getAllPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.listPosts = action.payload;
      state.error = false;
    },
    [getAllPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
