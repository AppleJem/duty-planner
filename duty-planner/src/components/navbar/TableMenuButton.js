import menuIcon from '../../assets/buttonIcons/menu-icon.svg'
import styles from './Navbar.module.css'
import { useDispatch } from 'react-redux';
import { menuActions } from '../../store/menuSlice';
import { ThreeDot } from '../../assets/iconComponents/ThreeDot';

function TableMenuButton() {
    const dispatch = useDispatch();

    function showTableMenu() {
        dispatch(menuActions.setActiveMenu('table'))
    }

    return <button className={styles['table-menu-button']} onClick={showTableMenu}>
        {/* <img src={menuIcon} alt='Open table menu' /> */}
        <ThreeDot />
    </button>
}

export default TableMenuButton;