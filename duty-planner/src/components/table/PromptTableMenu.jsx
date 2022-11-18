import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Table.module.css';

import { menuActions } from '../../store/menuSlice';

function PromptTableMenu() {
    const dispatch = useDispatch();

    function openTableMenu() {
        dispatch(menuActions.setActiveMenu('table'));
    }

    return <Fragment>
        <p className={styles['prompt-message']}>
            You don't have any tables configured yet...
        </p>
        <button onClick={openTableMenu} className={styles['configure-table-button']}>Add a Table</button>
    </Fragment>
}

export default PromptTableMenu;