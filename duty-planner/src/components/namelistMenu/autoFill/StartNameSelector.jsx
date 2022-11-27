import { useSelector } from "react-redux"

import styles from './StartNameSelector.module.css';

function StartNameSelector(props) {
    const optionsArr = Object.keys(props.finalNames).map(nameIndex => {
        
        return <option key={`${nameIndex}_${props.finalNames[nameIndex]}`} value={nameIndex}>
            {props.finalNames[nameIndex].name}
        </option>
    })

    function updateStartNameCounter(event) {
        props.updateStartNameCounter(event.target.value);
    }

    return <div>
        Start with name
        <select onChange={updateStartNameCounter} name="startName">
            {optionsArr}
        </select>
    </div>
}

export default StartNameSelector;