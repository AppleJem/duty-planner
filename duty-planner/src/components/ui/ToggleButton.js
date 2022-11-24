import classes from './ToggleButton.module.css';

function ToggleButton(props) {
    return <div onTransitionEnd={props.onTransitionEnd} onClick={props.toggleFunction} className={`${classes['toggle-container']} ${props.toggleState ? classes['active'] : null}`}>
        <div className={`${classes['toggle-button']} ${props.toggleState && classes['active']}`}></div>
    </div>
}

export default ToggleButton;