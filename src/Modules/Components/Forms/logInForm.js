import React from "react";
//import Input from "../../UI/Input/Input";
import { FaGoogle, FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai"
import MessageUserUnknown from "../../Components/Header/HeaderMessage/MessageUserUnknown";
import LinkRegister from "../../Components/Header/HeaderMessage/LinkRegister";
//import Button from "../../UI/Button/Button";
import { useState } from "react";
import * as utils from "../../Utils/utils";
//import { Form, Button } from "rsuite";
import { Form, Button } from "react-bootstrap";



export default function LogInForm(props) {
    const { children, onCancel } = props;
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");


    async function executeConfirm(e) {
        e.preventDefault();

        const data = {
            email: email,
            password: pwd,
        };
        console.log(data);
        try {
            const result = await utils.bodyRequest("https://topspeedstarsapi.herokuapp.com/api/login", data, "POST");
            console.log(result.data.access_token);

            utils.saveSessionStorage("access_token", result.data.access_token);
            // login correcte
            console.log(result);
            closeModal();
        } catch (e) {
            // login incorrecte
            console.log(e);
        }
        
    }
    function testEmail(email) {
        setEmail(email);
        return email.includes("@");
    }
    function testPwd(pasword) {
        setPwd(pasword);
        return true;
    }
    function closeModal() {
        props.cancel();
    }
    function executeRegister() {
		console.log('closing login')
        props.cancel();
		props.registerOpener();
    }

    return (
<div className="container">
    <div className="row vh-60 justify-content-center">
        <div className="col-auto bg-light p-5">
        <div className="mb-3">
        <AiFillCloseCircle onClick={closeModal} className="bg-danger text-white" />

        </div>
            <Form onSubmit={executeConfirm} className="col-12 bg-white">
            
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    name="email"
                     id="email" 
                     className="form-control my-2 form-label"
                     type="mail"
                     startVal=""
                     placeholder="email" 
                     validation={testEmail}
                     timer={200}
                     ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    name="pwd"
                    id="pwd"  
                    className="form-control my-2 form-label" 
                    type="password" 
                    startVal="" 
                    placeholder="password" 
                    validation={testPwd} 
                    timer={200}></Form.Control>
               </Form.Group>
                <div className="mb-2">
                    <FaGoogle className="m-2" />
                    <button className="btn btn-primary mb-5 w-75 h-25" onClick={executeConfirm}>
                        Login with google
                    </button>
                </div>
                <Button className="mb-2 bg-primary"  onClick={closeModal}>
                    <FaArrowAltCircleRight className="btn btn-success text-black mt-4" />
                </Button>
                <div className="mb-3">
                    <MessageUserUnknown />
                </div>
                <div className="mb-3">
                    <LinkRegister onClick={executeRegister}>Create an account</LinkRegister>
                </div>
            </Form>
        </div>
    </div>
</div>
     
    );
}
