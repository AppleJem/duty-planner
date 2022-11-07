import { useDispatch, useSelector } from 'react-redux';

import { nameActions } from '../../store/nameSlice';
import styles from "./Namelist.module.css";

function NameList() {
    const {names} = useSelector(state=>state.namesConfig);
    const dispatch = useDispatch();

    const parsedNames = names.replace(/\s/g, '').split(',');

    function changeActiveNameHandler(newActiveName) {
        //dispatching action to redux to update activeName
        console.log(newActiveName);
        dispatch(nameActions.setActiveName(newActiveName));
    }

    const nameListArr = []
    for (let i = 0; i < parsedNames.length; i++) {
        nameListArr.push(<p key={parsedNames[i] + i} onClick={() => { changeActiveNameHandler(parsedNames[i]) }} className={styles['name-cell']}>{parsedNames[i]}</p>)
    }




    return <div className={styles['name-list']}>
        {nameListArr}
    </div>
}

export default NameList