import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NamesInput.module.css';
import { menuActions } from '../../store/menuSlice';
import { nameActions } from '../../store/nameSlice';
import checkmark from '../../assets/buttonIcons/checkmark.svg';

function NamesInput() {
    const namesInputRef = useRef();
    const dispatch = useDispatch();
    const storedNamesInput = useSelector(state => state.menuStatus.namesInput);

    function namesChangeHandler(event) {
        dispatch(menuActions.storeNames(event.target.value))
    }

    function showNameList() {
        dispatch(menuActions.toggleNamelist());
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        const parsedNames = storedNamesInput.replace(/\s/g, '').split(',');
        let hue = 0;
        console.log(parsedNames);
        const coloredNames = parsedNames.map((name) => {
            (hue<60 && hue<180) ? hue+=47 : hue +=39;
            let factor = Math.floor(hue / 360)
            let sat = factor <= 4 ? 60 + factor * 10 : 100;
            let light = factor <= 3 ? 20 - factor * 5 : 5;
            return {
                name,
                color: `hsl(${hue}deg, ${sat}%, ${light}%)`
            }
        })
        console.log(coloredNames)
        dispatch(nameActions.setNames(coloredNames))
        showNameList();
    }



    return <form onSubmit={formSubmitHandler} className={styles['form-control']}>
        <label htmlFor='namesInput'>Input Duty Personnel Names</label>
        <textarea onChange={namesChangeHandler} autoComplete="on" cols='35' rows='5' id='namesInput' type="text" placeholder="Alpha, Bravo, Charlie,..." value={storedNamesInput}></textarea>
        <button type="submit" className={styles['update-button']} >
            <img src={checkmark} />
        </button>
    </form>
}

export default NamesInput;