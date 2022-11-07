import {useState} from 'react';
import { useSelector } from 'react-redux';

function NameCell (props) {
    const {activeName} = useSelector(state=>state.namesConfig);
    const [name, setName] = useState('');

    function updateNameHandler () {
        console.log(activeName)
        setName(activeName);
    }

 
    return <td onClick={updateNameHandler}>
        {name}
    </td>
}

export default NameCell;