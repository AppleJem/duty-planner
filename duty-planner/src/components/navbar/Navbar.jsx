import { useSelector } from "react-redux";
import styles from './Navbar.module.css';

import TableMenuButton from "./TableMenuButton";
import ZoomSelector from './ZoomSelector';
import UndoButton from "./UndoButton";

function Navbar() {
    const activeMenu = useSelector(state => state.menuStatus.activeMenu)
    return <div
        className="bg-slate-700 col-start-1 col-span-6 grid items-center justify-items-center grid-cols-6 h-14">
        {activeMenu !== 'table' && <TableMenuButton />}
        <ZoomSelector />
        <UndoButton />
    </div>
}

export default Navbar;