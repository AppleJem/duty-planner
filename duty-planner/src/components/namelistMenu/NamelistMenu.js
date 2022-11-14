
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { menuActions } from '../../store/menuSlice';
import styles from "./NamelistMenu.module.css";
import NamesInput from './NamesInput';
import NameList from './Namelist';
import ToggleButton from '../ui/ToggleButton';

function NamelistMenu() {
    const dispatch = useDispatch();
    const menuStatus = useSelector(state => state.menuStatus);


    function toggleNameList() {
        dispatch(menuActions.toggleNamelist());
    }

    return <div className={styles['outer-container']}>
        <section className={styles['name-menu']}>
            <div className={styles['namelist-toggle']}>
                <legend>Editor</legend>
                <ToggleButton toggleFunction={toggleNameList} toggleState={!menuStatus.showNamelist} />
            </div>
            {menuStatus.showNamelist && <NameList />}
            {!menuStatus.showNamelist && <NamesInput />}



        </section>
    </div>

}

export default NamelistMenu;