import classes from './modal.module.css';

import React  from 'react';
import ReactDom from 'react-dom';
import Modal from './Modal';

const PortingModal = (props) =>{
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}  id="backDrop">
            <Modal error={props.error} onConfirm={props.onConfirm}/>
        </div>
    );
}

const BackDrop = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<PortingModal error={props.error} onConfirm={props.onConfirm}/>, document.getElementById('backDrop-root'))}
        </React.Fragment>
    );
}

export default BackDrop;