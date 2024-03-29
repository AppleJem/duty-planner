import DownloadBackup from "./DownloadBackup";
import LoadBackup from "./LoadBackup";

import styles from './BackupTab.module.css';

function BackupTab() {
    return <section className="overflow-y-scroll flex flex-col items-center h-full">
        <DownloadBackup />
        <p className={styles['divider']}>OR</p>
        <LoadBackup />
        {/* <p className={styles.version}>Version 1.5</p> */}
    </section>
}

export default BackupTab;