import TableRow from "./TableRow";
import styles from "./Table.module.css"

function Table() {

    return <table className={styles.mainTable}>
        <thead>
            <tr>
                <td>Timing</td>
                <th>S1</th>
                <th>S2</th>
                <th>Prowl</th>
            </tr>
        </thead>
        <tbody>
            <TableRow timing="1800-2200"></TableRow>
            <TableRow timing="2200-0200"></TableRow>
            <TableRow timing="0200-0600"></TableRow>
            <TableRow timing="0600-1000"></TableRow>
            <TableRow timing="1000-1400"></TableRow>
            <TableRow timing="1400-1800"></TableRow>
        </tbody>

    </table>
}

export default Table;