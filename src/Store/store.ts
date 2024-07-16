import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Slices/usersSlice";
import authSlice from "./Slices/authSlice";
import profileSlice from "./Slices/profileSlice";

const store = configureStore({
  reducer: {
    usersData: usersSlice,
    authData: authSlice,
    profileData: profileSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
