
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nameActions } from '../../store/nameSlice';
import { menuActions } from '../../store/menuSlice';
import styles from "./NamelistMenu.module.css";
import NamesInput from './NamesInput';
import NameList from './Namelist';

function NamelistMenu() {
    const dispatch = useDispatch();
    const menuStatus = useSelector(state => state.menuStatus)
    const [nameList, setNameList] = useState([])
    let nameListArr = [];


    function toggleNameList() {
        dispatch(menuActions.toggleNamelist());
    }


    console.log(menuStatus.showNamelist)
    return <div className={styles['outer-container']}>
        <section className={styles['name-menu']}>
            <button onClick={toggleNameList} className={styles['toggle-button']}>Toggle</button>
            {menuStatus.showNamelist && <NameList />}
            {!menuStatus.showNamelist && <NamesInput />}



        </section>
    </div>

}

export default NamelistMenu;