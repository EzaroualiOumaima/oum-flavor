// import { sendMail } from "@/actions/mail";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/api/contacts");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (
    credentials: { name: string; email: string; message: string },
    thunkApi
  ) => {
    try {
      const res = await axios.post("/api/contacts", credentials);
      console.log(res)
     
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const upadateContacts = createAsyncThunk(
  "contacts/upadateContacts",
  async (
    credentials: { id: string; name: string; email: string; message: string },
    thunkApi
  ) => {
    try {
      const res = await axios.put(`/api/contacts/${credentials.id}`, {
        name: credentials.name,
        email: credentials.email,
        message: credentials.message,
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContactss",
  async (id: string, thunkApi) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      // alert("item Deleted")
      // window.location.reload()
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
