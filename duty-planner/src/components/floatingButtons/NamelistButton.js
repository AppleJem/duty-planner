import { useDispatch, useSelector } from 'react-redux';

import styles from './NamelistButton.module.css';
import { menuActions } from '../../store/menuSlice';


function NamelistButton() {
    const activeMenu = useSelector(state => state.menuStatus.activeMenu);
    const dispatch = useDispatch();

    function toggleNamelistMenu() {
        if (activeMenu === 'namelist') {
            dispatch(menuActions.setActiveMenu('none'));
        } else {
            dispatch(menuActions.setActiveMenu('namelist'));
        }

    }

    return <button onClick={toggleNamelistMenu} className={styles['namelist-menu-button']}>
        Edit
    </button>

}

export default NamelistButton;