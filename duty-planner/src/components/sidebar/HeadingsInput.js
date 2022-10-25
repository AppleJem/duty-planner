import { useRef } from 'react';

function HeadingsInput(props) {

    function updateHeadingInputsHandler(event) {
        props.updateHeadingInputs(event.target.value);
    }


    return <div>
        <label htmlFor='headingsInput'>Input headings in this format: "Sentry, Service, Desk,...</label>
        <textarea id='headingsInput' onChange={updateHeadingInputsHandler} type='text' placeholder="S1, S2, S3,..."></textarea>
    </div>
}

export default HeadingsInput;