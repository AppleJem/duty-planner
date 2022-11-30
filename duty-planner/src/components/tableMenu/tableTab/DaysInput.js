import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';

import styles from './TableTab.module.css'
import { menuActions } from '../../store/menuSlice';


function DaysInput() {

    const dispatch = useDispatch();
    const storedDays = useSelector(state => state.menuStatus.daysInput)
    const daysRef = useRef()

    function buttonHandler(isIncrease) {
        if (isIncrease) {
            if (storedDays < 14) {
                dispatch(menuActions.storeDays(storedDays + 1))
            }
        } else {
            if (storedDays > 1) {
                dispatch(menuActions.storeDays(storedDays - 1))
            }
        }
    }

    return <div className={`${styles['form-control']} ${styles['daycount-input']}`}>
        <label>Number of days</label>
        <button onClick={() => buttonHandler(false)}>-</button>
        <input readOnly className={styles['days-input-box']} ref={daysRef} type='number' step={1} min='0' value={storedDays}></input>
        <button onClick={() => buttonHandler(true)}>+</button>
    </div>
}

export default DaysInput;