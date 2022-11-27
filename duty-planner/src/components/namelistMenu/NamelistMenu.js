
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { menuActions } from '../../store/menuSlice';
import styles from "./NamelistMenu.module.css";
import NamesInput from './NamesInput';
import NameList from './Namelist';
import ToggleButton from '../ui/ToggleButton';
import AutofillMenu from './autoFill/AutofillMenu';

function NamelistMenu() {
    const dispatch = useDispatch();
    const subMenuShowing = useSelector(state => state.menuStatus.subMenuShowing);


    function changeMenu(menu) {
        dispatch(menuActions.setSubMenu(menu));
    }


    return <div className={styles['outer-container']}>
        <section className={styles['name-menu']}>
            <div className={styles['namelist-toggle']}>
                <button className={`${subMenuShowing==="nameInput" && styles.active} ${styles.button}`} onClick={() => changeMenu('nameInput')}>Edit</button>
                <button className={`${subMenuShowing==="namelist" && styles.active} ${styles.button}`} onClick={() => changeMenu('namelist')}>Name<br/>list</button>
                <button className={`${subMenuShowing==="autofill" && styles.active} ${styles.button}`} onClick={() => changeMenu('autofill')}>Auto<br/>fill</button>
            </div>
            {subMenuShowing === "namelist" && <NameList />}
            {subMenuShowing === "nameInput" && <NamesInput />}
            {subMenuShowing === "autofill" && <AutofillMenu />}
        </section>
    </div>

}

export default NamelistMenu;