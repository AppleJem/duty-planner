
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nameActions } from '../../store/nameSlice';
import { menuActions } from '../../store/menuSlice';
import styles from "./NamelistMenu.module.css";
import NamesInput from './NamesInput';

function NamelistMenu() {
    const dispatch = useDispatch();
    const menuStatus = useSelector(state => state.menuStatus)
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

    console.log(nameList.length);

    function changeActiveNameHandler(newActiveName) {
        //dispatching action to redux to update activeName
        dispatch(nameActions.setActiveName(newActiveName));
    }

    function toggleNameList() {
        dispatch(menuActions.toggleNamelist());
    }
    console.log(menuStatus.showNamelist)
    return <div className={styles['outer-container']}>
        <section className={styles['name-menu']}>
            <button disabled={nameList.length===0 ? true:false} onClick={toggleNameList} className={styles['toggle-button']}>Toggle</button>
            {menuStatus.showNamelist && <div className={styles['name-list']}>
                {nameList}
            </div>}
            {!menuStatus.showNamelist && <NamesInput updateNameListHandler={updateNameListHandler} />}



        </section>
    </div>

}

export default NamelistMenu;