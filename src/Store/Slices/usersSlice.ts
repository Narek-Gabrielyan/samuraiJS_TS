import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { UsersAPI } from "../../API/api";

type PhotosType = {
  small: string | null,
  large: string | null,
};

type UsersStateType = {
  name: string,
  id: number,
  photos: PhotosType,
  status: string | null,
  followed: boolean,
};

export type Obj = {
  items: Array<UsersStateType>,
  totalCount: number,
  error: null | string,
}

const fetchUsers: any = createAsyncThunk<Array<UsersStateType>>(
  "fetchUsers",
    async () => {
        const responce: AxiosResponse<Obj> = await UsersAPI.getUsers();
        return responce.data.items;
      
  }
);

const initialState: { users: UsersStateType[] } = {
    users: []
}

const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
          state.users = action.payload;
        }); 
    }
})

export { fetchUsers };
export default usersSlice.reducer




