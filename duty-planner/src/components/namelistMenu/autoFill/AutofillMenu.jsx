import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { autofillActions } from '../../../store/autofillSlice';
import { backupActions } from '../../../store/backupSlice';

import styles from './AutofillMenu.module.css';
import classes from '../NamelistMenu.module.css';
import ToggleButton from '../../ui/ToggleButton';
import Cross from '../../../assets/iconComponents/Cross';
import NameCheckBoxInput from './NameCheckBoxInput';
import ColCheckBoxInput from './ColCheckBoxInput';
import { generateHeadings, getSnapshot, generateNames } from './autoFillHelpers.js';

function AutofillMenu() {
    const dispatch = useDispatch();

    const tablesInfo = useSelector(state => state.tableSpecs.tables);
    const namelist = useSelector(state => state.namesConfig.names);
    const cellList = useSelector(state => state.backupInfo.cells)
    const allNames = generateNames(namelist);
    const allHeadings = generateHeadings(tablesInfo);

    const [finalNames, setFinalNames] = useState(allNames);
    const [finalHeadings, setFinalHeadings] = useState(allHeadings);


    function autofillTable() {
        let snapshot = getSnapshot(cellList);
        console.log(snapshot);
        let nameCounter = 0;
        let filledCells = {};

        for (let cell in snapshot) {
            if (!finalHeadings.hasOwnProperty(cellList[cell]['heading'])) {
                continue;
            }
            while (!finalNames[nameCounter]) {
                nameCounter+=1;
                nameCounter = nameCounter % Object.keys(allNames).length;
            }
            //condition: the cell that we're targeting has no name and no color.
            if (snapshot[cell].name === '' && snapshot[cell].color === '') {
                console.log(cell);
                console.log(finalNames[nameCounter]);
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

    function updateFinalNames(name, color) {
        setFinalNames((prev) => {
            let copy = { ...prev };
            if (copy[name]) {
                delete copy[name];
            } else {
                copy[name] = color;
            }
            return copy;
        })
    }

    function updateFinalHeadings(heading) {
        setFinalHeadings((prev) => {
            let copy = { ...prev };
            if (copy[heading]) {
                delete copy[heading];
            } else {
                copy[heading] = heading;
            }
            console.log(copy);
            return copy;
        })
    }

    function checkData() {
        console.log(finalNames);
        console.log(tablesInfo);
        console.log(finalHeadings);
        console.log(cellList);
        console.log(allNames);
    }

    return <section className={`${styles['autofill-menu']}`}>
        <p className={`${styles.title}`}>Autofill Menu</p>
        <p>Fill up all empty slots with the name list.<br />Please specify the columns, tables, and names to exclude</p>
        <NameCheckBoxInput updateFinalNames={updateFinalNames} finalNames={finalNames} allNames={allNames} />
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