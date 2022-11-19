import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Table.module.css';
import uuid from 'react-uuid';

import TableRow from './TableRow.js';
import Cross from '../../assets/iconComponents/Cross';
import TrashIcon from '../../assets/iconComponents/TrashIcon'
import { tableActions } from '../../store/tableSlice';

function DayTable(props) {
    const dispatch = useDispatch();
    const storedTitle = useSelector(state => state.tableSpecs.tables[props.dayNumber].title);
    const [trashClicked, setTrashClicked] = useState(false)

    useEffect(() => {
        dispatch(tableActions.changeTableTitle({ index: props.dayNumber, newTitle: `Day ${props.dayNumber + 1}` }))
    }, [dispatch, props.dayNumber])

    function titleChangeHandler(event) {
        dispatch(tableActions.changeTableTitle({ index: props.dayNumber, newTitle: event.target.value }))
    }

    function trashClickHandler() {
        setTrashClicked(true);
        console.log('clicked');
    }

    function deleteTableHandler() {
        dispatch(tableActions.removeTable(props.dayNumber));
    }


    // Generates an array of rows, left most cell has the timing stamp
    const tRows = [];
    for (let i = 0; i < props.slotTimings.length; i++) {
        tRows.push(<TableRow key={`day${props.dayNumber}row${i}`} dayNumber={props.dayNumber} rowNumber={i} columnCount={props.headings.length} timing={props.slotTimings[i]}></TableRow>)
    }




    return <div className={styles['main-table']}>
        <div className={styles['table-title-bar']}>
            <div className={styles['table-title-group']}>
                <input onChange={titleChangeHandler} type='text' value={storedTitle} className={styles['table-name']} />
            </div>
            <TrashIcon className={trashClicked ? styles.active : null} onClick={trashClickHandler} />
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