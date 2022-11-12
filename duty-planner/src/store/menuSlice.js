import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menuStatus',
    initialState: {
        activeMenu: "none",
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