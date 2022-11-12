import { useRef } from 'react';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import styles from './DownloadButton.module.css';
import downloadIcon from '../../assets/buttonIcons/download.svg'

function DownloadButton() {
    const downloadButtonRef = useRef();

    function downloadImageHandler() {
        toPng(document.querySelector('#table'))
            .then((dataUrl) => {
                let link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    return <button id='my-node' ref={downloadButtonRef} onClick={downloadImageHandler} className={styles['download-button']}>
        <img src={downloadIcon} alt='download button' />
    </button>
}

export default DownloadButton;