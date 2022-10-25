
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { nameActions } from '../../store/nameSlice';
import styles from "./SideBar.module.css";
import NamesInput from './NamesInput';
import TimingsInput from './TimingsInput';
import PersonnelInput from './PersonnelInput';

function SideBar() {
    const dispatch = useDispatch();
    const [nameInputs, setNameInputs] = useState('')
    const [nameList, setNameList] = useState([])
    let nameListArr = [];



    function updateNameListHandler (namesInput) {
        const parsedNames = namesInput.replace(/\s/g, '').split(',');
        nameListArr = []
        for (let i = 0; i < parsedNames.length; i++) {
            nameListArr.push(<p onClick={()=>{changeActiveNameHandler(parsedNames[i])}} className={styles['name-cell']}>{parsedNames[i]}</p>)
        }
        setNameList(nameListArr);
        console.log('name list has been updated');
    }

    function changeActiveNameHandler(newActiveName) {
        //dispatching action to redux to update activeName
        dispatch(nameActions.setActiveName(newActiveName));
    }



    return <aside>
        <NamesInput updateNameListHandler={updateNameListHandler}/>
        <TimingsInput/>
        <PersonnelInput/>
        <div className={styles['name-list']}>
            {nameList}
        </div>

    </aside>
}

export default SideBar;