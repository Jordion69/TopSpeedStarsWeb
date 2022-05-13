import React from "react";
import ResponseForoForm from "../Forms/ResponseForoForm";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/User/UserState";
import { useParams } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import useHttp from "../../hooks/useHttp"

export default function ForoListDetails() {
    const authCtx = useContext(AuthContext);
    const [temaModalOpen, setTemaModalOpen] = useState(false);
    const [respuesta, setRespuesta] = useState()
    const respuestas = []

    console.log("hola");

    const { id } = useParams();

    console.log("Hola")

    const { isLoading, error, setError, sendRequest: findResponses } = useHttp();

    const getResponses = (response) => {
        setRespuesta(response)
        console.log(response);
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
            {authCtx.getToken() ? (
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
            ) : (
                <div> </div>
            )}{" "}
            {temaModalOpen && (
                <Modal className="bg-light" cancel={closeLogInModal} onClose={closeLogInModal} confirm={setTemaModalOpen}>
                    <ResponseForoForm cancel={closeLogInModal}> </ResponseForoForm>{" "}
                </Modal>
            )}{" "}
            <div className="bg-danger container border border-2 mt-4">
                <div className="row">
                    <div className="col-md-2 bg-secondary m-1 text-center">
                        <div>
                            <img src=`Images/Avataaars${}.svg` className="rounded-circle mt-4" alt="avatar" height={50} width={50} />{" "}
                        </div>{" "}
                        <p className="mt-4"> Fecha: 22 / 02 / 2022 </p>{" "}
                    </div>{" "}
                    <div className="col-md-9 offset-md-1 border border-2 m-1 ml-2">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.A ducimus deserunt sunt officiis ea non ad maiores voluptates ratione, aperiam obcaecati, at ipsa dolore nesciunt
                            hic neque doloribus labore ut blanditiis sint.Quidem repudiandae, inventore temporibus debitis expedita exercitationem, eveniet vero sit sed voluptatibus cupiditate.Ipsam
                            delectus fuga maxime commodi!
                        </p>{" "}
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Rem pariatur cumque error repellendus autem neque beatae dicta doloremque esse, necessitatibus perferendis
                            dolor.Nemo nesciunt esse harum quam!Error repellendus inventore quaerat accusantium, nostrum ducimus recusandae voluptatibus fugiat perferendis laudantium ? Natus, error
                            mollitia ipsum, optio voluptate beatae quam ipsa reiciendis facilis molestiae iusto eos adipisci blanditiis impedit expedita doloremque saepe vitae, repudiandae
                            soluta.Ducimus dignissimos officia eos nostrum assumenda aliquam quas accusamus aspernatur nobis soluta corrupti odit veniam maiores, minus error velit, voluptates nihil
                            repudiandae, voluptatum in .Doloribus voluptate aliquid, tempore distinctio facere ullam culpa fuga, maiores ipsum dolorem deserunt sit.{" "}
                        </p>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
}
