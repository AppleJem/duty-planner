import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import styles from './TableRow.module.css';
import NameCell from './NameCell';
import { backupActions } from '../../store/backupSlice';

const TableRow = React.memo(function TableRow(props) {
    const dispatch = useDispatch();


    const tColumns = []
    for (let i = 0; i < props.columnCount; i++) {
        tColumns.push(<NameCell cellId={`${props.tableId}_${props.rowNumber}_${i}`} key={uuid()} />)
    }
    return (
        <tr>
            <td className={styles.timing}><span className={styles['prowl-time']}>{props.timing.slice(0, 4)}</span>{props.timing.slice(4)}</td>
            {tColumns}
        </tr>
    )
})

export default TableRow;