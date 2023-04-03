import { useDispatch, useSelector } from "react-redux";

import { menuActions } from "../../../store/menuSlice";
import styles from './TableTab.module.css';
import classes from './StartEndInput.module.css';

function StartEndInput() {
    const dispatch = useDispatch();
    const { startTimeInput, endTimeInput } = useSelector(state => state.menuStatus);

    function updateStartTime(event) {
        dispatch(menuActions.storeStartTime(event.target.value));
    }

    function updateEndTime(event) {
        dispatch(menuActions.storeEndTime(event.target.value));
        console.log(event.target.value);
        console.log(endTimeInput);
    }
    return <div className={`${styles['form-control']} + ${classes['outer-container']}`}>
        <div className={classes['timing-container']}>
            <label htmlFor="startTime">Start Time</label>
            <input id="startTime" onChange={updateStartTime} type='time' value={startTimeInput} />
        </div>
        <div className={classes['timing-container']}>
            <label htmlFor="endTime">End Time</label>
            <input id="endTime" onChange={updateEndTime} type='time' value={endTimeInput} />
        </div>
    </div>
}

export default StartEndInput