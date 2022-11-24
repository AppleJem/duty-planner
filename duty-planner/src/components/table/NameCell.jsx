import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { autofillActions } from '../../store/autofillSlice';

import { backupActions } from '../../store/backupSlice';

const NameCell = React.memo(function NameCell(props) {
    const dispatch = useDispatch();
    const activeName = useSelector(state => state.namesConfig.activeName);
    const undoInfo = useSelector(state => state.backupInfo.undoInfo);
    const autofilledCells = useSelector(state => state.autofillInfo.filledCells);
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        if (props.cellId === undoInfo.cellId) {
            setName(undoInfo.lastName);
            setColor(undoInfo.lastColor);
        }
        let autofillInfo = autofilledCells[props.cellId];
        if (autofillInfo) {
            setName(autofillInfo.name);
            setColor(autofillInfo.color);
        }
    }, [props.cellId, undoInfo, autofilledCells])


    function updateNameHandler() {
        setName(activeName.name);
        setColor(activeName.color);
        dispatch(backupActions.updateCellHistory({
            cellId: props.cellId,
            change: {
                name: activeName.name,
                color: activeName.color
            }
        }))
        dispatch(backupActions.updateHistoryList(props.cellId));
    }


    return <td style={{ backgroundColor: color }} onClick={updateNameHandler}>
        {name}
    </td>
})



export default NameCell;