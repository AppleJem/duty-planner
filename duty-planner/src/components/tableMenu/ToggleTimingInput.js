import { useSelector, useDispatch } from 'react-redux';

import styles from './TableMenu.module.css';
import classes from './ToggleTimingInput.module.css';
import { menuActions } from '../../store/menuSlice';

function ToggleTimingInput() {
    const dispatch = useDispatch();
    const timingInputMethod = useSelector(state=>state.menuStatus.timingInputMethod);

    function setTimingAuto () {
        dispatch(menuActions.setTimingInputMethod('auto'));
    }
    function setTimingManual() {
        dispatch(menuActions.setTimingInputMethod('manual'));
    }

    return <div className={`${styles['form-control']}`}>
        <legend>Shift Timing Input Method</legend>
        <div className={`${classes['toggle-container']}`} >
            <span onClick={setTimingAuto} className={`${classes['toggle-option']} ${timingInputMethod==='auto' && classes['active']}`}>Auto</span>
            <span onClick={setTimingManual} className={`${classes['toggle-option']} ${timingInputMethod==='manual' && classes['active']}`}>Manual</span>
        </div>
    </div>
}

export default ToggleTimingInput;