

function TimingsInput({updateTimingInputs, updateDaysInput}) {
    
    function updateTimingInputsHandler(event){
        updateTimingInputs(event.target.value);
    }

    function updateDaysInputHandler (event) {
        updateDaysInput(event.target.value)
    }

    return <div>
        <label htmlFor="timingsInput">Input timings in this format: "1800-2200, 2200-0200, 0200-0600,..."</label>
        <textarea onChange={updateTimingInputsHandler} id="timingsInput" type="text" value="1800-2200, 2200-0200, 0200-0600,0600-1000, 1000-1400, 1400-1800"/>
        <label>Input number of days</label>
        <input onChange={updateDaysInputHandler} type='number' step={1} min='0'></input>
    </div>
}

export default TimingsInput;