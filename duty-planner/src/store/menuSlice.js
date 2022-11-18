import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menuStatus',
    initialState: {
        activeMenu: "table",
        showNamelist: false,
        headingsInput: 'S1, S2, P1, P2',
        timingsInput: '',
        slotsInput: 6,
        namesInput: '', 
        daysInput: 3,
        startTimeInput:'18:00',
        endTimeInput:'18:00',
        slotLengthInput: {hours:1, minutes:0},
        timingInputMethod: 'auto'
    },
    reducers: {
        setActiveMenu: (state, action) => {
            //the activeMenu is either "table" or "namelist" or "none"
            state.activeMenu = action.payload;
        },
        toggleNamelist: (state) => {
            state.showNamelist = !state.showNamelist;
        },
        storeHeadings: (state, action) => {
            state.headingsInput = action.payload;
        },
        storeTimings: (state, action) => {
            state.timingsInput = action.payload;
        },
        storeSlots: (state, action) => {
            state.slotsInput = action.payload;
        },
        storeNames: (state, action) => {
            state.namesInput = action.payload;
        },
        storeDays: (state, action) => {
            state.daysInput = action.payload;
        },
        storeStartTime:(state,action)=> {
            state.startTimeInput = action.payload;
        },
        storeEndTime:(state,action)=> {
            state.endTimeInput = action.payload;
        },
        storeSlotLengthHours: (state,action)=> {
            state.slotLengthInput.hours = action.payload;
        },
        storeSlotLengthMinutes: (state,action) => {
            state.slotLengthInput.minutes = action.payload;
        },
        toggleTimingInputMethod: (state) => {
            if (state.timingInputMethod === 'auto') {
                state.timingInputMethod = 'manual';
            } else {
                state.timingInputMethod = 'auto';
            }
            

        }
    }
})


export const menuActions = menuSlice.actions;
export default menuSlice;