import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import styles from './BackupTab.module.css';
import { tableActions } from "../../../store/tableSlice";
import { backupActions } from "../../../store/backupSlice";
import { nameActions } from "../../../store/nameSlice";
import { menuActions } from "../../../store/menuSlice";

function LoadBackup() {
    const dispatch = useDispatch();
    const [backupData, setBackupData] = useState({});
    const [fileName, setFileName] = useState("");

    function fileChangeHandler(event) {
        setFileName(event.target.files[0].name);
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
            type: 'allCells',
            newState: backupData.currentSnapshot,
        }))
        dispatch(tableActions.setAllTables({
            tablesInfo: backupData.tablesInfo,
            tableCount: backupData.tableCount
        }))
        dispatch(nameActions.setNames(backupData.namelist));
        dispatch(menuActions.storeNames(backupData.namesInput));
        dispatch(menuActions.storeTimings(backupData.timingsInput));
        dispatch(menuActions.storeHeadings(backupData.headingsInput));
    }
    return <Fragment>
        <label htmlFor='backupUpload' className={styles['upload-file-label']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
            </svg>
            Upload File
        </label>
        <input id='backupUpload' className={styles['upload-file-button']} onChange={fileChangeHandler} type="file" accept=".json" />
        {fileName && <p className={styles['file-name']}>{fileName}</p>}
        <button className={`${styles['load-backup-button']}`} disabled={!fileName} onClick={loadBackupHandler}>Load Backup</button>
    </Fragment>
}

export default LoadBackup;