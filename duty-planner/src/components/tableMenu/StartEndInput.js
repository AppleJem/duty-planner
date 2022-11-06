import { useDispatch, useSelector } from "react-redux";

import { menuActions } from "../../store/menuSlice";

function StartEndInput () {
    const dispatch = useDispatch();
    const {startTimeInput, endTimeInput} = useSelector(state=>state.menuStatus);
    
    function updateStartTime(event) {
        console.log(event.target.value);
        dispatch(menuActions.storeStartTime(event.target.value));
    }
    
    function updateEndTime(event) {
        console.log(event.target.value);
        dispatch(menuActions.storeEndTime(event.target.value));

    }
    return <div>
        <input onChange={updateStartTime} type='time' value={startTimeInput}/>
        <input onChange={updateEndTime} type='time' value={endTimeInput}/>

    </div>
}

export default StartEndInput