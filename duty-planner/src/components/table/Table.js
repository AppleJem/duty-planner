import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';


import styles from "./Table.module.css"
import DayTable from './DayTable';

const Table = React.memo(function () {
    const { timingsInput, days: numberOfDays, headingsInput, slots: numberOfSlots, startTime, endTime } = useSelector(state => state.tableSpecs);
    const zoom = useSelector(state => state.tableSpecs.zoom);
    const timingInputMethod = useSelector(state => state.menuStatus.timingInputMethod);

    const headings = headingsInput.replace(/\s/g, '').split(',');



    let slotTimings = [];

    function getTimeString(dateObj) { //function to get the formated timeString from JS date object
        return dateObj.toLocaleTimeString('en-US', { timeStyle: 'short', hourCycle: 'h23' })
    }

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
            slotLength = Math.abs(startDate - endDate) / numberOfSlots;
        }

        for (let i = 0; i < numberOfSlots; i++) {
            let timeSlotString = getTimeString(startDate);
            startDate.setTime(startDate.getTime() + slotLength);
            timeSlotString = timeSlotString + "-" + getTimeString(startDate);
            timeSlotString = timeSlotString.replace(/:/g, '');
            slotTimings.push(timeSlotString);
        }
    } else {
        slotTimings = timingsInput.replace(/\s/g, '').split(',');
    }



    //Generates an array of tables. Each containing the heading and tRows previously made
    const tables = []
    for (let i = 0; i < numberOfDays; i++) {
        tables.push(
            <DayTable key={uuid()} slotTimings={slotTimings} headings={headings} />
        )
    }

    return <div style={{zoom:`${zoom}%`}} id='table' className={styles['tables-container']}>
        {tables}
    </div>
})


export default Table;