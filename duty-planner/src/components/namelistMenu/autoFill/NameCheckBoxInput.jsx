
import styles from './CheckBoxInput.module.css';
import classes from './AutofillMenu.module.css';
import CheckBox from './CheckBox';

function NameCheckBoxInput(props) {
    const checkboxes = []

    function updateFinalNames() {
        props.updateFinalNames();
    }


    for (let person in props.allNames) {
        checkboxes.push(
            <CheckBox onClick={() => {
                props.updateFinalNames(person, props.allNames[person]);
            }} key={`${person}_${props.allNames[person].name}`} label={props.allNames[person].name} />
        )
    }
    return <div className={classes["input-container"]}>
        <p className={styles["checkboxes-title"]}>Exclude Names</p>
        <div className={styles["checkboxes-container"]}>
            {checkboxes}
        </div>
    </div>
}

export default NameCheckBoxInput;