import axios from "axios";
import { Obj } from "../Store/Slices/usersSlice";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "Content-Type": "application/json",
  },
});

export const UsersAPI = {
    getUsers(){
        return instance.get<Obj>(`/users`);
    }
};

type IsAuthType = {
    data: {
        id: number,
        email: string,
        login: string,
    },
    resultCode: number,
    messages: Array<string>,
}

export const AuthAPI = {
  isAuth() {
    return instance.get<IsAuthType>(`/auth/me`);
  },

  login(data: { email: string; password: string }) {
    return instance.post(`/auth/login`, data);
  },
};

export const ProfileAPI = {
  getUsersPprofile(id: string | undefined) {
    return instance.get(`/profile/${id}`)
  }
}

