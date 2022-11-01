import { useDispatch } from 'react-redux';

import { nameActions } from '../../store/nameSlice';
import styles from "./Namelist.module.css";

function NameList() {
    const dispatch = useDispatch();

    //Simulated parsing of user-given namelist
    const namesInput = "Jem, Luqman, Enrico, Suhail";
    const names = namesInput.replace(/\s/g, '').split(',');
    const nameList = [];

    function changeActiveNameHandler(newActiveName) {
        //dispatching action to redux to update activeName
        dispatch(nameActions.setActiveName(newActiveName));
    }

    for (let i = 0; i < names.length; i++) {
        nameList.push(<p onClick={()=>{changeActiveNameHandler(names[i])}} className={styles['name-cell']}>{names[i]}</p>)
    }

    return <aside>
        <div className={styles['name-list']}>
            {nameList}
        </div>

    </aside>
}

export default NameList