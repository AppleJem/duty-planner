import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from './BackupTab.module.css';
import { tableActions } from "../../../store/tableSlice";
import { backupActions } from "../../../store/backupSlice";
import { nameActions } from "../../../store/nameSlice";

function LoadBackup() {
    const dispatch = useDispatch();
    const [backupData, setBackupData] = useState({});

    function fileChangeHandler(event) {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setBackupData(JSON.parse(e.target.result));
        }
    }

    function loadBackupHandler(event) {
        console.log(backupData);
        console.log(backupData.tablesInfo);
        dispatch(backupActions.updateCurrentSnapshot({
            type:'allCells',
            newState: backupData.currentSnapshot,
        }))
        dispatch(tableActions.setAllTables({
            tablesInfo: backupData.tablesInfo,
            tableCount: backupData.tableCount
        }))
        dispatch(nameActions.setNames(backupData.namelist));
    }
    return <div className={styles['load-backup-container']}>
        <input className={styles['upload-file-button']} onChange={fileChangeHandler} type="file" accept=".json" />
        <button className={styles['load-backup-button']} onClick={loadBackupHandler}>Load Backup</button>
    </div>
}

export default LoadBackup;