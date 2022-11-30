
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { menuActions } from '../../../store/menuSlice';

import styles from "./TableTab.module.css";
import TimingsInput from './TimingsInput';
import HeadingsInput from './HeadingsInput';
import SlotsInput from './SlotsInput';
import StartEndInput from './StartEndInput';
import ToggleTimingInput from './ToggleTimingInput';

import AddTableButton from './AddTableButton';

function TableTab() {
    const dispatch = useDispatch();
    const { timingInputMethod } = useSelector(state => state.menuStatus);

    return <section className={styles['table-tab']}>
        <HeadingsInput updateHeadingInputs={(newHeadingInputs) => {
            // setHeadingInputs(newHeadingInputs);
        }} />

        <ToggleTimingInput />
        {timingInputMethod === 'manual' &&
            <TimingsInput updateTimingInputs={(newTimingInputs) => {
                //whenever the timings input changes, it is reflected in the state
                // setTimingInputs(newTimingInputs);
            }} />}

        {timingInputMethod === 'auto' && <StartEndInput />}
        {timingInputMethod === 'auto' && <SlotsInput />}

        <AddTableButton />
    </section>

}

export default TableTab;