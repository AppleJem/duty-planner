import { useSelector } from "react-redux";

import styles from './BackupTab.module.css'

function DownloadBackup() {
    const currentSnapshot = useSelector(state => state.backupInfo.currentSnapshot);
    const namelist = useSelector(state => state.namesConfig.names);
    const tablesInfo = useSelector(state => state.tableSpecs.tables);
    const tableCount = useSelector(state => state.tableSpecs.tableCount);

    const exportData = () => {
        const downloadData = {};
        downloadData['currentSnapshot'] = {...currentSnapshot};
        downloadData['namelist'] = [...namelist];
        downloadData['tablesInfo'] = {...tablesInfo};
        downloadData['tableCount'] = tableCount;
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

    return <button className={styles['download-button']} onClick={exportData}>
        Download Backup
    </button>
}

export default DownloadBackup;