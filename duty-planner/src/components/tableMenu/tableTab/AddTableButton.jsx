import { useSelector, useDispatch } from "react-redux";

import { tableActions } from "../../../store/tableSlice";
import { backupActions } from '../../../store/backupSlice';

import styles from '../TableMenu.module.css';

function AddTableButton() {
    const dispatch = useDispatch();

    const tableCount = useSelector(state => state.tableSpecs.tableCount);


    const startTimeInput = useSelector((state) => state.menuStatus.startTimeInput);
    const endTimeInput = useSelector((state) => state.menuStatus.endTimeInput);
    const numberOfSlots = useSelector((state) => state.menuStatus.slotsInput);
    const timingsInput = useSelector((state) => state.menuStatus.timingsInput);
    const headingsInput = useSelector((state) => state.menuStatus.headingsInput);
    const timingInputMethod = useSelector((state) => state.menuStatus.timingInputMethod);

    function generateHeadings(headingInputs) {
        const headings = headingInputs.replace(/\s/g, '').split(',');
        return headings;
    }

    function getTimeString(dateObj) { //function to get the formated timeString from JS date object
        return dateObj.toLocaleTimeString('en-US', { timeStyle: 'short', hourCycle: 'h23' })
    }

    function generateTimings(inputs, inputType) {
        let slotTimings = [];
        if (inputType === 'auto') {
            //Here we are using the number of slots and start/end time to generate the time slots for the table
            let startDate = new Date(2023, 0, 5, inputs.startTime.slice(0, 2), inputs.startTime.slice(3), 0);
            let endDate = null;
            if (inputs.startTime === inputs.endTime) {
                endDate = new Date(2023, 0, 5, inputs.endTime.slice(0, 2), inputs.endTime.slice(3), 0)
            }
            let slotLength = 0;
            if (startDate.valueOf() === endDate.valueOf()) {
                slotLength = (24 * 60 * 60 * 1000) / inputs.numberOfSlots
            } else {
                slotLength = Math.abs(startDate - endDate) / inputs.numberOfSlots;
            }

            for (let i = 0; i < inputs.numberOfSlots; i++) {
                let timeSlotString = getTimeString(startDate);
                startDate.setTime(startDate.getTime() + slotLength);
                timeSlotString = timeSlotString + "-" + getTimeString(startDate);
                timeSlotString = timeSlotString.replace(/:/g, '');
                slotTimings.push(timeSlotString);
            }
        } else {
            slotTimings = inputs.timingInputs.replace(/\s/g, '').split(',');
        }

        return slotTimings;
    }

    function addTableHandler() {
        let headingsArr = generateHeadings(headingsInput);
        let timingsArr = generateTimings({
            startTime: startTimeInput,
            endTime: endTimeInput,
            numberOfSlots: numberOfSlots,
            timingInputs: timingsInput,
        }, timingInputMethod);

        dispatch(tableActions.addTable({
            id: `table${tableCount}`,
            headingsArr,
            timingsArr,
        }));

        let newTable = {};
        for (let i = 0; i < timingsArr.length; i++) {
            for (let j = 0; j < headingsArr.length; j++) {
                let cellId = `table${tableCount}_${i}_${j}`;
                newTable[cellId] = {
                    name: '',
                    color: '',
                    heading: headingsArr[j],
                    tableId: `table${tableCount}`
                }
            }
        }
        dispatch(backupActions.updateCurrentSnapshot({
            type: 'newTable',
            newTable: newTable,
        }));
    }

    return <button className={styles['add-table-button']} onClick={addTableHandler}>
        Add Table
    </button>
}

export default AddTableButton;