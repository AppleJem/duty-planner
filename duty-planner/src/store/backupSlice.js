import { createSlice } from "@reduxjs/toolkit";

const backupSlice = createSlice({
    name: 'backupInfo',
    initialState: {
        actionHistory: [],
        backup: null,
        cells: {},
        undoInfo: {},
        snapshot: {},
        currentSnapshot: {},
    },
    reducers: {
        updateCurrentSnapshot: (state, action) => {
            console.log(action.payload);
            switch (action.payload.type) {
                case 'newTable':
                    state.currentSnapshot = {
                        ...state.currentSnapshot,
                        ...action.payload.newTable,
                    };
                    break;
                case 'deleteTable':
                    Object.keys(state.currentSnapshot).forEach(cellId => {
                        // console.log(action.payload.tableId);
                        // console.log(state.currentSnapshot[cellId].tableId);
                        if (state.currentSnapshot[cellId].tableId === action.payload.tableId) {
                            console.log('table deletion matched');
                            delete state.currentSnapshot[cellId];
                        }
                    });
                    break;
                case 'singleCell':
                    state.currentSnapshot[action.payload.cellId].name = action.payload.newName;
                    state.currentSnapshot[action.payload.cellId].color = action.payload.newColor;
                    break;
                case 'allCells':
                    state.currentSnapshot = action.payload.newState;
                    break;

            }
        },
        updateHistory: (state, action) => {
            state.actionHistory.push(action.payload);
        },
        deleteTable: (state, action) => {

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
        undo: (state) => {
            // if (state.actionHistory.length) {
            //     let lastChangedCell = state.actionHistory.slice(-1);
            //     state.undoInfo = {
            //         cellId: lastChangedCell[0],
            //         lastColor: state.cells[lastChangedCell[0]].history.slice(-2, -1)[0].color || 'transparent',
            //         lastName: state.cells[lastChangedCell[0]].history.slice(-2, -1)[0].name || '',
            //     };
            //     state.actionHistory.pop();
            //     state.cells[lastChangedCell[0]].history.pop();
            // }
            if (state.actionHistory.length) {
                let lastAction = state.actionHistory.slice(-1)[0];
                switch (lastAction.type) {
                    case 'fillSingleCell':
                        state.currentSnapshot[lastAction.cellId] = lastAction.prevState;
                        break;
                    case 'autofillAll':
                        state.currentSnapshot = lastAction.prevState;
                        break;
                }
                state.actionHistory.pop();
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
        },
    }
})

export const backupActions = backupSlice.actions;
export default backupSlice;