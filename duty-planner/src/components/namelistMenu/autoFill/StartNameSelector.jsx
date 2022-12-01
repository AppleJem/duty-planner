import styles from './StartNameSelector.module.css';
import classes from './AutofillMenu.module.css';

function StartNameSelector(props) {
    const optionsArr = Object.keys(props.finalNames).map(nameIndex => {
        
        return <option key={`${nameIndex}_${props.finalNames[nameIndex]}`} value={nameIndex}>
            {props.finalNames[nameIndex].name}
        </option>
    })

    function updateStartNameCounter(event) {
        props.updateStartNameCounter(event.target.value);
    }

    return <div className={classes['input-container']}>
        <label htmlFor="startNameSelect" className={styles['select-title']}>Start with name</label>
        <select id="startNameSelect" className={styles['select']} onChange={updateStartNameCounter} name="startName">
            {optionsArr}
        </select>
    </div>
}

export default StartNameSelector;