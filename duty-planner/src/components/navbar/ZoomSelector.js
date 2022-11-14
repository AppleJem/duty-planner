import { useDispatch, useSelector } from 'react-redux';

import styles from './Navbar.module.css';
import { tableActions } from '../../store/tableSlice';



function ZoomSelector() {
    const dispatch = useDispatch();
    const zoomValue = useSelector(state=>state.tableSpecs.zoom);
    const cellList = useSelector(state=>state.backupInfo.cells);
    const historyList = useSelector( state=> state.backupInfo.actionHistory);

    function zoomHandler(event) {
        dispatch(tableActions.setZoom(event.target.value))
    }

    return <select value={zoomValue} onChange={zoomHandler} className={styles['zoom-selector']}>
        <option value="100" >100%</option>
        <option value="70" >70%</option>
        <option value="50" >50%</option>
    </select>
}

export default ZoomSelector;