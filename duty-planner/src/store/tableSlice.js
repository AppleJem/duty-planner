import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: 'tableSpecs',
    initialState: {
        tables:[],
        timingsInput: "",
        headingsInput: "",
        days: 0,
        slots: 0,
        startTime: '',
        endTime: '',
        zoom:100
    },
    reducers: {
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
            state.endTime = action.payload;
        },
        setZoom: (state,action) => {
            state.zoom = action.payload;
        },
        addTable: (state,action) => {
            console.log(action.payload);
            state.tables.push({
                title:'',
                headingInputs: action.payload.headingInputs,
                startTime: action.payload.startTime,
                endTime: action.payload.endTime,
                numberOfSlots: action.payload.numberOfSlots,
                timingInputs: action.payload.timingInputs,
                timingInputMethod: action.payload.timingInputMethod
            })
        }

    }
})

export const tableActions = tableSlice.actions;
export default tableSlice;