import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlAuth = "http://localhost:3000/api/auth/";
const urlUsers = "http://localhost:3000/api/users";

export const userRegister = createAsyncThunk(
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

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        state.loading = false;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        state.loading = false;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
