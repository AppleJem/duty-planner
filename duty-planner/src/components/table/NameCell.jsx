import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { backupActions } from '../../store/backupSlice';

const NameCell = React.memo(function NameCell(props) {
    const dispatch = useDispatch();
    const activeName = useSelector(state => state.namesConfig.activeName);
    const currentSnapshot = useSelector(state => state.backupInfo.currentSnapshot);

    function updateNameHandler() {
        dispatch(backupActions.updateHistory({
            type: 'fillSingleCell',
            cellId: props.cellId,
            prevState: currentSnapshot[props.cellId]
        }));
        dispatch(backupActions.updateCurrentSnapshot({
            type: 'singleCell',
            cellId: props.cellId,
            newName: activeName.name,
            newColor: activeName.color
        }));
    }


    return <td style={{ backgroundColor: currentSnapshot[props.cellId].color }} onClick={updateNameHandler}>
        {currentSnapshot[props.cellId].name}
    </td>
})



export default NameCell;