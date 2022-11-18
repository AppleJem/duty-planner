import React from 'react';
import { useSelector } from 'react-redux';


import styles from "./Table.module.css"
import DayTable from './DayTable';

const Table = React.memo(function () {
    // const { timingsInput, days: numberOfDays, headingsInput, slots: numberOfSlots, startTime, endTime } = useSelector(state => state.tableSpecs);
    const zoom = useSelector(state => state.tableSpecs.zoom);
    const timingInputMethod = useSelector(state => state.menuStatus.timingInputMethod);
    const tablesInfo = useSelector(state => state.tableSpecs.tables);








    function generateHeadings(headingInputs) {
        const headings = headingInputs.replace(/\s/g, '').split(',');
        return headings;
    }

    function getTimeString(dateObj) { //function to get the formated timeString from JS date object
        return dateObj.toLocaleTimeString('en-US', { timeStyle: 'short', hourCycle: 'h23' })
    }

    //Generate differnet slotTimings based on whether manual or auto input was chosen
    function generateTimings(dayTableInfo) {
        let slotTimings = [];
        console.log(dayTableInfo.timingInputMethod);
        if (dayTableInfo.timingInputMethod === 'auto') {
            //Here we are using the number of slots and start/end time to generate the time slots for the table
            let startDate = new Date(2023, 0, 5, dayTableInfo.startTime.slice(0, 2), dayTableInfo.startTime.slice(3), 0);
            let endDate = null;
            if (dayTableInfo.startTime === dayTableInfo.endTime) {
                endDate = new Date(2023, 0, 5, dayTableInfo.endTime.slice(0, 2), dayTableInfo.endTime.slice(3), 0)
            }
            let slotLength = 0;
            if (startDate.valueOf() === endDate.valueOf()) {
                slotLength = (24 * 60 * 60 * 1000) / dayTableInfo.numberOfSlots
            } else {
                slotLength = Math.abs(startDate - endDate) / dayTableInfo.numberOfSlots;
            }

            for (let i = 0; i < dayTableInfo.numberOfSlots; i++) {
                let timeSlotString = getTimeString(startDate);
                startDate.setTime(startDate.getTime() + slotLength);
                timeSlotString = timeSlotString + "-" + getTimeString(startDate);
                timeSlotString = timeSlotString.replace(/:/g, '');
                slotTimings.push(timeSlotString);
            }
        } else {
            slotTimings = dayTableInfo.timingInputs.replace(/\s/g, '').split(',');
        }

        return slotTimings;
    }




    //Generates an array of tables. Each containing the heading and tRows previously made
    const tables = []
    for (let i = 0; i < tablesInfo.length; i++) {
        tables.push(
            <DayTable key={`day${i}table`} dayNumber={i} slotTimings={generateTimings(tablesInfo[i])} headings={generateHeadings(tablesInfo[i].headingInputs)} />
        )
    }

    return <div style={{ zoom: `${zoom}%` }} id='table' className={styles['tables-container']}>
        {tables}
    </div>
})


export default Table;