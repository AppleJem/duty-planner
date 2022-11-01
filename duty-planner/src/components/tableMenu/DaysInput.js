import { useState, useRef } from 'react';

import styles from './TableMenu.module.css'

function DaysInput(props) {

    const [dayState, setDayState] = useState(0)
    const [touched, setTouched] = useState(false);
    const daysRef = useRef()

    function clearInput() {
        if (!touched) {
            setTouched(true);
        }
        if (dayState === 0) {
            setDayState('');
        }
    }

    function updateDaysInputHandler(event) {
        setDayState(+event.target.value);
        props.updateDaysInput(+event.target.value)
    }

    function buttonHandler(isIncrease) {
        if (isIncrease) {
            if (dayState < 14) {
                setDayState((prev) => {
                    return prev + 1
                })
            }
        } else {
            if (dayState > 0) {
                setDayState((prev) => {
                    return prev - 1
                })
            }
        }
        props.updateDaysInput(dayState);

    }

    function checkValid() {
        console.log(typeof dayState);
        if (dayState % 1 !== 0) {
            console.log('not whole number');
            setDayState((prev) => {
                return (Math.floor(prev))
            })
        }
        if (dayState < 0) {
            console.log('negative number');
            setDayState((prev) => {
                return (prev * (-1))
            })
        }
        if (dayState > 14) {
            console.log('too large');
            setDayState(14);
        }
        props.updateDaysInput(+daysRef.current.value);
    }

    return <div className={`${styles['form-control']} ${styles['daycount-input']}`}>
        <label>Number of days</label>
        <button onClick={() => buttonHandler(false)}>-</button>
        <input readOnly className={styles['days-input-box']} ref={daysRef} onChange={updateDaysInputHandler} type='number' step={1} min='0' value={dayState}></input>
        <button onClick={() => buttonHandler(true)}>+</button>
    </div>
}

export default DaysInput;