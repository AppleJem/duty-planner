import {useState} from 'react';
import uuid from 'react-uuid';

import styles from './TableRow.module.css';
import NameCell from './NameCell';

function TableRow(props) {
    const tColumns = []
    for (let i=0; i<props.columnCount; i++){
        tColumns.push(<NameCell deleting={props.deleting} key={uuid()}></NameCell>)
    }
    return (
        <tr>
            <td className={styles.timing}><span className={styles['prowl-time']}>{props.timing.slice(0,4)}</span>{props.timing.slice(4)}</td>
            {tColumns}
        </tr>
    )

}

export default TableRow;