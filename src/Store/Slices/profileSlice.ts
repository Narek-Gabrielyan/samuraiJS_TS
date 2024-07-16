import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileAPI } from "../../API/api";

type ProfileType = {
  userId: number | null;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contact: {
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
  };
  photos: {
    small: string | null;
    large: string | null;
  };
};

const fetchProfilePage: any = createAsyncThunk<ProfileType, (string | undefined)>(
  "fetchProfilePage",
  async (id) => {
    const response = await ProfileAPI.getUsersPprofile(id);
    return response.data;
  }
);

const initialState: any = {
    profile: {}

}
    
const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfilePage.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export { fetchProfilePage };
export default profileSlice.reducer;



// userId: null,
// lookingForAJob: null,
// lookingForAJobDescription: null,
// fullName: null,
// contact: {
//     facebook: null,
//     instagram: null,
//     twitter: null,
//     website: null,
//     youtube: null,
//     mainLink: null,
// },
// photos: {
//     small: null,
//     large: null,
// }