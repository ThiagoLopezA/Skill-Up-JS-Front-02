import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlAuth = "http://localhost:3000/api/auth/";
const urlUsers = "http://localhost:3000/api/users";

export const register = createAsyncThunk(
  "USER_REGISTER",
  async (data, thunkAPI) => {
    try {
      const { user } = await axios.post(`${urlUsers}/register`, data); //En el back la ruta de registrar un usuario debería tener la extensión "/register"
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong"); //Cuando tengamos el formulario de register cambio el mensaje
    }
  }
);

export const userLogin = createAsyncThunk(
  "USER_LOGIN",
  async (data, thunkAPI) => {
    try {
      const { user } = await axios.post(`${urlAuth}/login`, data);
      localStorage.setItem("user", JSON.stringify(data));
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong"); //Cuando tengamos el formulario de login cambio el mensaje
    }
  }
);

export const UserLogout = createAsyncThunk(
  "USER_LOGOUT",
  async (data, thunkAPI) => {
    try {
      const { user } = await axios.post(`${urlAuth}/logout`, data); //tenemos que crear la ruta de logout
      localStorage.removeItem("user");
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong"); //Cuando tengamos el formulario de login cambio el mensaje
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.user;
export const selectCurrentToken = (state) => state.user.token;

export default userSlice.reducer;
