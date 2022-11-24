import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { autofillActions } from '../../../store/autofillSlice';
import { backupActions } from '../../../store/backupSlice';

import styles from './AutofillMenu.module.css';
import classes from '../NamelistMenu.module.css';
import ToggleButton from '../../ui/ToggleButton';
import Cross from '../../../assets/iconComponents/Cross';
import NameCheckBoxInput from './ColCheckBoxInput';
import ColCheckBoxInput from './ColCheckBoxInput';
import { generateHeadings, generateCellList, getSnapshot } from './autoFillHelpers.js';

function AutofillMenu() {
    const dispatch = useDispatch();

    const tablesInfo = useSelector(state => state.tableSpecs.tables);
    const tableCount = useSelector(state => state.tableSpecs.tableCount);
    const namelist = useSelector(state => state.namesConfig.names);
    const cellList = useSelector(state => state.backupInfo.cells)
    const allHeadings = generateHeadings(tablesInfo);

    const [finalNames, setFinalNames] = useState(namelist);
    const [finalHeadings, setFinalHeadings] = useState(allHeadings);


    function autofillTable() {
        let snapshot = getSnapshot(cellList);
        let nameCounter = 0;
        let cells = generateCellList(tablesInfo, tableCount);
        let filledCells = {};

        for (let cell of cells) {
            if (nameCounter >= finalNames.length) {
                nameCounter = nameCounter % finalNames.length;
            }
            //condition: the cell that we're targeting has no name and no color.
            if (snapshot[cell].name === '' && snapshot[cell].color === '') {
                if (finalNames[nameCounter] === undefined) {
                    //if this element is empty (because of checkbox options), skip to next element
                    nameCounter += 1
                }
                filledCells[cell] = { name: finalNames[nameCounter].name, color: finalNames[nameCounter].color };
                dispatch(backupActions.updateCellHistory({
                    cellId: cell,
                    change: {
                        name: finalNames[nameCounter].name,
                        color: finalNames[nameCounter].color
                    }
                }))
                nameCounter += 1;
            }
        };
        dispatch(autofillActions.setFilledCells(filledCells));
    }




    function autofillHandler() {
        console.log('activate button clicked');
        dispatch(backupActions.takeSnapShot());
        autofillTable();

    }

    function updateFinalNames(index, isRemove, value) {
        if (isRemove) {
            setFinalNames((prev) => {
                let copy = [...prev];
                delete copy[index];
                return copy;
            })
        } else {
            setFinalNames((prev) => {
                let copy = [...prev];
                copy[index] = value;
                return copy;
            })
        }
    }

    function updateFinalHeadings(heading) {
        setFinalHeadings((prev) => {
                let copy = {...prev};
            if (copy[heading]) {
                delete copy[heading];
            } else {
                copy[heading] = heading;
            }
            return copy;
        })
    }

    function checkData() {
        console.log(finalNames);
        console.log(tablesInfo);
        console.log(finalHeadings);
    }

    return <section className={`${styles['autofill-menu']}`}>
        <p className={`${styles.title}`}>Autofill Menu</p>
        <p>Fill up all empty slots with the name list.<br />Please specify the columns, tables, and names to exclude</p>
        <NameCheckBoxInput updateFinalNames={updateFinalNames} finalNames={finalNames} dataArr={namelist} />
        <ColCheckBoxInput updateFinalHeadings={updateFinalHeadings} finalHeadings={finalHeadings} allHeadings={allHeadings} />
        <button onClick={autofillHandler}>
            Autofill
        </button>
        <button onClick={checkData}>Data Check</button>
    </section>

}

export default AutofillMenu;

// jsx for choosing rows and columns to include
// <section className={`${styles['autofill-menu']}`}>
//     <p className={`${classes.title} ${styles.title}`}>Autofill Menu</p>
//     <p className={`${styles['from-to-label']}`}>From</p>
//     <div className={`${styles['inputs-container']}`}>
//         <div className={`${styles['form-control']}`}>
//             <label htmlFor="dayFrom">Day</label>
//             <input id="dayFrom" type="text" />
//         </div>
//         <div className={`${styles['form-control']}`}>
//             <label htmlFor="rowFrom">Row</label>
//             <input id="rowFrom" type="text" />
//         </div>
//         <div className={`${styles['form-control']}`}>
//             <label htmlFor="colFrom">Column</label>
//             <input id="colFrom" type="text" />
//         </div>
//     </div>
//     <p className={`${styles['from-to-label']}`}>To</p>
//     <div className={`${styles['inputs-container']}`}>
//         <div className={`${styles['form-control']}`}>
//             <label htmlFor="dayTo">Day</label>
//             <input id="dayTo" type="text" />
//         </div>
//         <div className={`${styles['form-control']}`}>
//             <label htmlFor="rowTo">Row</label>
//             <input id="rowTo" type="text" />
//         </div>
//         <div className={`${styles['form-control']}`}>
//             <label htmlFor="colTo">Column</label>
//             <input id="colTo" type="text" />
//         </div>
//     </div>

//     <select>
//         <option>all</option>
//     </select>

//     <button onClick={autofillHandler}>
//         Autofill
//     </button>
// </section>