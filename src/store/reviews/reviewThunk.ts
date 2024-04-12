import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviews = createAsyncThunk(
    "reviews/getReviews", 
    async(_ ,thunkApi)=> {
     try {
        const response = await axios.get('/api/reviews');
       return response.data
     } catch (error) {
       return thunkApi.rejectWithValue(error) 
     }
    }
)

export const addReviews = createAsyncThunk(
    'reviews/addReviews' ,
    async(formdataReview : {name :string , message : string } , thunkApi) => {
        try {
            const res = await axios.post("/api/reviews", formdataReview )
            //   console.log(res.config)
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(error)
        }
    })

    export const deleteReviews= createAsyncThunk (
        'reviews/deleteReviews' , 
        async(id : string , thunkApi)=> {
            try {
                await axios.delete(`/api/reviews/${id}`)
                
            } catch (error) {
                return thunkApi.rejectWithValue(error)
            }
        }
            
    )

    export const updateReviews= createAsyncThunk (
        'reviews/updateReviews' , 
        async(id : string , thunkApi)=> {
            try {
                await axios.patch(`/api/reviews/${id}`)
                
            } catch (error) {
                return thunkApi.rejectWithValue(error)
            }
        }
            
    )