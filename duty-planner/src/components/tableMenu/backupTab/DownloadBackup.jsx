import { useSelector } from "react-redux";

import styles from './BackupTab.module.css'

function DownloadBackup() {
    const currentSnapshot = useSelector(state => state.backupInfo.currentSnapshot);
    const namelist = useSelector(state => state.namesConfig.names);
    const namesInput = useSelector(state => state.menuStatus.namesInput);
    const timingsInput = useSelector(state => state.menuStatus.timingsInput);
    const headingsInput = useSelector(state => state.menuStatus.headingsInput);
    const tablesInfo = useSelector(state => state.tableSpecs.tables);
    const tableCount = useSelector(state => state.tableSpecs.tableCount);

    const exportData = () => {
        const downloadData = {};
        downloadData['currentSnapshot'] = { ...currentSnapshot };
        downloadData['namelist'] = [...namelist];
        downloadData['tablesInfo'] = { ...tablesInfo };
        downloadData['tableCount'] = tableCount;
        downloadData['namesInput'] = namesInput;
        downloadData['timingsInput'] = timingsInput;
        downloadData['headingsInput'] = headingsInput;
        console.log(downloadData);
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(downloadData)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;

        const currentDate = new Date();
        link.download = `${currentDate.toLocaleDateString().replace(/\//g, '_')}.json`;

        link.click();
    };

    return <button className={styles['download-backup-button']} onClick={exportData}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" />
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
        </svg>
        Download Backup
    </button>
}

export default DownloadBackup;