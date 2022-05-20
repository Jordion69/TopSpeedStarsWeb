import React from "react";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ForoContext from "../../context/Foro/ForoContext";
import AuthContext from "../../context/User/UserState";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import TemaForoForm from "../Forms/TemaForoForm";

export default function ForoList(props) {
    const authCtx = useContext(AuthContext);
    const { temas, getForo } = useContext(ForoContext);
    const navigate = useNavigate();
    const [temaModalOpen, setTemaModalOpen] = useState(false);

    useEffect(() => {
        getForo();
    }, []);


    const handleClick = (id) => {
        return () => {
            navigate("/details/" + id);
        };
    };

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


    function showDate(dateStr) {
        const d = new Date(dateStr)

        return d.getDay() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    }

    return (
        <>
            {" "}
            {authCtx.getToken() && (
                <Button
                    Button
                    style={{
                        position: "fixed",
                        top: "15%",
                        right: 40,
                    }}
                    onClick={removeHandler}
                >
                    Create{" "}
                </Button>
            )}{" "}
            {temaModalOpen && (
                <Modal className="bg-light" cancel={closeLogInModal} onClose={closeLogInModal} confirm={setTemaModalOpen}>
                    <TemaForoForm cancel={closeLogInModal}> </TemaForoForm>{" "}
                </Modal>
            )}{" "}
            <div>
                <div className="container border border-2">
                    <div className="row">
                        <table className="bg-white table table-hover col-md-12 text-black">
                            <thead>
                                <tr>
                                    <th scope="col-2">Autor</th><th scope="col-6">Tema</th><th scope="col-2">Data</th><th scope="col-2">Missatges</th>
                                </tr>
                            </thead>
                            <tbody>
                                {temas.map((tema) => (
                                    <tr className="border-4 border-dark rounded-8" key={tema.id}>
                                        <th scope="row">
                                            <img src={`Images/avataaars${tema.user_id}.svg`} className="rounded-circle" alt="avatar" height={50} width={50} />
                                        </th>
                                        <td><Link className="border-4 border-dark rounded-8" to={`/details/${tema.id}`}>{tema.title}</Link></td><td>{showDate(tema.created_at)}</td><td>{tema.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
}
