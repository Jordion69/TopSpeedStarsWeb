import ReactDOM from "react-dom";

import classes from "../css/Modal.module.css";
import Backdrop from "./Backdrop";
import ButtonGroup from "../Button/ButtonGroup";
import Button from "../Button/Button";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal(props) {


     const showModal = () => {
        return (
            
   
            <div className={classes.modal}>
                {props.children}
               
                    {props.confirmModal ? (
                        <>
                            <Button onClick={props.onConfirm} className={classes["remove-btn"]}>
                                Confirm
                            </Button>
                            <Button onClick={props.onClose}>Close</Button>
                        </>
                    ):(
                        <></>
                    ) }
               
            </div>
       );
    };

    return ReactDOM.createPortal(
        <>
            <Backdrop onClick={props.onClose} />
            {showModal()}
        </>,
        document.getElementById("modal-root")
    );
}

