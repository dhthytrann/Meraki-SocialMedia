import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  currentMessage: null,
  conversation: [],
  loading: false,
  error: false,
};

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (data, thunkAPI) => {
    const { message, idSender, idReceiver } = data;

    const sender = new Object();
    sender.id = idSender;
    const receiver = new Object();
    receiver.id = idReceiver;

    // console.log("message", message);
    // console.log("sender", sender);
    // console.log("receiver", receiver);

    try {
      const result = await api.post("/api/v1/send-message", {
        message,
        sender,
        receiver,
      });
      const userId = idReceiver;
      thunkAPI.dispatch(
        getConversation({
          userId,
        })
      );
      message.success("Message sent successfully!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getConversation = createAsyncThunk(
  "message/getConversation",
  async (data, thunkAPI) => {
    const { userId } = data;

    try {
      const result = await api.get(
        `/api/v1/find-conversation?userId=${userId}`
      );
      localStorage.setItem("conversation", JSON.stringify(result.data.data));
      console.log(result.data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getAllMessage = createAsyncThunk(
  "message/getAllMessage",
  async (data, thunkAPI) => {
    const { userId } = data;

    try {
      const result = await api.get(
        `/api/v1/find-all-recent-message?userId=${userId}`
      );
      console.log(result.data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: {
    //Send Message
    [sendMessage.pending]: (state, action) => {
      state.loading = true;
    },
    [sendMessage.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentMessage = action.payload;
      state.error = false;
    },
    [sendMessage.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    //Get conversation
    [getConversation.pending]: (state, action) => {
      state.loading = true;
    },
    [getConversation.fulfilled]: (state, action) => {
      state.loading = false;
      state.conversation = action.payload;
      state.error = false;
    },
    [getConversation.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = messageSlice.actions;
export default messageSlice.reducer;
