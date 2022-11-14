import { useSelector } from "react-redux";
import styles from './Navbar.module.css';

import TableMenuButton from "./TableMenuButton";
import ZoomSelector from './ZoomSelector';
import UndoButton from "./UndoButton";

function Navbar() {
    const activeMenu = useSelector(state => state.menuStatus.activeMenu)
    return <div className={styles['navbar']}>
        {activeMenu !== 'table' && <TableMenuButton />}
        <ZoomSelector/>
        <UndoButton/>
    </div>
}

export default Navbar;