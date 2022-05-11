import React from "react";
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../../UI/Modal/Modal";
import LogInForm from "../../Forms/logInForm";
import RegisterForm from "../../Forms/RegisterForm";
import { useContext } from "react";
import AuthContext from "../../../context/User/UserState";
import style from '../Header.module.css'


export default function HeaderUserLogin() {
    const [logInModalOpen, setLogInModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    

    const openLogInModal = () => setLogInModalOpen(true);
    const logIncloseModal = () => setLogInModalOpen(false);
    const openRegisterModal = () => setRegisterModalOpen(true);
    const closeRegisterModal = () => setRegisterModalOpen(false);

    const authCtx = useContext(AuthContext)


    function closeLogInModal() {
        console.log("closing logIn modal");
        logIncloseModal();
    }

    function openRegisterModalFunc() {
        console.log("opening register modal");
        openRegisterModal();
    }

    const removeHandler = () => {
        openLogInModal();
    };
    const removeLogin = () => {
        openLogInModal();
    };

    
    
    return (
        <div>
            {!authCtx.getToken() ? (
                <div  onClick={removeHandler}>
                    <FaUserAlt className={style.userIcon}  style={{ fill: "white" }}></FaUserAlt>
                </div>
            ) : (
                <div>
                    <FaUserCheck size={25} style={{ fill: "white" }} className="" onClick={removeLogin} />
                </div>
            )}
            {logInModalOpen && (
                <Modal className="bg-light"  cancel={closeLogInModal} onClose={closeLogInModal} confirm={setLogInModalOpen} >
                    <LogInForm cancel={closeLogInModal} registerOpener={openRegisterModalFunc} ></LogInForm>
                </Modal>
            )}
            {registerModalOpen && (
                <Modal className="bg-light" cancel={closeRegisterModal} onClose={closeRegisterModal} confirm={setLogInModalOpen}>
                    <RegisterForm cancel={closeRegisterModal} logInOpener={openLogInModal}></RegisterForm>
                </Modal>
            )}
        </div>
    );
}
