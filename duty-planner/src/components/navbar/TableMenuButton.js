import styles from './Navbar.module.css'
import { useDispatch } from 'react-redux';
import { menuActions } from '../../store/menuSlice';

function TableMenuButton() {
    const dispatch = useDispatch();

    function showTableMenu() {
        dispatch(menuActions.setActiveMenu('table'))
    }

    return <button className={styles['table-menu-button']} onClick={showTableMenu}>
        {/* <img src={menuIcon} alt='Open table menu' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
    </button>
}

export default TableMenuButton;