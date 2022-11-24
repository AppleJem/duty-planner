
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
    const menuShowing = useSelector(state => state.menuStatus.menuShowing);


    function changeMenu(menu) {
        dispatch(menuActions.setMenuShowing(menu));
    }


    return <div className={styles['outer-container']}>
        <section className={styles['name-menu']}>
            <div className={styles['namelist-toggle']}>
                <button className={`${menuShowing==="nameInput" && styles.active} ${styles.button}`} onClick={() => changeMenu('nameInput')}>Edit</button>
                <button className={`${menuShowing==="namelist" && styles.active} ${styles.button}`} onClick={() => changeMenu('namelist')}>Name<br/>list</button>
                <button className={`${menuShowing==="autofill" && styles.active} ${styles.button}`} onClick={() => changeMenu('autofill')}>Auto<br/>fill</button>
            </div>
            {menuShowing === "namelist" && <NameList />}
            {menuShowing === "nameInput" && <NamesInput />}
            {menuShowing === "autofill" && <AutofillMenu />}
        </section>
    </div>

}

export default NamelistMenu;