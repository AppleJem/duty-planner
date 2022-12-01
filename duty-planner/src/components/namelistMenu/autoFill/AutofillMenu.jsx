import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { backupActions } from '../../../store/backupSlice';

import styles from './AutofillMenu.module.css';
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

        if (Object.keys(finalNames).length === 0 || Object.keys(finalHeadings).length === 0) {
            return;
        }

        for (let cell in snapshot) {
            // if the cell's heading is not in the finalHeadings, then skip to the next cell
            if (!finalHeadings.hasOwnProperty(snapshot[cell]['heading']) ||
                //condition: the cell that we're targeting has no name and no color.
                (snapshot[cell].name !== '' && snapshot[cell].color !== '')) {
                continue;
            }
            while (!finalNames[nameCounter]) {
                if (nameCounter < Object.keys(allNames).length) {
                    nameCounter += 1;
                } else {
                    nameCounter = nameCounter % Object.keys(allNames).length;
                }
            }
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
            return copy;
        })
    }

    function updateStartNameCounter(nameCounter) {
        setStartingNameCounter(Number(nameCounter));
    }

    function checkData() {
        console.log(Object.keys(allNames).length);
        console.log(actionHistory);
        console.log(startingNameCounter);
    }

    return <section className={`${styles['autofill-menu']}`}>
        <p className={`${styles.title}`}>Autofill Menu</p>
        <p className={`${styles.subtitle}`}>Fill up all empty slots with the name list.</p>
        <ColCheckBoxInput updateFinalHeadings={updateFinalHeadings} finalHeadings={finalHeadings} allHeadings={allHeadings} />
        <NameCheckBoxInput updateFinalNames={updateFinalNames} finalNames={finalNames} allNames={allNames} />
        <StartNameSelector updateStartNameCounter={updateStartNameCounter} finalNames={finalNames} />
        <div className={`${styles['button-container']}`}>
            <button className={styles['autofill-button']} onClick={autofillHandler}>
                Autofill
            </button>
        </div>
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