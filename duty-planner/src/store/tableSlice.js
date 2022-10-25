import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: 'tableSpecs',
    initialState: {
        timingsInput:"",
        headingsInput:"",
        //number of days
        days:0
    },
    reducers:{
        setTimings: (state, action) => {
            console.log(action.payload);
            state.timingsInput = action.payload;
        },
        setNumberOfDays: (state,action) => {
            console.log(action.payload);
            state.days = action.payload;
        },
        setHeadings:(state,action)=>{
            console.log(action.payload);
            state.headingsInput = action.payload;
        }
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice;