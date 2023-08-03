import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { clearAuthHeader } from "../../api/setHeader";

const initialState = {
  currentUser: null,
  listImage: [],
  listFriend: [],
  listAllUser: [],
  loading: false,
  error: false,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/user");
      //localStorage.setItem("userData", JSON.stringify(result.data));
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getUserGallery = createAsyncThunk(
  "user/getUserGallery",
  async (data, thunkAPI) => {
    const { idUser } = data;

    try {
      const result = await api.get(`/api/v1/images?userId=${idUser}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/alluser");
      //localStorage.setItem("allUserData", JSON.stringify(result.data));
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.currentUser = null;
      clearAuthHeader();
    },
  },
  extraReducers: {
    //Get user information
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //Get user Gallery
    [getUserGallery.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserGallery.fulfilled]: (state, action) => {
      state.loading = false;
      state.listImage = action.payload;
      state.error = false;
    },
    [getUserGallery.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //Get all User
    [getAllUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.listAllUser = action.payload;
      state.error = false;
    },
    [getAllUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
