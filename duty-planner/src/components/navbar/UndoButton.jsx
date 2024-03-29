import React from 'react';
import { useDispatch } from "react-redux";

import { backupActions } from "../../store/backupSlice";
import styles from './UndoButton.module.css';
import {ArrowCounterCw as UndoArrow} from '../../assets/iconComponents/ArrowCounterCw';

function UndoButton() {
    const dispatch = useDispatch();

    function undoHandler() {
        dispatch(backupActions.undo());
    }

    return <button className="h-8 w-8 col-start-6 col-end-7 self-center flex justify-center items-center" onClick={undoHandler}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
        </svg> */}
        <UndoArrow/>
    </button>
}

export default UndoButton;