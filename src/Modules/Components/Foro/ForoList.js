import React from "react";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ForoContext from "../../context/Foro/ForoContext";
import AuthContext from "../../context/User/UserState";
import { useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import TemaForoForm from "../Forms/TemaForoForm";


export default function ForoList(props) {
  const authCtx = useContext(AuthContext)
    const { temas, getForo } = useContext(ForoContext);
    const navigate = useNavigate()
    const [logInModalOpen, setLogInModalOpen] = useState(false);
  

    useEffect(() => {
        getForo();
        console.log(temas);
    }, []);

    const handleCreateForo = () => {
      if(!authCtx.getToken()) {
        alert('No esta logat')
      }


    }

    const handleClick = (id) => {
        return () =>{
            console.log(id)
            navigate('/details/'+id)
        }
    }

    
    

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
        <>
        {
            !authCtx.getToken() ? (

            <Button
            style={{position: 'fixed', top: '15%', right: 40}}
            onClick={removeHandler}
            >Create
            </Button>
            ) : (<div></div>)
        }

        {logInModalOpen && (
                <Modal className="bg-light"  cancel={closeLogInModal} onClose={closeLogInModal} confirm={setLogInModalOpen} >
                    <TemaForoForm cancel={closeLogInModal} ></TemaForoForm>
                </Modal>
            )}
            

            <div>
                <div className="container border border-2">
                    <div className="row">
                        <table class="bg-white table table-hover col-md-12 text-black">
                            <thead>
                                <tr>
                                    <th scope="col-2">Autor</th>
                                    <th scope="col-6">Tema</th>
                                    <th scope="col-2">Data</th>
                                    <th scope="col-2">Missatges</th>
                                </tr>
                            </thead>
                            <tbody >
                                    {/* <tr key={tema._id} onClick={()=> console.log(tema._id)} > */}
                                {temas.map((tema) => (
                                    <tr className="border-4 rounded-8" key={tema._id} onClick={handleClick(tema._id)} >
                                        <th scope="row">
                                            <img src="Images/Avataaars1.svg" className="rounded-circle" alt="avatar" height={50} width={50} />
                                        </th>
                                        <td >{tema.city}</td>
                                        <td>{tema.country}</td>
                                        <td>{tema.stars}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    );
}
