import { useRef } from 'react'

function TimingsInput() {
    const timingsInputRef = useRef();
    function timingsInputChangeHandler() {
        const timings = timingsInputRef.current.value.replace(/\s/g, '').split(',');
        const days = 3;
    }

    return <div>
        <label htmlFor="timingsInput">Input timings in this format: 1800-2200, 2200-0200, 0200-0600,..."</label>
        <input ref={timingsInputRef} id="timingsInput" type="text"></input>
    </div>
}

export default TimingsInput;