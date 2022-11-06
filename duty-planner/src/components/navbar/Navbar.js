import { useSelector } from "react-redux";
import DownloadButton from "./DownloadButton";
import styles from './Navbar.module.css';

import TableMenuButton from "./TableMenuButton";

function Navbar() {
    const activeMenu = useSelector(state => state.menuStatus.activeMenu)
    return <div className={styles['navbar']}>
        {activeMenu !== 'table' && <TableMenuButton />}
        <DownloadButton/>
    </div>
}

export default Navbar;