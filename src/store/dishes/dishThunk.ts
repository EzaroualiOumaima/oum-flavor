import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllDishes = createAsyncThunk(
  "dishes/getAllDishes",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("https://oum-flavor.vercel.app/api/dishes");
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
      const res = await axios.post("https://oum-flavor.vercel.app/api/dishes", credentials);
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
      const res = await axios.put(`https://oum-flavor.vercel.app/api/dishes/${credentials.id}`, {
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
      await axios.delete(`https://oum-flavor.vercel.app/api/dishes/${id}`);
      // alert("item Deleted")
      // window.location.reload()
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
