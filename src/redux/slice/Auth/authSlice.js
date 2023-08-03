import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import "react-toastify/dist/ReactToastify.css";
import api from "../../api/api";
import { clearAuthHeader, setAuthHeader } from "../../api/setHeader";
import { message } from "antd";
import { clearLocalStorage, setLocalStorage } from "../../api/setLocalStorage";
import { useNavigate } from "react-router-dom";
import { getUser } from "../User/userSlice";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  resetPassword: null,
  sendVerifyCode: null,
};

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const { email, password } = data;

    const result = await api.post("/api/v1/auth/authenticate", {
      email,
      password,
    });
    if (result.data === "Email is not Exists") {
      message.error("LOGIN FAIL! Email is not Exists.");
    } else {
      setAuthHeader(result.data.token);
      thunkAPI.dispatch(getUser());
      //localStorage.setItem("isLogin", true);
    }
    return result.data;
  } catch (error) {
    message.error(
      "LOGIN FAIL! Please recheck email adress and password and try again."
    );
    const errMessage = error.response.data.message;
    return thunkAPI.rejectWithValue(errMessage);
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const { userName, email, password, enabled } = data;
      //call API
      const result = await api.post("/api/v1/auth/register-email", {
        userName,
        email,
        password,
        enabled,
      });

      //console.log(result.data);
      return result.data; //payload
    } catch (error) {
      message.error(
        "REGISTER FAIL! Please recheck email adress and try again."
      );
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

export const verifyRegister = createAsyncThunk(
  "auth/verifyRegister",
  async (data, thunkAPI) => {
    try {
      const { code, email } = data;
      //call API
      const result = await api.post(
        `/api/v1/auth/verifyRegistration?code=${code}&email=${email}`
      );
      setAuthHeader(result.data.token);
      thunkAPI.dispatch(getUser());
      //localStorage.setItem("isLogin", true);
      //console.log(result.data);
      return result.data; //payload
    } catch (error) {
      message.error(
        "VERIFICATION FAILED! Please recheck Verification code and try again."
      );
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

export const sendVerifyCodeByEmail = createAsyncThunk(
  "auth/sendVerifyCodeByEmail",
  async (data, thunkAPI) => {
    try {
      const { email } = data;
      //console.log(email);

      const result = await api.post("/api/v1/auth/resetPasswordRequest", {
        email,
      });
      if (result.data?.status === true) {
        message.success("Sent email reset verify code!");
      } else {
        message.error("Not found email!");
      }

      return result.data;
    } catch (error) {
      message.error("Not found email!");
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data, thunkAPI) => {
    try {
      const { email, verifyCode, newPassword } = data;

      console.log(email, verifyCode, newPassword);

      const result = await api.post("/api/v1/auth/resetPassword", {
        email,
        verifyCode,
        newPassword,
      });
      console.log(result.data);
      return result.data;
    } catch (error) {
      message.error("Please check email and verification code again!");
      const errMessage = error.result.data.message;
      return thunkAPI.rejectWithValue(errMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logout: (state, action) => {
    //   state.currentUser = null;
    //   clearAuthHeader();
    // },
  },
  extraReducers: {
    //Login
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Register
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Verify
    [verifyRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [verifyRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    [verifyRegister.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //Send Verify code by email
    [sendVerifyCodeByEmail.pending]: (state, action) => {
      state.loading = true;
    },
    [sendVerifyCodeByEmail.fulfilled]: (state, action) => {
      state.loading = false;
      state.sendVerifyCode = action.payload;
      state.error = false;
    },
    [sendVerifyCodeByEmail.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //Reset Password
    [resetPassword.pending]: (state, action) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.resetPassword = action.payload;
      state.error = false;
    },
    [resetPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
