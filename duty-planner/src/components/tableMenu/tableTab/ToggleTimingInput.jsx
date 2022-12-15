import { useSelector, useDispatch } from 'react-redux';

import styles from './TableTab.module.css';
import { menuActions } from '../../../store/menuSlice';
import ToggleButton from '../../ui/ToggleButton';

function ToggleTimingInput() {
    const dispatch = useDispatch();
    const timingInputMethod = useSelector(state => state.menuStatus.timingInputMethod);

    function toggleTimingInput() {
        dispatch(menuActions.toggleTimingInputMethod());
    }
    function setTimingManual() {
        dispatch(menuActions.setTimingInputMethod('manual'));
    }

    function preventPropagation(event) {
        event.stopPropagation();
    }

    return <div className={`${styles['form-control']}`}>
        <legend >Manual Timing Input</legend>
        {/* <div className={`${classes['toggle-container']}`} >
            <span onClick={setTimingAuto} className={`${classes['toggle-option']} ${timingInputMethod==='auto' && classes['active']}`}>Auto</span>
            <span onClick={setTimingManual} className={`${classes['toggle-option']} ${timingInputMethod==='manual' && classes['active']}`}>Manual</span>
        </div> */}
        {/* <div onClick={toggleTimingInput} className={`${classes['toggle-container']} ${timingInputMethod === 'manual' && classes['active']}`}>
            <div className={`${classes['toggle-button']} ${timingInputMethod === 'manual' && classes['active']}`}></div>
        </div> */}
        <ToggleButton className='toggle-button' onTransitionEnd={preventPropagation} toggleFunction={toggleTimingInput} toggleState={timingInputMethod === 'manual'}/>
    </div>
}

export default ToggleTimingInput;