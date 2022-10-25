import { useRef } from 'react';

import styles from './NamesInput.module.css';

function NamesInput({ updateNameListHandler }) {
    const namesInputRef = useRef()

    return <div>
        <div>
            <label htmlFor='namesInput'>Input names in this format: "Alpha, Bravo, Charlie,..."</label>
            <input id='namesInput' ref={namesInputRef} type="text" placeholder="Alpha, Bravo, Charlie,..."></input>
            <button onClick={() => { updateNameListHandler(namesInputRef.current.value) }} >Update Name List</button>
        </div>
        <div>
        
        </div>

    </div>
}

export default NamesInput;