
import styles from './CheckBoxInput.module.css';
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
    return <div>
        <p>Exclude Names</p>
        {checkboxes}
    </div>
}

export default NameCheckBoxInput;