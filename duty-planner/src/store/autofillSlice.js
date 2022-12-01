import { createSlice } from "@reduxjs/toolkit";

const autofillSlice = createSlice({
    name: 'autofillInfo',
    initialState: {
        counter: 0,
        active: false,
        currentName: {},
        currentCell: "",
        filledCells: {},
    },
    reducers: {
        incrementCounter: (state) => {
            state.counter += 1;
        },
        setCurrentName: (state, action) => {
            state.currentName = action.payload;
        },
        setCurrentCell: (state, action) => {
            state.currentCell = action.payload;
        },
        autofillCells: (state, action) => {
            let nameCounter = 0;
            let namelist = action.payload.namelist;
            for (let cell of action.payload.cells) {
                if (nameCounter >= namelist.length) {
                    nameCounter = nameCounter % namelist.length
                }
                // dispatch(autofillActions.setCurrentCell(cell));
                // dispatch(autofillActions.setCurrentName(namelist[nameCounter]));
                state.currentCell = cell;
                state.currentName = namelist[nameCounter];
                nameCounter += 1;
            };
        },
        setCellAndName: (state, action) => {
            state.currentCell = action.payload.cell;
            state.currentName = action.payload.name;
        },
        activate: (state) => {
            state.active = true;
        },
        deactivate: (state) => {
            state.active = false;
        },
        setFilledCells: (state, action) => {
            state.filledCells = action.payload;
        }
    }
})

export default autofillSlice;
export const autofillActions = autofillSlice.actions;