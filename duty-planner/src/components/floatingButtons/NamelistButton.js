import { useDispatch, useSelector } from 'react-redux';

import styles from './NamelistButton.module.css';
import { menuActions } from '../../store/menuSlice';
import penIcon from '../../assets/buttonIcons/pen.svg';
import cross from '../../assets/buttonIcons/cross.svg'; 


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

    return <button alt="namelist menu button" onClick={toggleNamelistMenu} className={styles['namelist-menu-button']}>
        {activeMenu === 'table' || activeMenu === 'none' ? <img src={penIcon} /> : <img src={cross} />}
    </button>

}

export default NamelistButton;