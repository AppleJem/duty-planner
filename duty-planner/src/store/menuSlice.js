import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menuStatus',
    initialState: {
        activeMenu: "none",
        showNamelist: false,
        headingsInput: '',
        timingsInput: '',
        slotsInput: 6,
        namesInput: '', 
        daysInput: 3,
        startTimeInput:'00:00',
        endTimeInput:'00:00',
        slotLengthInput: {hours:1, minutes:0}
    },
    reducers: {
        setActiveMenu: (state, action) => {
            //the activeMenu is either "table" or "namelist" or "none"
            console.log(action.payload);
            state.activeMenu = action.payload;
        },
        toggleNamelist: (state) => {
            state.showNamelist = !state.showNamelist;
            console.log(state.showNamelist)
        },
        storeHeadings: (state, action) => {
            console.log(action.payload);
            state.headingsInput = action.payload;
        },
        storeTimings: (state, action) => {
            console.log(action.payload);
            state.timingsInput = action.payload;
        },
        storeSlots: (state, action) => {
            state.slotsInput = action.payload;
        },
        storeNames: (state, action) => {
            console.log(action.payload);
            state.namesInput = action.payload;
        },
        storeDays: (state, action) => {
            console.log(action.payload);
            state.daysInput = action.payload;
        },
        storeStartTime:(state,action)=> {
            console.log(action.payload);
            state.startTimeInput = action.payload;
        },
        storeEndTime:(state,action)=> {
            console.log(action.payload);
            state.endTimeInput = action.payload;
        },
        storeSlotLengthHours: (state,action)=> {
            console.log(action.payload);
            state.slotLengthInput.hours = action.payload;
        },
        storeSlotLengthMinutes: (state,action) => {
            state.slotLengthInput.minutes = action.payload;
        }
    }
})


export const menuActions = menuSlice.actions;
export default menuSlice;