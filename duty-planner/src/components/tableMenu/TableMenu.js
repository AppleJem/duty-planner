
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tableActions } from '../../store/tableSlice';
import { menuActions } from '../../store/menuSlice';

import styles from "./TableMenu.module.css";
import TimingsInput from './TimingsInput';
import HeadingsInput from './HeadingsInput';
import DaysInput from './DaysInput';
import SlotsInput from './SlotsInput';
import arrowLeft from '../../assets/buttonIcons/arrow-left.svg'
import StartEndInput from './StartEndInput';
import SlotLengthInput from './SlotLengthInput';

function TableMenu() {
    const dispatch = useDispatch();
    const {headingsInput, timingsInput, daysInput, slotsInput, startTimeInput, endTimeInput, slotLengthInput } = useSelector(state=>state.menuStatus);
    const [dayCount, setDayCount] = useState(0);

    function updateTableHandler() {
        dispatch(tableActions.setTimings(timingsInput));
        dispatch(tableActions.setNumberOfDays(daysInput));
        dispatch(tableActions.setHeadings(headingsInput));
        dispatch(tableActions.setSlots(slotsInput));
        dispatch(tableActions.setStartTime(startTimeInput));
        dispatch(tableActions.setEndTime(endTimeInput));
        dispatch(tableActions.setSlotLength = (slotLengthInput))
        dispatch(menuActions.setActiveMenu('none'));
    }

    function hideTableMenu() {
        dispatch(menuActions.setActiveMenu('none'));
    }

    return <aside className={styles['table-container']}>
        <button onClick={hideTableMenu} className={styles['hide-button']}>
            <img src={arrowLeft} alt="hide Sidebar menu" />
        </button>
        <h1 className={styles['menu-title']}>Table Customization</h1>
        <HeadingsInput updateHeadingInputs={(newHeadingInputs) => {
            // setHeadingInputs(newHeadingInputs);
        }} />
        <TimingsInput updateTimingInputs={(newTimingInputs) => {
            //whenever the timings input changes, it is reflected in the state
            // setTimingInputs(newTimingInputs);
        }} />
        {/* <SlotsInput/> */}
        <DaysInput updateDaysInput={(newDaysInput) => {
            //whenever the number of days changes, it is reflected in the state
            console.log(newDaysInput);
            setDayCount(newDaysInput);
        }} />
        <StartEndInput/>
        <SlotsInput/>
        <SlotLengthInput/>
        <button className={styles['update-button']} onClick={updateTableHandler}>Update Table Specifications</button>

    </aside>


}

export default TableMenu;