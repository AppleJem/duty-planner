import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menuStatus',
    initialState: { activeMenu: "none", showNamelist: false },
    reducers: {
        setActiveMenu: (state, action) => {
            //the activeMenu is either "table" or "namelist" or "none"
            console.log(action.payload);
            state.activeMenu = action.payload;
        },
        toggleNamelist: (state) => {
            state.showNamelist = !state.showNamelist;
            console.log(state.showNamelist)
        }
    }
})


export const menuActions = menuSlice.actions;
export default menuSlice;