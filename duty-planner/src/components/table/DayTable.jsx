import React, { useState } from 'react';
import styles from './Table.module.css';
import uuid from 'react-uuid';

import TableRow from './TableRow.js';

function DayTable(props) {


    // Generates an array of rows, left most cell has the timing stamp
    const tRows = [];
    for (let i = 0; i < props.slotTimings.length; i++) {
        tRows.push(<TableRow key={`day${props.dayNumber}row${i}`} dayNumber={props.dayNumber} rowNumber={i} columnCount={props.headings.length} timing={props.slotTimings[i]}></TableRow>)
    }




    return <div className={styles['main-table']}>
        <input type='text' defaultValue={`Day ${props.dayNumber + 1}`} className={styles['table-name']}/>
        <hr/>
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