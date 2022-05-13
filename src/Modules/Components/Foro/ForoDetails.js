import React from 'react'
import { Button } from 'react-bootstrap'
import ForoListDetails from './ForoListDetails'
import { useContext, useEffect, useState } from "react";
import ForoContext from "../../context/Foro/ForoContext";
import AuthContext from "../../context/User/UserState";
import { useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";


export default function ForoDetails() {

	const authCtx = useContext(AuthContext);
    const { temas, getTema } = useContext(ForoContext);
    const navigate = useNavigate();
    const [logInModalOpen, setLogInModalOpen] = useState(false);

	useEffect(() => {
        getTema();
        console.log(temas);
    }, []);

    const handleCreateForo = () => {
        if (!authCtx.getToken()) {
            alert("No esta logat");
        }
    };

    const handleClick = (id) => {
        return () => {
            console.log(id);
            navigate("/details/" + id);
        };
    };

    const openLogInModal = () => setLogInModalOpen(true);
    const logIncloseModal = () => setLogInModalOpen(false);

    function closeLogInModal() {
        console.log("closing logIn modal");
        logIncloseModal();
    }

    const removeHandler = () => {
        openLogInModal();
    };
    const removeLogin = () => {
        openLogInModal();
    };

  return (
	<div>
	  <Button
	  style={{position: 'fixed', top: '50%', right: 0}}
	  >Responder</Button>

<Button
	  style={{position: 'fixed', top: '50%', right: 0}}
	  >Responder</Button>
	  <ForoListDetails/>

	</div>
  )
}
