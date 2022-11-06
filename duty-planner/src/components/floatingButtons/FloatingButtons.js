import { useSelector } from "react-redux";

import styles from './FloatingButtons.module.css';
import NamelistButton from "./NamelistButton";
import TableMenuButton from "../navbar/TableMenuButton"

function FloatingButtons() {
    const activeMenu = useSelector(state => state.menuStatus.activeMenu)

    return <div >
        <NamelistButton />
    </div>
}

export default FloatingButtons;