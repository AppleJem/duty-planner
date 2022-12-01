import { useState } from 'react';

import styles from './CheckBoxInput.module.css';

function CheckBox(props) {
    const [active, setActive] = useState(false)

    function clickHandler () {
        setActive((prev)=> {
            return !prev;
        });
        props.onClick();
    }
    return <div onClick={clickHandler} className={`${styles['checkbox-container']}`}>
        <span className={`${styles['checkbox']}  ${active ? styles.active: ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill="currentColor" viewBox="3 3 10 10">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </span>
        <span className={`${styles['checkbox-label']}`}>{props.label}</span>
    </div>
}

export default CheckBox;