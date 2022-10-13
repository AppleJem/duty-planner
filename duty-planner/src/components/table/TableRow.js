import styles from './TableRow.module.css';

function TableRow(props) {
    return (
        
        <tr>
            <td className={styles.timing}><span className={styles['prowl-time']}>{props.timing.slice(0,4)}</span>{props.timing.slice(4)}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )

}

export default TableRow;