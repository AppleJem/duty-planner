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
    const tables = []
    for (let i = 0; i < tableCount; i++) {
        console.log(tablesInfo[`table${i}`]);
        if (tablesInfo[`table${i}`]) {
            console.log('adding to table')
            tables.push(
                <DayTable key={`table${tableCount}`} dayNumber={i} tableId={`table${i}`} slotTimings={tablesInfo[`table${i}`].timingsArr} headings={tablesInfo[`table${i}`].headingsArr} />
            )
        }
    }

    return <div style={{ zoom: `${zoom}%` }} id='table' className={styles['tables-container']}>
        {Object.keys(tablesInfo).length === 0 ? <PromptTableMenu /> : tables}
    </div>
})


export default Table;