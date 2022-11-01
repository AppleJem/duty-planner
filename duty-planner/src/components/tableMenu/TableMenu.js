
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tableActions } from '../../store/tableSlice';
import styles from "./TableMenu.module.css";
import TimingsInput from './TimingsInput';
import HeadingsInput from './HeadingsInput';
import DaysInput from './DaysInput';
import arrowLeft from '../../assets/buttonIcons/arrow-left.svg'
import { menuActions } from '../../store/menuSlice';

function TableMenu() {
    const dispatch = useDispatch();
    const menuStatus = useSelector(state => state.menuStatus);
    const [timingInputs, setTimingInputs] = useState('');
    const [dayCount, setDayCount] = useState(0);
    const [headingInputs, setHeadingInputs] = useState('');

    function updateTableHandler() {
        dispatch(tableActions.setTimings(timingInputs));
        dispatch(tableActions.setNumberOfDays(dayCount));
        dispatch(tableActions.setHeadings(headingInputs))
    }

    function hideTableMenu() {
        dispatch(menuActions.setActiveMenu('none'));
    }

    return <div className={styles['grid-container']}>
        <aside className={styles['main-container']}>
            <button onClick={hideTableMenu} className={styles['hide-button']}>
                <img src={arrowLeft} alt="hide Sidebar menu" />
            </button>
            <h1 className={styles['menu-title']}>Table Customization</h1>
            <HeadingsInput updateHeadingInputs={(newHeadingInputs) => {
                setHeadingInputs(newHeadingInputs);
            }} />
            <TimingsInput updateTimingInputs={(newTimingInputs) => {
                //whenever the timings input changes, it is reflected in the state
                setTimingInputs(newTimingInputs);
            }} />
            <DaysInput updateDaysInput={(newDaysInput) => {
                //whenever the number of days changes, it is reflected in the state
                console.log(newDaysInput);
                setDayCount(newDaysInput);
            }} />
            <button className={styles['update-button']} onClick={updateTableHandler}>Update Table Specifications</button>

        </aside>
    </div>


}

export default TableMenu;