import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './NamesInput.module.css';
import { menuActions } from '../../store/menuSlice';

function NamesInput(props) {
    const namesInputRef = useRef()
    const dispatch = useDispatch();

    function showNameList() {
        dispatch(menuActions.toggleNamelist())
    }

    return <div className={styles['form-control']}>
        <label htmlFor='namesInput'>Input Duty Personnel Names</label>
        <textarea cols='30' rows='5' id='namesInput' ref={namesInputRef} type="text" placeholder="Alpha, Bravo, Charlie,..."></textarea>
        <button className={styles['update-button']} onClick={() => {
            props.updateNameListHandler(namesInputRef.current.value)
            showNameList();
        }} >Update Name List</button>
    </div>
}

export default NamesInput;