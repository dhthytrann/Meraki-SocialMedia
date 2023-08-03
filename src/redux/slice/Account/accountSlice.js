import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../User/userSlice";
import { message } from "antd";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";

const initialState = {
  currentAccount: null,
  loading: false,
  error: false,
};

export const updateUser = createAsyncThunk(
  "account/updateUser",
  async (data, thunkAPI) => {
    const { id, address, gender, firstName, lastName, email, birthday } = data;

    console.log(address, gender, firstName, lastName, email, birthday);


    try {
      const result = await api.put("/api/v1/user", {
        address,
        gender,
        firstName,
        lastName,
        email,
        birthday,
      });
      thunkAPI.dispatch(getUser());
      message.success("Update successfully!");
      //   console.log(result.data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "account/updateAvatar",
  async (data, thunkAPI) => {
    const { picture } = data;

    const formData = new FormData();
    formData.append("image", picture.pictureAsFile);
    //console.log(picture.pictureAsFile);
    //console.log(formData);

    try {
      const result = await api.put("/api/v1/user/avatar", formData);
      thunkAPI.dispatch(getUser());
      message.success("Update successfully!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const changePassword = createAsyncThunk(
  "account/changePassword",
  async (data, thunkAPI) => {
    const { email, oldPassword, newPassword } = data;
    try {
      const result = await api.put("/api/v1/changePassword", {
        email,
        oldPassword,
        newPassword,
      });
      if (result.data?.status === true) {
        message.success(result.data?.message);
      } else {
        message.error(result.data?.message);
      }
      //message.success("Change password successfully!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: {
    //Update User
    [updateUser.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentAccount = action.payload;
      state.error = false;
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Update Avatar
    [updateAvatar.pending]: (state, action) => {
      state.loading = true;
    },
    [updateAvatar.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentAccount = action.payload;
      state.error = false;
    },
    [updateAvatar.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Change Password
    [changePassword.pending]: (state, action) => {
      state.loading = true;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentAccount = action.payload;
      state.error = false;
    },
    [changePassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = accountSlice.actions;
export default accountSlice.reducer;
