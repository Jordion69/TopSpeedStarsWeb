import React, { useRef } from "react";
import Input from "../../UI/Input/Input";
import { FaGoogle, FaArrowAltCircleRight } from "react-icons/fa";
import MessageUserUnknown from "../../Components/Header/HeaderMessage/MessageUserUnknown";
import LinkRegister from "../../Components/Header/HeaderMessage/LinkRegister";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import * as utils from "../../Utils/utils";
import { AiFillCloseCircle } from "react-icons/ai";
import { Form, FormGroup } from 'react-bootstrap'


export default function LogInForm(props) {
    const { children, onCancel } = props;
    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [username, setUserName] = useState("");

    async function executeConfirm(e) {
        e.preventDefault();
        const data = {
            name: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(data);
        try {
            const result = await utils.bodyRequest("https://topspeedstarsapi.herokuapp.com/api/user", data, "POST");
  
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
        props.cancel(false);
    }
    function testUserName(name) {
        setUserName(name);
        return true;
    }
    function executeRegister() {
        console.log("closing register");
        props.cancel(false);
        props.logInOpener();
    }

    return (
        <div className="container bg-light">
         <div className="row h-75  justify-content-center">
                <div className="col-auto h-25 inline-block mt-4 p-5">
                    <div className="mb-3 h-100">
                        <AiFillCloseCircle onClick={closeModal} className="text-dark"  />
                    </div>
            <Form onSubmit={executeConfirm} className="col-12">
            <FormGroup>
                <Form.Label>User name</Form.Label>
                    <Form.Control id="username" 
                    label="Username"
                    className="form-control m-0 form-label" 
                    type="text" 
                    startVal="" 
                    placeholder="username" 
                    validation={testUserName} 
                    timer={200}
                    ref={usernameRef}
                    ></Form.Control>
                
                </FormGroup>
                <FormGroup>
                <Form.Label>EMail</Form.Label>
                    <Form.Control id="username" 
                    label="email"
                    className="form-control m-0 form-label" 
                    type="mail" 
                    startVal="" 
                    placeholder="email" 
                    validation={testEmail} 
                    timer={200}
                    ref={emailRef}

                    ></Form.Control>
                    </FormGroup>
                    <FormGroup>
                <Form.Label>Password</Form.Label>
                    <Form.Control id="pwd" 
                    label="password"
                    className="form-control m-0 form-label" 
                    type="password" 
                    startVal="" 
                    placeholder="password" 
                    validation={testPwd}
                    ref={passwordRef}

                    timer={200}
                    ></Form.Control>               
                </FormGroup>
                <FormGroup>
                <Form.Label>Repeat password</Form.Label>
                    <Form.Control id="repeatPwd" 
                    label="Repeat password"
                    className="form-control m-0 form-label" 
                    type="password" 
                    startVal="" 
                    placeholder="repeat password" 
                    validation={testPwd} 
                    timer={200}
                    ></Form.Control>
                
                </FormGroup>
               
                <div className="mt-4" >
                <Button className=" mb-3">
                    <FaArrowAltCircleRight  onClick={executeConfirm} size={50} style={{ fill: "white" }} className="" />
                </Button>
                </div>
                {/* <div className="mb-3">
                    <MessageUserUnknown />
                </div> */}
                <div className="mt-4">
                    <LinkRegister  onClick={executeRegister} >Log In</LinkRegister>
                </div>
            </Form>
            </div>
            </div>
        </div>
    );
}
