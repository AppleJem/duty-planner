import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';

import styles from './TableMenu.module.css'
import { menuActions } from '../../store/menuSlice';


function SlotsInput() {
    const storedSlotsCount = useSelector(state=>state.menuStatus.slotsInput)
    console.log(storedSlotsCount);
    const dispatch = useDispatch();

    function buttonHandler(isIncrease) {
        if (isIncrease) {
            if (storedSlotsCount < 14) {
                dispatch(menuActions.storeSlots(storedSlotsCount + 1))
            }
        } else {
            if (storedSlotsCount > 1) {
                dispatch(menuActions.storeSlots(storedSlotsCount - 1))
            }
        }
    }

    return <div className={`${styles['form-control']} ${styles['daycount-input']}`}>
        <label>Number of Slots in the Day</label>
        <button onClick={() => buttonHandler(false)}>-</button>
        <input readOnly className={styles['days-input-box']} type='number' step={1} min='0' value={storedSlotsCount}></input>
        <button onClick={() => buttonHandler(true)}>+</button>
    </div>
}

export default SlotsInput;