import classes from './modal.module.css';

import React from 'react';
import Card from '../UI/Cards';
import Button from '../UI/Button';
const Modal = (props) =>{
    return (
        <Card className="col-6">
           <div className={classes.modalWrap}>
                <header className={`${classes.modalHeader} bg-danger text-light text-start px-2`}>
                    <h2><b>Alert !</b></h2>
                </header>
                <div className={classes.modalBody}>
                    {props.error}
                </div>
                <footer className={`${classes.modalFooter} bg-warning text-end`}>
                    <Button id="clsModal" className="btn btn-warning p-2 m-2 bg-danger text-light" onClick={props.onConfirm}>
                        Got It
                    </Button>
                </footer>
           </div>
        </Card>
    );
}

export default Modal;