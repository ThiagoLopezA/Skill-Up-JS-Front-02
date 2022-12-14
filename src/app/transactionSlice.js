import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlTransaction = "http://localhost:3000/transactions";

export const getTransaction = createAsyncThunk(
  "GET TRANSACTION",
  async (id, thunkAPI) => {
    try {
      const { transaction } = await axios.get(`${urlTransaction}/${id}`);
      return transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.transaction);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  "GET ALL TRANSACTIONS",
  async (thunkAPI) => {
    try {
      const { transaction } = await axios.get(`${urlTransaction}/`);
      return transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.transaction);
    }
  }
);

export const createTransaction = createAsyncThunk(
  "CREATE TRANSACTION",
  async (data, thunkAPI) => {
    try {
      const { transaction } = await axios.post(`${urlTransaction}/`, data);
      return transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.transaction);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "DELETE TRANSACTION",
  async (id, thunkAPI) => {
    try {
      const { transaction } = await axios.delete(`${urlTransaction}/${id}`);
      return transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.transaction);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "UPDATE TRANSACTION",
  async (data, thunkAPI) => {
    try {
      const { transaction } = await axios.delete(
        `${urlTransaction}/${data.id}`,
        data
      );
      return transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.transaction);
    }
  }
);

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransaction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTransaction.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllTransactions.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { reducer } = transactionSlice;
export default reducer;
