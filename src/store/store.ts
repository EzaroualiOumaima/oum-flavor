import {configureStore} from "@reduxjs/toolkit";
import reservationSlice from "./reservation/reservationSlice";
import contactSlice from "./contacts/contactSlice";
import dishSlice from "./dishes/dishSlice";
const store = configureStore ({
    reducer :{
       dishes : dishSlice.reducer,
       reservations : reservationSlice.reducer,
       contacts : contactSlice.reducer
    }
   })
   
   
   export default store;
   export type RootState = ReturnType<typeof store.getState>
   export type AppDispatch = typeof store.dispatch