
import { useState } from 'react';
import { useDispatch} from 'react-redux';

import { menuActions } from '../../store/menuSlice';

import TableTab from './tableTab/TableTab';
import BackupTab from './backupTab/BackupTab';
import styles from "./TableMenu.module.css";

function TableMenu() {
    const dispatch = useDispatch();
    const [tableClosing, setTableClosing] = useState(false);
    const [activeMenu, setActiveMenu] = useState("table-active"); //can be table or backup

    function hideSideMenu() {
        setTableClosing(true);
    }

    function showTableMenu() {
        console.log("set menu")
        setActiveMenu("table-active");
    }

    function showBackupMenu() {
        setActiveMenu("backup-active");
    }

    function stopPropagationHandler(event) {
        event.stopPropagation();
    }

    function closeTableMenu() {
        dispatch(menuActions.setActiveMenu('none'));
    }

    return <aside onTransitionEnd={closeTableMenu} className={`${styles['table-container']} ${tableClosing && styles['closing']}`}>
        <section className={styles['title-bar']}>
            <div className={`${styles['tab-group']} ${styles[activeMenu]}`}>
                <div className={styles['tab-text-container']}>
                    <span onTransitionEnd={stopPropagationHandler} onClick={showTableMenu} className={`${styles['menu-tab']}`}>Table</span>
                    <span onTransitionEnd={stopPropagationHandler} onClick={showBackupMenu} className={`${styles['menu-tab']}`}>Backup</span>
                </div>
                <div className={styles['tab-bar-container']}>
                    <span onTransitionEnd={stopPropagationHandler} className={styles['highlight-bar']}></span>
                </div>
            </div>
            <button onClick={hideSideMenu} className={`${styles['hide-button']}`}>
                {/* <img src={arrowLeft} alt="hide Sidebar menu" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                </svg>
            </button>
        </section>

        {activeMenu === 'table-active' && <TableTab />}
        {activeMenu === 'backup-active' && <BackupTab />}


    </aside >




}

export default TableMenu;