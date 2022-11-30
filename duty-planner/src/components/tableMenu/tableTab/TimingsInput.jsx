import { useDispatch, useSelector } from 'react-redux';

import styles from './TableTab.module.css'
import { menuActions } from '../../../store/menuSlice';

function TimingsInput({ updateTimingInputs}) {
    const dispatch = useDispatch();
    const storedTimingsInput = useSelector(state=>state.menuStatus.timingsInput)

    function updateTimingInputsHandler(event) {
        dispatch(menuActions.storeTimings(event.target.value));
    }


    return <div className={styles['form-control']}>
        <label htmlFor="timingsInput">Input Timing Slots</label>
        <textarea rows='5' autoComplete='on' onChange={updateTimingInputsHandler} id="timingsInput" type="text" placeholder='0600-1000, 1000-1200, 1200-1800,...' value={storedTimingsInput}></textarea>
    </div>
}

export default TimingsInput;