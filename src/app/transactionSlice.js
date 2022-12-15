import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { getRequest, postRequest } from "../services/httpRequest";

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
  async thunkAPI => {
    try {
      const { transaction } = await axios.get(`${urlTransaction}/`);
      return transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.transaction);
    }
  }
);

export const getAllUserTransactions = createAsyncThunk(
  "GET ALL USER TRANSACTIONS",
  async thunkAPI => {
    try {
      const token = localStorage.getItem("token");
      const { id } = await jwtDecode(token);
      const response = await getRequest(`/users/${id}/transactions`);
      const { transactions } = await jwtDecode(response.body.encrypted);
      return transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.transaction);
    }
  }
);

export const createTransaction = createAsyncThunk(
  "CREATE TRANSACTION",
  async (data, thunkAPI) => {
    try {
      const response = await postRequest(`/transactions`, data);
      const { response: transaction } = jwtDecode(response.body.encrypted);
      thunkAPI.dispatch(getBalance());
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

export const getBalance = createAsyncThunk(
  "GET BALANCE",
  async (data, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const { id } = jwtDecode(token);
      const response = await getRequest(`/users/${id}/balance`);
      const { balance } = jwtDecode(response.body);
      return balance;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.transaction);
    }
  }
);

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    balance: 0,
    error: null,
  },
  extraReducers: builder => {
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
      })
      .addCase(getAllUserTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getAllUserTransactions.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getAllUserTransactions.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        console.log(action.payload);
        state.transactions = [...state.transactions, action.payload];
        state.error = null;
        state.loading = false;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(createTransaction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBalance.fulfilled, (state, action) => {
        state.balance = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getBalance.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getBalance.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export const getTransactions = state => state.transaction;
export const getBalanceFromUser = state => state.transaction.balance;

const { reducer } = transactionSlice;
export default reducer;
