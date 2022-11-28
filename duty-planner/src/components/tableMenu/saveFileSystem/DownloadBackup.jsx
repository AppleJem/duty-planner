import { useSelector } from "react-redux";

function DownloadBackup() {
    const currentSnapshot = useSelector(state => state.backupInfo.currentSnapshot);

    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(currentSnapshot)
        )}`;
        const currentDate = new Date();
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `${currentDate.toLocaleDateString().replace(/\//g, '_')}.json`;

        link.click();
    };

    return <button onClick={exportData}>
        Download Backup
    </button>
}

export default DownloadBackup