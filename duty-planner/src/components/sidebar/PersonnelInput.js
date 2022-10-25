import { useRef } from 'react';

function PersonnelInput() {
    const headingsInputRef = useRef();

    function updateHeadingsHandler() {
        const headingsInput = headingsInputRef.current.value;
        const headings = headingsInput.replace(/\s/g, '').split(',');
        console.log(headingsInput);
    }


    return <div>
        <label htmlFor='headingsInput'>Input headings in this format: "Sentry, Service, Desk,...</label>
        <input id='headingsInput' ref={headingsInputRef} type='text' placeholder="S1, S2, S3,..."></input>
        <button onClick={updateHeadingsHandler}>Update headings</button>
    </div>
}

export default PersonnelInput;