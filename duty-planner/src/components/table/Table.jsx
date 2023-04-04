import React from 'react';
import { useSelector } from 'react-redux';


import styles from "./Table.module.css"
import DayTable from './DayTable';
import PromptTableMenu from './PromptTableMenu';

const Table = React.memo(function () {
    // const { timingsInput, days: numberOfDays, headingsInput, slots: numberOfSlots, startTime, endTime } = useSelector(state => state.tableSpecs);
    const zoom = useSelector(state => state.tableSpecs.zoom);
    //extract the array of tables from redux store
    const tablesInfo = useSelector(state => state.tableSpecs.tables);
    const tableCount = useSelector(state => state.tableSpecs.tableCount);


    //Generate an array of DayTable components
    //we're not using for(x in y) here because we need the tables to appear in order. The tablesInfo object is not ordered by default
    const tables = [];
    let dayCount = 1
    for (let i = 0; i < tableCount; i++) {
        if (tablesInfo[`table${i}`]) {
            tables.push(
                <DayTable key={`table${i}`} dayNumber={dayCount} tableId={`table${i}`} slotTimings={tablesInfo[`table${i}`].timingsArr} headings={tablesInfo[`table${i}`].headingsArr} />
            )
            dayCount += 1;
        }
    }

    return <div style={{ zoom: `${zoom}%` }} id='table'
        className="col-start-1 col-end-7  h-screen m-top
        flex flex-col items-center overflow-scroll ">
        {Object.keys(tablesInfo).length === 0 ? <PromptTableMenu /> : tables}
    </div>
})


export default Table;