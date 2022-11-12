import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: 'tableSpecs',
    initialState: {
        timingsInput: "",
        headingsInput: "",
        //number of days
        days: 0,
        slots: 0,
        startTime: '',
        endTime: '',
        slotLength: { hours: 0, minutes: 0 },
        names:'',
        tableRef:null,
    },
    reducers: {
        setTableRef:(state,action) => {
            console.log(action.payload);
            state.tableRef = action.payload;
        },
        setTimings: (state, action) => {
            state.timingsInput = action.payload;
        },
        setNumberOfDays: (state, action) => {
            //We do this conditional instead of setting default to 3 because otherwise an empty table will showup when the page loads
            if (action.payload === 0) {
                state.days = 3;
                return
            }
            state.days = action.payload;
        },
        setHeadings: (state, action) => {
            state.headingsInput = action.payload;
        },
        setSlots: (state, action) => {
            state.slots = action.payload;
        },
        setStartTime: (state, action) => {
            state.startTime = action.payload;
        },
        setEndTime: (state, action) => {
            console.log(action.payload)
            state.endTime = action.payload;
        },
        setSlotLength: (state, action) => {
            state.slotLength.hours = action.payload.hours;
            state.slotLength.minutes = action.payload.minutes;
        },
        setNames: (state,action) => {
            state.names = action.payload;
        }
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice;