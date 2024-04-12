import { createSlice } from "@reduxjs/toolkit";
import { addDishes, deleteDishes, getAllDishes, updateDishes } from "./dishThunk";
// import { Dish } from "../../../models/dishSchema";
import { Dish } from "@/app/types";
type CustomInitialState ={
    loading: boolean;
    dishes:Dish[] // Change 'null' to 'any' for flexibility in typing
    error: unknown ; 
  }
  
const initialState : CustomInitialState = {
    loading : true,
    error: null , 
    dishes : [],

}

const dishSlice = createSlice({
    name :"dishes",
    initialState ,
    reducers :{
    
      
    },
    extraReducers : (builder) => {
        builder 
        .addCase(getAllDishes.pending , (state) => {
            state.error = null , 
            state.loading = true
        })
        .addCase(getAllDishes.fulfilled , (state , action) => {
            state.loading = false
            state.dishes = action.payload
        })
        .addCase(getAllDishes.rejected , (state , action) => {
            state.error = action.error ,
            state.loading = false
        })
        builder 
        .addCase(addDishes.pending , (state) => {
            state.error = null ,
            state.loading = true
        })
        .addCase(addDishes.fulfilled , (state , action) =>{
            state.loading = false
        })
        .addCase(addDishes.rejected , (state , action ) => {
            state.error = action. error,
            state.loading = false
        })
        builder 
        .addCase(updateDishes.pending , (state) => {
            state.error = null ,
            state.loading = true
        })
        .addCase(updateDishes.fulfilled , (state , action) =>{
            state.loading = false
        })
        .addCase(updateDishes.rejected , (state , action ) => {
            state.error = action. error,
            state.loading = false
        })
        builder 
        .addCase(deleteDishes.pending , (state) => {
            state.error = null ,
            state.loading = true
        })
        .addCase(deleteDishes.fulfilled , (state , action) =>{
            state.loading = false 
        })
        .addCase(deleteDishes.rejected , (state , action ) => {
            state.error = action. error,
            state.loading = false
        })
    
       }

})



export default dishSlice;
