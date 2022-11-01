import menuIcon from '../../assets/buttonIcons/menu-icon.svg'
import styles from './TableMenu.module.css';

import { useDispatch } from 'react-redux';

import { menuActions } from '../../store/menuSlice';

function TableMenuButton() {
    const dispatch = useDispatch();

    function showTableMenu() {
        dispatch(menuActions.setActiveMenu('table'))
    }

    return <button className={styles['show-button']} onClick={showTableMenu}>
        <img src={menuIcon} alt='Open table menu' />
    </button>
}

export default TableMenuButton;