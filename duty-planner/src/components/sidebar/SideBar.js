
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { nameActions } from '../../store/nameSlice';
import { tableActions } from '../../store/tableSlice';
import styles from "./SideBar.module.css";
import NamesInput from './NamesInput';
import TimingsInput from './TimingsInput';
import HeadingsInput from './HeadingsInput'

function SideBar() {
    const dispatch = useDispatch();
    const [timingInputs, setTimingInputs] = useState('');
    const [dayCount, setDayCount] = useState(0);
    const [headingInputs, setHeadingInputs] = useState('');
    const [nameList, setNameList] = useState([])
    let nameListArr = [];

    //On button click, update the list duty personnel names
    function updateNameListHandler(namesInput) {
        const parsedNames = namesInput.replace(/\s/g, '').split(',');
        nameListArr = []
        for (let i = 0; i < parsedNames.length; i++) {
            nameListArr.push(<p key={parsedNames[i] + i} onClick={() => { changeActiveNameHandler(parsedNames[i]) }} className={styles['name-cell']}>{parsedNames[i]}</p>)
        }
        setNameList(nameListArr);
        console.log('name list has been updated');
    }

    function changeActiveNameHandler(newActiveName) {
        //dispatching action to redux to update activeName
        dispatch(nameActions.setActiveName(newActiveName));
    }

    function updateTableHandler() {
        dispatch(tableActions.setTimings(timingInputs));
        dispatch(tableActions.setNumberOfDays(dayCount));
        dispatch(tableActions.setHeadings(headingInputs))
    }



    return <aside>
        <NamesInput updateNameListHandler={updateNameListHandler} />
        <TimingsInput updateTimingInputs={(newTimingInputs) => {
            //whenever the timings input changes, it is reflected in the state
            setTimingInputs(newTimingInputs);
        }} updateDaysInput={(newDaysInput) => {
            //whenever the number of days changes, it is reflected in the state
            setDayCount(newDaysInput);
        }} />
        <HeadingsInput updateHeadingInputs={(newHeadingInputs) => {
            setHeadingInputs(newHeadingInputs);
        }} />
        <button onClick={updateTableHandler}>Update Table Specifications</button>
        <div className={styles['name-list']}>
            {nameList}
        </div>

    </aside>
}

export default SideBar;