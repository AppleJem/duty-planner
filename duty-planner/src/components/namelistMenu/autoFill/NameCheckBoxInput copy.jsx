
import styles from './CheckBoxInput.module.css';
import CheckBox from './CheckBox';

function NameCheckBoxInput(props) {
    const checkboxes = []

    function updateFinalNames() {
        props.updateFinalNames();
    }


    for (let i = 0; i < props.dataArr.length; i++) {
        checkboxes.push(
            <CheckBox onClick={() => {
                props.updateFinalNames(i, props.finalNames[i] !== undefined, props.dataArr[i])
            }} key={`element${i}_${props.dataArr[i].name}`} label={props.dataArr[i].name} />
        )
    }
    return <div>
        <p>Exclude Names</p>
        {checkboxes}
    </div>
}

export default NameCheckBoxInput;