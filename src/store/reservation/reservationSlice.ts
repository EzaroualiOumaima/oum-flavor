import { createSlice } from "@reduxjs/toolkit";
import {
  addReservations,
  deleteReservations,
  getReservations,
  updateReservations,
} from "./reservationThunk";
import { Reservation } from "@/app/types";

type CustomInitialState = {
  loading: boolean;
  reservations: Reservation[]; // Change 'null' to 'any' for flexibility in typing
  error: unknown; // Change 'null' to 'string' to match the potential error value type
};

const initialState: CustomInitialState = {
  loading: true,
  error: null,
  reservations: [],
};

const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload;
      })
      .addCase(getReservations.rejected, (state, action) => {
        (state.error = action.error), (state.loading = false);
      });
    builder
      .addCase(addReservations.pending, (state) => {
        state.error = null,
       state.loading = true;
      })
      .addCase(addReservations.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addReservations.rejected, (state, action) => {
        (state.error = action.error), (state.loading = false);
      });
    builder
      .addCase(updateReservations.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(updateReservations.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateReservations.rejected, (state, action) => {
        (state.error = action.error), (state.loading = false);
      });
    builder
      .addCase(deleteReservations.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(deleteReservations.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteReservations.rejected, (state, action) => {
        (state.error = action.error), (state.loading = false);
      });
  },
});

export default reservationSlice;
