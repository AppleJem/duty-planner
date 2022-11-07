import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

import TableRow from "./TableRow";
import styles from "./Table.module.css"



function Table() {
    const { timingsInput, days: numberOfDays, headingsInput, slots: numberOfSlots, startTime, endTime } = useSelector(state => state.tableSpecs);
    const { timingInputMethod } = useSelector(state => state.menuStatus);

    const headings = headingsInput.replace(/\s/g, '').split(',');

    function getTimeString(dateObj) { //function to get the formated timeString from JS date object
        return dateObj.toLocaleTimeString('en-US', { timeStyle: 'short', hourCycle: 'h23' })
    }

    let slotTimings = [];

    //Generate differnet slotTimings based on whether manual or auto input was chosen
    if (timingInputMethod === 'auto') {
        //Here we are using the number of slots and start/end time to generate the time slots for the table
        let startDate = new Date(2023, 0, 5, startTime.slice(0, 2), startTime.slice(3), 0);
        let endDate = null;
        if (startTime === endTime) {
            endDate = new Date(2023, 0, 5, endTime.slice(0, 2), endTime.slice(3), 0)
        }
        let slotLength = 0;
        if (startDate.valueOf() === endDate.valueOf()) {
            slotLength = (24 * 60 * 60 * 1000) / numberOfSlots
        } else {
            console.log("calculating");
            slotLength = Math.abs(startDate - endDate) / numberOfSlots;
        }

        for (let i = 0; i < numberOfSlots; i++) {
            let timeSlotString = getTimeString(startDate);
            startDate.setTime(startDate.getTime() + slotLength);
            timeSlotString = timeSlotString + "-" + getTimeString(startDate);
            timeSlotString = timeSlotString.replace(/:/g, '');
            slotTimings.push(timeSlotString);
            console.log(timeSlotString);
        }
    } else {
        slotTimings = timingsInput.replace(/\s/g, '').split(',');
    }


    const tRows = [];
    for (let i = 0; i < slotTimings.length; i++) {
        tRows.push(<TableRow key={uuid()} columnCount={headings.length} timing={slotTimings[i]}></TableRow>)
    }

    const tables = []
    for (let i = 0; i < numberOfDays; i++) {
        tables.push(<table key={uuid()} className={styles['main-table']}>
            <thead>
                <tr>
                    <td>Timing</td>
                    {headings.map((heading) => {
                        return <td key={uuid()}>{heading}</td>
                    })}
                </tr>
            </thead>
            <tbody>
                {tRows}
            </tbody>
        </table>)
    }

    return <div className={styles['tables-container']}>
        {tables}
    </div>

}

export default Table;