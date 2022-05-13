import React from "react";
import ResponseForoForm from "../Forms/ResponseForoForm";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { useParams } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import useHttp from "../../hooks/useHttp"

export default function ForoListDetails() {
    //const authCtx = useContext(AuthContext);
    const [temaModalOpen, setTemaModalOpen] = useState(false);
    const [respuestas, setRespuesta] = useState([])

    console.log("hola");

    const { id } = useParams();

    console.log("id", id)

    const { isLoading, error, setError, sendRequest: findResponses } = useHttp();

    const getResponses = (response) => {
        setRespuesta(response)
    };

    useEffect(() => {
        findResponses(
            {
                url: `https://topspeedstarsapi.herokuapp.com/api/respuestas?temaId=${id}`,
                method: "GET",
                auth: false,
            },
            getResponses
        );
    }, []);
    // const handleCreateForo = () => {
    //     if (!authCtx.getToken()) {
    //         alert("No esta logat");
    //     }
    // }

    const openLogInModal = () => setTemaModalOpen(true);
    const logIncloseModal = () => setTemaModalOpen(false);

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
        <>
            {" "}
            {/*authCtx.getToken() && */(
                <Button
                    Button
                    style={{
                        position: "fixed",
                        top: "15%",
                        right: 40,
                    }}
                    onClick={removeHandler}
                >
                    Respuesta{" "}
                </Button>
            )
            }{" "}
            {temaModalOpen && (
                <Modal className="bg-light" cancel={closeLogInModal} onClose={closeLogInModal} confirm={setTemaModalOpen}>
                    <ResponseForoForm cancel={closeLogInModal} temaId={id}> </ResponseForoForm>{" "}
                </Modal>
            )}{" "}
            {respuestas.map((respuesta) => (

            <div className="bg-danger container border border-2 mt-4">
                <div className="row">
                    <div className="col-md-2 bg-secondary m-1 text-center">
                        <div>
                            <img src={`Images/Avataaars${respuesta.user_id}.svg`} className="rounded-circle mt-4" alt="avatar" height={50} width={50} />{" "}
                        </div>{" "}
                        <p className="mt-4"> {respuesta.created_at} </p>{" "}
                    </div>{" "}
                    <div className="col-md-9 offset-md-1 border border-2 m-1 ml-2">
                        <p>
                            {respuesta.text}
                        </p>{" "}
                        
                    </div>{" "}
                </div>{" "}
            </div>
            ))}
        </>
    );
}
