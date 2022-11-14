import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NamesInput.module.css';
import { menuActions } from '../../store/menuSlice';
import { nameActions } from '../../store/nameSlice';

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
        console.log(parsedNames);
        let hue = 0;
        console.log(parsedNames);
        const coloredNames = parsedNames.map((name) => {
            (hue < 60 && hue < 180) ? hue += 47 : hue += 39;
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
            {/* <img style={{fill:'red'}} src={checkmark} /> */}
            <svg className={styles['update-button-icon']} width="30" height="33" viewBox="0 0 45 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.01086 17.9421L16.1557 29.5931L41.9668 3.42574" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </form>
}

export default NamesInput;