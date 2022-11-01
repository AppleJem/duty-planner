import styles from './TableMenu.module.css'

function TimingsInput({ updateTimingInputs}) {

    function updateTimingInputsHandler(event) {
        updateTimingInputs(event.target.value);
    }


    return <div className={styles['form-control']}>
        <label htmlFor="timingsInput">Input Timing Slots</label>
        <textarea rows='5' autoComplete='on' onChange={updateTimingInputsHandler} id="timingsInput" type="text" placeholder='0600-1000, 1000-1200, 1200-1800,...'/>
    </div>
}

export default TimingsInput;