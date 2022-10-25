import { Fragment, useState } from 'react';
import uuid from 'react-uuid';

import TableRow from "./TableRow";
import styles from "./Table.module.css"



function Table() {

    const headingInput = "S1, S2, S3, P1, P2";
    const timeInput = "1800-2200, 2200-0200, 0200-0600,0600-1000, 1000-1400, 1400-1800";
    const days=3;


    const headings = headingInput.replace(/\s/g,'').split(',');
    const timings = timeInput.replace(/\s/g,'').split(',');


    const tRows = [];
    for (let i = 0; i < timings.length; i++) {
        tRows.push(<TableRow key={uuid()} columnCount={headings.length} timing={timings[i]}></TableRow>)
    }

    const tables = []
    for (let i=0; i<days;i++) {
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