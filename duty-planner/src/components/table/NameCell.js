import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { backupActions } from '../../store/backupSlice';

const NameCell = React.memo(function NameCell(props) {
    const dispatch = useDispatch();
    const activeName = useSelector(state => state.namesConfig.activeName);
    const undoInfo = useSelector(state => state.backupInfo.undoInfo);
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        if (props.cellId === undoInfo.cellId) {
            setName(undoInfo.lastName);
            setColor(undoInfo.lastColor);
        }
    }, [props.cellId, undoInfo])


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