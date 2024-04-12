import { createSlice } from "@reduxjs/toolkit";
import { addReviews, deleteReviews, getReviews, updateReviews } from "./reviewThunk";

type CustomInitialState = {
    loading: boolean;
    reviews: []; 
    error: unknown; 
  };
  
  const initialState: CustomInitialState = {
    loading: true,
    error: null,
    reviews: [],
  };

  const reviewSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getReviews.pending, (state) => {
          (state.error = null), (state.loading = true);
        })
        .addCase(getReviews.fulfilled, (state, action) => {
          state.loading = false;
          state.reviews = action.payload;
        })
        .addCase(getReviews.rejected, (state, action) => {
          (state.error = action.error), (state.loading = false);
        });
      builder
        .addCase(addReviews.pending, (state) => {
          state.error = null,
         state.loading = true;
        })
        .addCase(addReviews.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(addReviews.rejected, (state, action) => {
          (state.error = action.error), (state.loading = false);
        });
        builder
        .addCase(updateReviews.pending, (state) => {
          state.error = null,
         state.loading = true;
        })
        .addCase(updateReviews.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(updateReviews.rejected, (state, action) => {
          (state.error = action.error), (state.loading = false);
        });

      builder
        .addCase(deleteReviews.pending, (state) => {
          (state.error = null), (state.loading = true);
        })
        .addCase(deleteReviews.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(deleteReviews.rejected, (state, action) => {
          (state.error = action.error), (state.loading = false);
        });
    },
  });

export default reviewSlice;