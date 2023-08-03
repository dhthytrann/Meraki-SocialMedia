import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/Auth/authSlice";
import userSlice from "./slice/User/userSlice";
import accountSlice from "./slice/Account/accountSlice";
import postSlice from "./slice/Post/postSlice";
// import makeFriendSlice from "./slice/MakeFriend/makeFriendSlice";
import commentSlice from "./slice/Comment/commentSlice";
import newFeedSlice from "./slice/NewFeed/newFeedSlice";
import friendSlice from "./slice/Friend/friendSlice";
import messageSlice from "./slice/Message/messageSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
    account: accountSlice,
    post: postSlice,
    comment: commentSlice,
    newFeed: newFeedSlice,
    friend: friendSlice,
    message: messageSlice
    // makeFriend: makeFriendSlice,
  },
 
});

export default store;
