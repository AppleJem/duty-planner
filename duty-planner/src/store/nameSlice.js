import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: 'activeName',
    initialState: { name: "" },
    reducers: {
        setActiveName: (state, action) => {
            console.log(action.payload);
            state.name = action.payload;
        }
    }
})


export const nameActions = nameSlice.actions;
export default nameSlice;