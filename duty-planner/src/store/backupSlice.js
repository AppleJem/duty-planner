import { createSlice } from "@reduxjs/toolkit";

const backupSlice = createSlice({
    name: 'backupInfo',
    initialState: {
        actionHistory: [],
        backup: null,
        cells: {},
        undoInfo: {},
        snapshot: {},

    },
    reducers: {
        updateHistory: (state, action) => {
            state.actionHistory.push(action.payload);
        },
        addToCellList: (state, action) => {
            state.cells[action.payload.cellId] = {
                history: [{ color: '', name: '' }],
                heading: action.payload.heading
            };
        },
        removeFromCellList: (state, action) => {
            delete state.cells[action.payload];
        },
        updateCellHistory: (state, action) => {
            state.cells[action.payload.cellId].history.push(action.payload.change);
        },
        updateHistoryList: (state, action) => {
            state.actionHistory.push(action.payload);
        },
        undo: (state) => {
            if (state.actionHistory.length) {
                let lastChangedCell = state.actionHistory.slice(-1);
                state.undoInfo = {
                    cellId: lastChangedCell[0],
                    lastColor: state.cells[lastChangedCell[0]].history.slice(-2, -1)[0].color || 'transparent',
                    lastName: state.cells[lastChangedCell[0]].history.slice(-2, -1)[0].name || '',
                };
                state.actionHistory.pop();
                state.cells[lastChangedCell[0]].history.pop();
            }
        },
        takeSnapShot: (state) => {
            let keysArr = Object.keys(state.cells);
            let snapshotObj = {}
            for (let i = 0; i < keysArr.length; i++) {
                let lastState = state.cells[keysArr[i]].history.slice(-1)[0]
                snapshotObj[keysArr[i]] = {
                    name: lastState.name,
                    color: lastState.color
                }
            }
            console.log(snapshotObj);
            state.snapshot = snapshotObj;
        }
    }
})

export const backupActions = backupSlice.actions;
export default backupSlice;