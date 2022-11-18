import { useSelector, useDispatch } from "react-redux";

import { tableActions } from "../../store/tableSlice";

import styles from './TableMenu.module.css';

function AddTableButton() {
    const dispatch = useDispatch();


    const startTimeInput = useSelector((state) => state.menuStatus.startTimeInput);
    const endTimeInput = useSelector((state) => state.menuStatus.endTimeInput);
    const numberofSlots = useSelector((state) => state.menuStatus.slotsInput);
    const timingsInput = useSelector((state) => state.menuStatus.timingsInput);
    const headingsInput = useSelector((state) => state.menuStatus.headingsInput);
    const timingInputMethod = useSelector((state) => state.menuStatus.timingInputMethod);

    function addTableHandler() {
        dispatch(tableActions.addTable({
            headingInputs: headingsInput,
            startTime: startTimeInput,
            endTime: endTimeInput,
            numberOfSlots: numberofSlots,
            timingInputs: timingsInput,
            timingInputMethod: timingInputMethod
        }));
    }

    return <button className={styles['add-table-button']} onClick={addTableHandler}>
        Add Table
    </button>
}

export default AddTableButton;