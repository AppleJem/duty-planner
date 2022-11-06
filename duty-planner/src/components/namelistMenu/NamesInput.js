import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NamesInput.module.css';
import { menuActions } from '../../store/menuSlice';

function NamesInput(props) {
    const namesInputRef = useRef()
    const dispatch = useDispatch();
    const storedNamesInput = useSelector(state=>state.menuStatus.namesInput);

    function showNameList() {
        dispatch(menuActions.toggleNamelist());
        
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        props.updateNameListHandler(namesInputRef.current.value)
        dispatch(menuActions.storeNames(namesInputRef.current.value));
        showNameList();
    }

    return <form onSubmit={formSubmitHandler} className={styles['form-control']}>
        <label htmlFor='namesInput'>Input Duty Personnel Names</label>
        <textarea autoComplete="on" cols='30' rows='5' id='namesInput' ref={namesInputRef} type="text" placeholder="Alpha, Bravo, Charlie,..." defaultValue={storedNamesInput}></textarea>
        <button type="submit" className={styles['update-button']} >Update Name List</button>
    </form>
}

export default NamesInput;