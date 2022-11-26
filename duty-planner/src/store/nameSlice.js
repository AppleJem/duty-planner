import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: 'namesConfig',
    initialState: { names: [], activeName: {name:'', color:''} },
    reducers: {
        setActiveName: (state, action) => {
            state.activeName = action.payload;
        },
        setNames: (state, action) => {
            state.names = action.payload;
        }
    }
})


export const nameActions = nameSlice.actions;
export default nameSlice;