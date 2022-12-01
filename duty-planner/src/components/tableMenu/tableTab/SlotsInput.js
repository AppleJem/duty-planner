import { useDispatch, useSelector } from 'react-redux';

import styles from './TableTab.module.css'
import { menuActions } from '../../../store/menuSlice';


function SlotsInput() {
    const storedSlotsCount = useSelector(state=>state.menuStatus.slotsInput)
    const dispatch = useDispatch();

    function slotsNumberHandler (event) {
        let slotNumber = Number(event.target.value);
        slotNumber = Math.abs(slotNumber);
        slotNumber = Math.round(slotNumber);
        if (slotNumber > 24) {
            slotNumber = 24;
        }
        dispatch(menuActions.storeSlots(slotNumber))
    }

    return <div className={`${styles['form-control']} ${styles['slotcount-input']}`}>
        <label>Number of Slots in the Day</label>
        <input onChange={slotsNumberHandler} type='number' step={1} min='0' max='24' value={storedSlotsCount}></input>
    </div>
}

export default SlotsInput;