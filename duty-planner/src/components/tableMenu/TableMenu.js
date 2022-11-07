
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tableActions } from '../../store/tableSlice';
import { menuActions } from '../../store/menuSlice';

import styles from "./TableMenu.module.css";
import TimingsInput from './TimingsInput';
import HeadingsInput from './HeadingsInput';
import DaysInput from './DaysInput';
import SlotsInput from './SlotsInput';
import StartEndInput from './StartEndInput';
import SlotLengthInput from './SlotLengthInput';
import ToggleTimingInput from './ToggleTimingInput';

import arrowLeft from '../../assets/buttonIcons/arrow-left.svg';
import checkmark from '../../assets/buttonIcons/checkmark.svg';

function TableMenu() {
    const dispatch = useDispatch();
    const { headingsInput, timingsInput, daysInput, slotsInput, startTimeInput, endTimeInput, timingInputMethod } = useSelector(state => state.menuStatus);
    const [dayCount, setDayCount] = useState(0);

    function updateTableHandler() {
        dispatch(tableActions.setTimings(timingsInput));
        dispatch(tableActions.setNumberOfDays(daysInput));
        dispatch(tableActions.setHeadings(headingsInput));
        dispatch(tableActions.setSlots(slotsInput));
        dispatch(tableActions.setStartTime(startTimeInput));
        dispatch(tableActions.setEndTime(endTimeInput));
        dispatch(menuActions.setActiveMenu('none'));
    }

    function hideTableMenu() {
        dispatch(menuActions.setActiveMenu('none'));
    }

    return <aside className={styles['table-container']}>
        <div className={styles['title-bar']}>
            <h1 className={styles['menu-title']}>Table<br /> Customization</h1>
            <button onClick={hideTableMenu} className={styles['hide-button']}>
                <img src={arrowLeft} alt="hide Sidebar menu" />
            </button>
        </div>
        <DaysInput updateDaysInput={(newDaysInput) => {
            //whenever the number of days changes, it is reflected in the state
            console.log(newDaysInput);
            setDayCount(newDaysInput);
        }} />
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

        <div className={`${styles['form-control']} ${styles['update-button-container']}`}>
            <button className={styles['update-button']} onClick={updateTableHandler}>
                <img src={checkmark} alt='confirm table specifications' />
            </button>
        </div>

    </aside>


}

export default TableMenu;