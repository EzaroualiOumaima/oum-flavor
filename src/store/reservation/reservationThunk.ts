import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReservations = createAsyncThunk(
    "reservations/getReservations", 
    async(_ ,thunkApi)=> {
     try {
        const response = await axios.get('/api/reservations');
       return response.data
     } catch (error) {
       return thunkApi.rejectWithValue(error) 
     }
    }
)

export const addReservations = createAsyncThunk(
    'reservations/addReservations' ,
    async(instructions : {name :string , email : string , phone:string , reservationDate:string
        ,reservationTime:string , numberOfPeople:number , specialRequests:string } , thunkApi) => {
        try {
            const res = await axios.post("/api/reservations", instructions )
              console.log(res.config)
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(error)
        }
    })



    export const updateReservations = createAsyncThunk(
        'reservations/updateReservations' ,
        async(instructions : {id :string , reservationDate :string , reservationTime : string , numberOfPeople:number} , thunkApi) => {
            try {
                const res = await axios.put(`/api/reservations/${instructions.id}`, {reservationDate: instructions.reservationDate , reservationTime: instructions.reservationTime, 
                    numberOfPeople :instructions.numberOfPeople})
                  
            } catch (error) {
                return thunkApi.rejectWithValue(error)
            }
        })

        export const deleteReservations= createAsyncThunk (
            'reservations/deleteReservations' , 
            async(id : string , thunkApi)=> {
                try {
                    await axios.delete(`/api/reservations/${id}`)
                    // alert("item Deleted")  
                    // window.location.reload()  
                } catch (error) {
                    return thunkApi.rejectWithValue(error)
                }
            }
                
        )