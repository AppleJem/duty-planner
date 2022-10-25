import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

import TableRow from "./TableRow";
import styles from "./Table.module.css"



function Table() {
    const timingsInput = useSelector(state=>state.tableSpecs.timingsInput);
    const numberOfDays = useSelector(state=>state.tableSpecs.days);
    const headingsInput = useSelector(state=>state.tableSpecs.headingsInput);


    const headings = headingsInput.replace(/\s/g,'').split(',');
    const timings = timingsInput.replace(/\s/g,'').split(',');


    const tRows = [];
    for (let i = 0; i < timings.length; i++) {
        tRows.push(<TableRow key={uuid()} columnCount={headings.length} timing={timings[i]}></TableRow>)
    }

    const tables = []
    for (let i=0; i<numberOfDays;i++) {
        tables.push (<table key={uuid()} className={styles.mainTable}>
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

    return <Fragment>
        {tables}
    </Fragment>
}

export default Table;