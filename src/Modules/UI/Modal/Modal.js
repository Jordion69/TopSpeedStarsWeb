import ReactDOM from "react-dom";

import classes from "../css/Modal.module.css";
import Backdrop from "./Backdrop";
import ButtonGroup from "../Button/ButtonGroup";
import Button from "../Button/Button";
import { AiFillCloseCircle } from 'react-icons/ai'

function Modal(props) {
    const showModal = () => {
        return (
            <div className={classes.modal}>
                {props.children}
                <ButtonGroup>
                    {props.confirmModal ? (
                        <>
                            <Button onClick={props.onConfirm} className={classes["remove-btn"]}>
                                Confirm
                            </Button>
                            <Button onClick={props.onClose}>Close</Button>
                        </>
                    ) : (
                        <Button onClick={props.onClose}>
                            <div className="d-flex  flex-row-reverse m-4">
                                <AiFillCloseCircle className="bg-black text-white" />
                            </div>
                            Close
                        </Button>
                    )}
                </ButtonGroup>
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
export default Modal;
