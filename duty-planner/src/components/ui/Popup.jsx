import { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Popup.module.css';




function Popup(props) {

    useEffect(() => {
        let unmountTimeout = setTimeout(() => {
            props.fadePopup();
        }, 1500)
        return function cleanup () {
            clearTimeout(unmountTimeout);
        }
    }, [props])

    return <Fragment>
        {ReactDOM.createPortal(<div onTransitionEnd={props.onTransitionEnd} className={`${styles['popup-container']} ${props.className}`}>
            {props.children}
        </div>, document.querySelector("#popup-root"))}
    </Fragment>

}

export default Popup;