import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';

import { nameActions } from '../../store/nameSlice';
import styles from "./Namelist.module.css";

function NameList() {
    const coloredNames = useSelector(state => state.namesConfig.names);
    const dispatch = useDispatch();


    function changeActiveNameHandler(newActiveName) {
        //dispatching action to redux to update activeName
        dispatch(nameActions.setActiveName(newActiveName));
    }

    const nameListArr = []
    nameListArr.push(
        <p key={uuid()}
            onClick={() => { changeActiveNameHandler({ name: '', color: "transparent" }) }}
            className={styles['remover-cell']}
            style={{ backgroundColor: "transparent" }}>

        </p >)
    if (!(coloredNames.length === 1 && coloredNames[0].name === '')) {
        for (let i = 0; i < coloredNames.length; i++) {
            nameListArr.push(
                <p key={coloredNames[i]['name'] + uuid()}
                    onClick={() => { changeActiveNameHandler({ name: coloredNames[i]['name'], color: coloredNames[i]['color'] }) }}
                    className={styles['name-cell']}
                    style={{ backgroundColor: coloredNames[i]['color'] }}>
                    {coloredNames[i]['name']}
                </p>
            )
        }
    }

    return <div className={styles['name-list']}>
        {nameListArr}
    </div>
}

export default NameList;