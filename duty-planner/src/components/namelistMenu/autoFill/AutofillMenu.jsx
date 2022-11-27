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
import StartNameSelector from './StartNameSelector';
import { generateHeadings, getSnapshot, generateNames } from './autoFillHelpers.js';

function AutofillMenu() {
    const dispatch = useDispatch();

    const tablesInfo = useSelector(state => state.tableSpecs.tables);
    const namelist = useSelector(state => state.namesConfig.names);
    const currentSnapshot = useSelector(state => state.backupInfo.currentSnapshot);
    const actionHistory = useSelector(state => state.backupInfo.actionHistory);
    const allNames = generateNames(namelist);
    const allHeadings = generateHeadings(tablesInfo);

    const [finalNames, setFinalNames] = useState(allNames);
    const [finalHeadings, setFinalHeadings] = useState(allHeadings);
    const [startingNameCounter, setStartingNameCounter] = useState(0);


    function autofillTable() {
        let snapshot = { ...currentSnapshot };
        let nameCounter = startingNameCounter;
        let filledCells = {};

        for (let cell in snapshot) {
            // if the cell's heading is not in the finalHeadings, then skip to the next cell
            if (!finalHeadings.hasOwnProperty(snapshot[cell]['heading']) ||
                //condition: the cell that we're targeting has no name and no color.
                (snapshot[cell].name !== '' && snapshot[cell].color !== '')) {
                continue;
            }
            while (!finalNames[nameCounter]) {
                console.log(nameCounter);
                if (nameCounter < Object.keys(allNames).length) {
                    nameCounter += 1;
                } else {
                    nameCounter = nameCounter % Object.keys(allNames).length;
                }
            }
            console.log(cell);
            console.log(nameCounter);
            snapshot[cell] = { name: finalNames[nameCounter].name, color: finalNames[nameCounter].color };
            // dispatch(backupActions.updateCellHistory({
            //     cellId: cell,
            //     change: {
            //         name: finalNames[nameCounter].name,
            //         color: finalNames[nameCounter].color
            //     }
            // }))
            nameCounter += 1;
        };
        dispatch(backupActions.updateHistory({
            type: 'autofillAll',
            prevState: currentSnapshot
        }))
        dispatch(backupActions.updateCurrentSnapshot({
            type: 'allCells',
            newState: snapshot
        }));
    }

    function autofillHandler() {
        console.log('activate button clicked');
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

    function updateStartNameCounter(nameCounter) {
        setStartingNameCounter(Number(nameCounter));
    }

    function checkData() {
        console.log(currentSnapshot);
        console.log(actionHistory);
        console.log(startingNameCounter);
    }

    return <section className={`${styles['autofill-menu']}`}>
        <p className={`${styles.title}`}>Autofill Menu</p>
        <p>Fill up all empty slots with the name list.<br />Please specify the columns, tables, and names to exclude</p>
        <NameCheckBoxInput updateFinalNames={updateFinalNames} finalNames={finalNames} allNames={allNames} />
        <ColCheckBoxInput updateFinalHeadings={updateFinalHeadings} finalHeadings={finalHeadings} allHeadings={allHeadings} />
        <StartNameSelector updateStartNameCounter={updateStartNameCounter} finalNames={finalNames} />
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