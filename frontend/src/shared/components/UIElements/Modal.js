import react from "react";
import  ReactDOM  from "react";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = props => {

    const content = ();

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};


const Modal = props => {
    return ();
};


export default Modal;
