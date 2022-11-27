
import styles from './CheckBoxInput.module.css';
import classes from './AutofillMenu.module.css';
import CheckBox from './CheckBox';

function ColCheckBoxInput(props) {
    const checkboxes = []


    for (let heading in props.allHeadings) {
        checkboxes.push(
            <CheckBox onClick={() => {
                props.updateFinalHeadings(heading);
            }} key={`${heading}`} label={heading} />
        )
    }
    return <div className={classes["input-container"]}>
        <p className={styles["checkboxes-title"]}>Exclude Headings</p>
        <div className={styles["checkboxes-container"]}>
            {checkboxes}
        </div>
    </div>
}

export default ColCheckBoxInput;