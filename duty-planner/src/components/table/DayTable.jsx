import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Table.module.css';
import uuid from 'react-uuid';

import TableRow from './TableRow';
import Cross from '../../assets/iconComponents/Cross';
import TrashIcon from '../../assets/iconComponents/TrashIcon'
import { tableActions } from '../../store/tableSlice';

function DayTable(props) {
    const dispatch = useDispatch();
    const storedTitle = useSelector(state => state.tableSpecs.tables[props.tableId].title);
    const [trashClicked, setTrashClicked] = useState(false);
    const [trashIconDisplayed, setTrashIconDisplayed] = useState(true);
    const [crossIconDisplayed, setCrossIconDisplayed] = useState(false);

    useEffect(() => {
        dispatch(tableActions.changeTableTitle({ id: props.tableId, newTitle: `Day ${props.dayNumber}` }))
    }, [dispatch, props.dayNumber])

    function titleChangeHandler(event) {
        dispatch(tableActions.changeTableTitle({ id: props.tableId, newTitle: event.target.value }))
    }

    function promptButtonHandler() {
        if (!trashClicked) {
            setTrashClicked(true);
            setCrossIconDisplayed(true);
        } else {
            setTrashClicked(false);
        }
    }

    function deleteTableHandler() {
        dispatch(tableActions.removeTable(props.tableId));
    }


    // Generates an array of rows, left most cell has the timing stamp
    const tRows = [];
    for (let i = 0; i < props.slotTimings.length; i++) {
        tRows.push(<TableRow key={`${props.tableId}row${i}`} tableId={props.tableId} dayNumber={props.dayNumber} rowNumber={i} columnCount={props.headings.length} timing={props.slotTimings[i]}></TableRow>)
    }


    function transitionEndHandler() {
        if (trashClicked) {
            setTrashIconDisplayed(false);
        } else {
            setTrashIconDisplayed(true);
            setCrossIconDisplayed(false);
        }
    }



    return <div className={styles['main-table']}>
        <div className={styles['table-title-bar']}>
            <div className={styles['table-title-group']}>
                <input onChange={titleChangeHandler} type='text' value={storedTitle} className={styles['table-name']} />
            </div>
            <button onClick={promptButtonHandler} onTransitionEnd={transitionEndHandler} className={`${styles['prompt-delete-button']} ${trashClicked ? styles.active : null}`}>
                {trashIconDisplayed && <TrashIcon className={`${styles['trash-icon']}`} />}
                {crossIconDisplayed && <Cross className={`${styles['cross-icon']}`} />}
            </button>
            {trashClicked && <button onClick={deleteTableHandler} className={`${styles['delete-table-button']}`}>
                Delete
            </button>}

        </div>
        <table >
            <thead>
                <tr>
                    <td>Timing</td>
                    {props.headings.map((heading) => {
                        return <td key={uuid()}>{heading}</td>
                    })}
                </tr>
            </thead>
            <tbody>
                {tRows}
            </tbody>
        </table>
    </div >
}

export default DayTable;