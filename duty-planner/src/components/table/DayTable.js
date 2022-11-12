import { useState, Fragment } from 'react';
import styles from './Table.module.css';
import uuid from 'react-uuid';

import TableRow from './TableRow.js';
import trashcan from '../../assets/buttonIcons/trashcan.svg';

function DayTable(props) {
    const [deleting, setDeleting] = useState(0);


    // Generates an array of rows, left most cell has the timing stamp
    const tRows = [];
    for (let i = 0; i < props.slotTimings.length; i++) {
        tRows.push(<TableRow deleting={deleting} key={uuid()} columnCount={props.headings.length} timing={props.slotTimings[i]}></TableRow>)
    }


    function clearTableHandler() {
        setDeleting((prev) => {
            return (prev + 1);
        })
    }


    return <Fragment>
        <table key={uuid()} className={styles['main-table']}>
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
        <button className={styles['clear-table-button']} onClick={clearTableHandler}>
            <img src={trashcan} alt='Delete table for this day' />
        </button>
    </Fragment>
}

export default DayTable;