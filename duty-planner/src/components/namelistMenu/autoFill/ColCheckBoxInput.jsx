
import styles from './CheckBoxInput.module.css';
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
    return <div>
        <p>Exclude Headings</p>
        {checkboxes}
    </div>
}

export default ColCheckBoxInput;