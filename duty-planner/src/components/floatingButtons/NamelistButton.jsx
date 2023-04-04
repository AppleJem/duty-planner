import { useDispatch, useSelector } from 'react-redux';

import styles from './NamelistButton.module.css';
import { menuActions } from '../../store/menuSlice';
import penIcon from '../../assets/buttonIcons/pen.svg';
import cross from '../../assets/buttonIcons/cross.svg';


function NamelistButton() {
    const activeMenu = useSelector(state => state.menuStatus.activeMenu);
    const tablesInfo = useSelector(state => state.tableSpecs.tables)
    const dispatch = useDispatch();

    const tablesLength = Object.keys(tablesInfo).length;

    function toggleNamelistMenu() {
        if (activeMenu === 'namelist') {
            dispatch(menuActions.setActiveMenu('none'));
        } else {
            dispatch(menuActions.setActiveMenu('namelist'));
        }

    }

    return <button alt="namelist menu button" onClick={toggleNamelistMenu}
        className={`absolute col-start-6 bottom-8 w-14 h-14 overflow-hidden p-4 rounded-full bg-yellow-500 z-10
        ${tablesLength ? "": "brightness-50"}`}>
        {activeMenu === 'table' || activeMenu === 'none' ? <img src={penIcon} alt="Open namelist menu" /> : <img src={cross} alt="close namelist menu" />}
    </button>

}

export default NamelistButton;