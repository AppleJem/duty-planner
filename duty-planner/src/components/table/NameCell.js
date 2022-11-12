import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function NameCell (props) {
    const activeName = useSelector(state => state.namesConfig.activeName);
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [deleteCounter, setDeleteCounter] = useState(props.deleting);

    function updateNameHandler() {
        console.log(activeName);
        setName(activeName.name);
        setColor(activeName.color);
    }

    if (props.deleting>deleteCounter) {
        setName('');
        setDeleteCounter(props.deleting);
    }

    return <td style={{backgroundColor:color}} onClick={updateNameHandler}>
        {name}
    </td>
}



export default NameCell;