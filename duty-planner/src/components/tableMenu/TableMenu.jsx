
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

import { menuActions } from '../../store/menuSlice';

import TableTab from './tableTab/TableTab';
import BackupTab from './backupTab/BackupTab';
import styles from "./TableMenu.module.css";
import Modal from '../ui/Modal';

function TableMenu() {
    const dispatch = useDispatch();
    const [tableClosing, setTableClosing] = useState(false);
    const [activeMenu, setActiveMenu] = useState("table-active"); //can be table or backup
    const [showModal, setShowModal] = useState(false);

    function hideSideMenu() {
        setTableClosing(true);
    }

    function showTableMenu() {
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

    return <aside onTransitionEnd={closeTableMenu}
        className={`fixed w-5/6 lg:w-1/4 h-full flex flex-col justify-start z-10 bg-slate-700 shadow-sm 
        ${styles['table-container']} ${tableClosing && styles['closing']}`}>
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </button>
        </section>

        {activeMenu === 'table-active' && <TableTab />}
        {activeMenu === 'backup-active' && <BackupTab />}
        <p className="p-2">
            <span className="">v1.7 - </span>
            <span onClick={() => setShowModal(true)} className="underline">
                Check Release Notes
            </span>
        </p>

        {showModal && createPortal(
            <Modal onClose={() => setShowModal(false)} />,
            document.body
        )}
    </aside >




}

export default TableMenu;