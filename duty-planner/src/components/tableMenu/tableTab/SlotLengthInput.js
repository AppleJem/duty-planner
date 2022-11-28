import { useSelector, useDispatch } from 'react-redux';

import { menuActions } from '../../store/menuSlice';

function SlotLengthInput() {
    const dispatch = useDispatch();
    const storedSlotLengthInput = useSelector(state => state.menuStatus.slotLengthInput)

    function slotHoursHandler(event) {
        //parse input to number, make sure it's a whole number, positive, less than 12;
        let hourInput = Number(event.target.value);
        hourInput = Math.abs(hourInput);
        hourInput = Math.round(hourInput);
        if (hourInput > 12) {
            hourInput = 12;
        }
    
        dispatch(menuActions.storeSlotLengthHours(hourInput));
    }

    function slotMinutesHandler(event) {
        //parse input to number, make sure it's a whole number, positive, less than 60;
        let minuteInput = Number(event.target.value);
        minuteInput = Math.abs(minuteInput);
        minuteInput = Math.round(minuteInput);
        if (minuteInput > 60) {
            minuteInput = 60;
        }
        dispatch(menuActions.storeSlotLengthMinutes(minuteInput));
    }

    return <div>
        <label htmlFor="slotHours">Length of Slots</label>
        <input onChange={slotHoursHandler} id="slotHours" type="number" step="1" min="0" max="24" value={storedSlotLengthInput.hours} />
        <label htmlFor="slotHours">hrs</label>
        <input onChange={slotMinutesHandler} id="slotMinutes" type="number" step="1" min="0" max="60" value={storedSlotLengthInput.minutes} />
        <label htmlFor="slotMinutes">mins</label>
    </div>
}

export default SlotLengthInput;