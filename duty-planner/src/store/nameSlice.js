import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: 'namesConfig',
    initialState: { names: [], activeName: {} },
    reducers: {
        setActiveName: (state, action) => {
            console.log(action.payload);
            state.activeName = action.payload;
        },
        setNames: (state, action) => {
            state.names = action.payload;
        }
    }
})


export const nameActions = nameSlice.actions;
export default nameSlice;