
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tableActions } from '../../store/tableSlice';
import { menuActions } from '../../store/menuSlice';

import styles from "./TableMenu.module.css";
import TimingsInput from './TimingsInput';
import HeadingsInput from './HeadingsInput';
import SlotsInput from './SlotsInput';
import StartEndInput from './StartEndInput';
import ToggleTimingInput from './ToggleTimingInput';

import AddTableButton from './AddTableButton';

function TableMenu() {
    const dispatch = useDispatch();
    const { headingsInput, timingsInput, daysInput, slotsInput, startTimeInput, endTimeInput, timingInputMethod } = useSelector(state => state.menuStatus);
    const [tableClosing, setTableClosing] = useState(false);

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
        setTableClosing(true);
    }

    function closeTableMenu() {
        dispatch(menuActions.setActiveMenu('none'));
    }

    return <aside onTransitionEnd={closeTableMenu} className={`${styles['table-container']} ${tableClosing && styles['closing']}`}>
        <div className={styles['title-bar']}>
            <h1 className={styles['menu-title']}>Table<br /> Customization</h1>
            <button onClick={hideTableMenu} className={`${styles['hide-button']}`}>
                {/* <img src={arrowLeft} alt="hide Sidebar menu" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                </svg>
            </button>
        </div>
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

        <AddTableButton />

    </aside>




}

export default TableMenu;