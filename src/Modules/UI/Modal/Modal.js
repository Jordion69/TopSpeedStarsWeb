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
                        <Button className="bg-danger"onClick={props.onClose}>
                            <div c>
                                <AiFillCloseCircle className="bg-danger text-white" />
                            </div>
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
