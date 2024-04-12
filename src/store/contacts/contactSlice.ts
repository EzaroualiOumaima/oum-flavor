import { createSlice } from "@reduxjs/toolkit";
import {
  addContacts,
  deleteContacts,
  getContacts,
  upadateContacts,
} from "./contactThunk";

type CustomInitialState = {
  loading: boolean;
  contacts: []; // Change 'null' to 'any' for flexibility in typing
  error: unknown; // Change 'null' to 'string' to match the potential error value type
};

const initialState: CustomInitialState = {
  loading: true,
  error: null,
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        (state.error = action.error), (state.loading = false);
      });
    builder
      .addCase(addContacts.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addContacts.rejected, (state, action) => {
        (state.error = action.error), (state.loading = false);
      });
    builder
      .addCase(upadateContacts.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(upadateContacts.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(upadateContacts.rejected, (state, action) => {
        (state.error = action.error), (state.loading = false);
      });
    builder
      .addCase(deleteContacts.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        (state.error = action.error), (state.loading = false);
      });
  },
});

export default contactSlice;
