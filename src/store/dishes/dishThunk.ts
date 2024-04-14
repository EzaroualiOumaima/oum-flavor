import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import env from "dotenv"
env.config()

export const getAllDishes = createAsyncThunk(
  "dishes/getAllDishes",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/dishes`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addDishes = createAsyncThunk(
  "dishes/addDishes",
  async (
    credentials: {
      title: string;
      category: string;
      ingredients: string;
      price: number;
    },
    thunkApi
  ) => {
    try {
      const res = await axios.post(`${process.env.BASE_URL}/api/dishes`, credentials);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateDishes = createAsyncThunk(
  "dishes/updateDishes",
  async (
    credentials: {
      id: string;
      title: string;
      ingredients: string;
      price: number;
    },
    thunkApi
  ) => {
    try {
      const res = await axios.put(`${process.env.BASE_URL}/api/dishes/${credentials.id}`, {
        title: credentials.title,
       
        ingredients: credentials.ingredients,
        price: credentials.price,
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteDishes = createAsyncThunk(
  "dishes/deleteDishess",
  async (id: string, thunkApi) => {
    try {
      await axios.delete(`${process.env.BASE_URL}/api/dishes/${id}`);
      // alert("item Deleted")
      // window.location.reload()
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
