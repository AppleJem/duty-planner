import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: 'tableSpecs',
    initialState: {
        tables: {},
        tableCount: 0,
        timingsInput: "",
        headingsInput: "",
        days: 0,
        slots: 0,
        startTime: '',
        endTime: '',
        zoom: 100
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
        setZoom: (state, action) => {
            state.zoom = action.payload;
        },
        addTable: (state, action) => {
            state.tables[action.payload.id] = {
                title: '',
                timingsArr: action.payload.timingsArr,
                headingsArr: action.payload.headingsArr,
            };
            state.tableCount += 1;
        },
        changeTableTitle: (state, action) => {
            state.tables[action.payload.id].title = action.payload.newTitle;
        },
        removeTable: (state, action) => {
            // state.tables.splice(action.payload , 1);
            delete state.tables[action.payload];
        }

    }
})

export const tableActions = tableSlice.actions;
export default tableSlice;