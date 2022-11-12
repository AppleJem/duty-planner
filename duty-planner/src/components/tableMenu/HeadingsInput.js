import { useDispatch, useSelector } from 'react-redux';

import styles from './TableMenu.module.css';
import { menuActions } from '../../store/menuSlice';

function HeadingsInput(props) {
    const dispatch = useDispatch();
    const storedHeadingsInput = useSelector(state=>state.menuStatus.headingsInput)

    function updateHeadingInputsHandler(event) {
        dispatch(menuActions.storeHeadings(event.target.value));
    }


    return <div className={styles['form-control']}>
        <label htmlFor='headingsInput'>Input Headings</label>
        <textarea id='headingsInput' onChange={updateHeadingInputsHandler} type='text' placeholder="Sentry, Desk, Service,..." value={storedHeadingsInput}></textarea>
    </div>
}

export default HeadingsInput;