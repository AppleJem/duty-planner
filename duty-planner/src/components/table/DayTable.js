import { useState } from 'react';
import styles from './Table.module.css';
import uuid from 'react-uuid';

import TableRow from './TableRow.js';

function DayTable(props) {
    const [deleting, setDeleting] = useState(0);


    // Generates an array of rows, left most cell has the timing stamp
    const tRows = [];
    for (let i = 0; i < props.slotTimings.length; i++) {
        tRows.push(<TableRow deleting={deleting} key={uuid()} columnCount={props.headings.length} timing={props.slotTimings[i]}></TableRow>)
    }


    return <table className={styles['main-table']}>
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
}

export default DayTable;