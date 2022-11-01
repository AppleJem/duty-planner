import styles from './TableMenu.module.css';

function HeadingsInput(props) {

    function updateHeadingInputsHandler(event) {
        props.updateHeadingInputs(event.target.value);
    }


    return <div className={styles['form-control']}>
        <label htmlFor='headingsInput'>Input Headings</label>
        <textarea rows='5' id='headingsInput' onChange={updateHeadingInputsHandler} type='text' placeholder="Sentry, Desk, Service,..." ></textarea>
    </div>
}

export default HeadingsInput;