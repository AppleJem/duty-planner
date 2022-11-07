import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NamesInput.module.css';
import { menuActions } from '../../store/menuSlice';
import { tableActions } from '../../store/tableSlice';
import { nameActions } from '../../store/nameSlice';

function NamesInput() {
    const namesInputRef = useRef();
    const dispatch = useDispatch();
    const storedNamesInput = useSelector(state=>state.menuStatus.namesInput);

    function namesChangeHandler (event) {
        dispatch(menuActions.storeNames(event.target.value))
    }

    function showNameList() {
        dispatch(menuActions.toggleNamelist());
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        dispatch(nameActions.setNames(storedNamesInput))
        showNameList();
    }



    return <form onSubmit={formSubmitHandler} className={styles['form-control']}>
        <label htmlFor='namesInput'>Input Duty Personnel Names</label>
        <textarea onChange={namesChangeHandler} autoComplete="on" cols='30' rows='5' id='namesInput' type="text" placeholder="Alpha, Bravo, Charlie,..." value={storedNamesInput}></textarea>
        <button type="submit" className={styles['update-button']} >Update Name List</button>
    </form>
}

export default NamesInput;