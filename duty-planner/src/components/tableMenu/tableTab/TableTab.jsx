
import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from "./TableTab.module.css";
import classes from '../../ui/Popup.module.css'
import TimingsInput from './TimingsInput';
import HeadingsInput from './HeadingsInput';
import SlotsInput from './SlotsInput';
import StartEndInput from './StartEndInput';
import ToggleTimingInput from './ToggleTimingInput';

import AddTableButton from './AddTableButton';
import Popup from '../../ui/Popup';

function TableTab() {
    const { timingInputMethod } = useSelector(state => state.menuStatus);
    const [popupCounter, setPopupCounter] = useState(0)
    const [popupFading, setPopupFading] = useState(false)

    function callPopup() {
        setPopupCounter((prev) => {
            return (prev + 1);
        });
    }

    function fadePopup() {
        setPopupFading(true);
    }

    function unmountPopupHandler(event) {
        event.stopPropagation();
        setPopupCounter(0);
        setPopupFading(false);
    }

    return <section className={styles['table-tab']}>
        <HeadingsInput updateHeadingInputs={(newHeadingInputs) => {
            // setHeadingInputs(newHeadingInputs);
        }} />

        <ToggleTimingInput />
        {timingInputMethod === 'manual' &&
            <TimingsInput updateTimingInputs={(newTimingInputs) => {
                //whenever the timings input changes, it is reflected in the state
                // setTimingInputs(newTimingInputs);
            }} />}

        {timingInputMethod === 'auto' && <StartEndInput />}
        {timingInputMethod === 'auto' && <SlotsInput />}

        <AddTableButton callPopup={callPopup} />
        {popupCounter ? <Popup onTransitionEnd={unmountPopupHandler} className={`${popupFading ? classes.fading : null}`} fadePopup={fadePopup}>
            {popupCounter === 1 ? "Table added!" : `${popupCounter} tables added!`}
        </Popup> : null}

    </section>

}

export default TableTab;