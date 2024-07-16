import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthAPI } from "../../API/api";
import { AxiosResponse } from "axios";


type AuthType = {
  id: number | null,
  email: string | null,
  login: string | null,
  userId: number | null,
  token: string | null
};

const fetchAuthMe: any = createAsyncThunk<AuthType>(
    "fetchAuthMe",
    async () => {
        const response: AxiosResponse<any, any> = await AuthAPI.isAuth();
        return response.data.data;
    }
)

const fetchLogin: any= createAsyncThunk<AuthType, {email: string, password: string}>(
    "fetchLogin",
    async (data) => {
        const res = await AuthAPI.login(data)
        return res.data.data
    }
)

const initialState: AuthType = {
  id: null,
  email: null,
  login: null,
  userId: null,
  token: "",
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
            state.id = action.payload.id,
            state.email = action.payload.email,
            state.login = action.payload.login
        })

        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.userId = action.payload.userId,
            state.token = action.payload.token
        })
    }
})

export { fetchAuthMe, fetchLogin };
export default authSlice.reducer



