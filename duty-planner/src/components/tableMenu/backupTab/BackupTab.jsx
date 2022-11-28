import DownloadBackup from "./DownloadBackup";
import LoadBackup from "./LoadBackup";

import styles from './BackupTab.module.css';

function Footer() {
    return <footer className={styles['footer']}>
        <div className={styles['backup-actions-container']}>
            <DownloadBackup />
            <LoadBackup />
        </div>
        <p className={styles.version}>Version 1.5</p>
    </footer>
}

export default Footer;