import React, { useRef } from "react";
import Input from "../../UI/Input/Input";
import { FaGoogle, FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import MessageUserUnknown from "../../Components/Header/HeaderMessage/MessageUserUnknown";
import LinkRegister from "../../Components/Header/HeaderMessage/LinkRegister";
import { useState } from "react";
import * as utils from "../../Utils/utils";
//import { Form, Button } from "rsuite";
import { Form, Button } from "react-bootstrap";

export default function LogInForm(props) {
    const { children, onCancel } = props;
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const emailRef = useRef(null)
    const pwdRef = useRef(null)

    async function executeConfirm(e) {
        console.log('test1')
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: pwdRef.current.value,
        };
        console.log(data);
        try {
            const result = await utils.bodyRequest("https://topspeedstarsapi.herokuapp.com/api/login", data, "POST");
            console.log(result.data.access_token);

            utils.saveSessionStorage("react-token", result.data.access_token);
            // login correcte
            console.log(result);
            emailRef.current.value = "";
            pwdRef.current.value = "";
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
        console.log("closing login");
        props.cancel();
        props.registerOpener();
    }

    return (

        <div className="container bg-light">
            <div className="row w-auto  justify-content-center">
                <div className="col-auto h-25 inline-block">
                    <div className="mb-3 h-100">
                        <AiFillCloseCircle onClick={closeModal} className="text-dark"  />
                    </div>
                    <Form onSubmit={executeConfirm} className="col-12">
                        <Form.Group className="">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                id="email"
                                className="form-control my-2 form-label"
                                type="mail"
                                startVal=""
                                placeholder="email"
                                validation={testEmail}
                                ref={emailRef}
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
                                ref={pwdRef}
                                placeholder="password"
                                validation={testPwd}
                                timer={200}
                            ></Form.Control>
                        </Form.Group>
                        <div className="container">
                        <div className="row d-flex align-items-center">
                        <div className="col-1">
                            <FaGoogle className="" />
                            </div>
                            <div className="col-10">
                            <button className="btn btn-light text-black mb-5 w-100 h-100" onClick={executeConfirm}>
                                Login with google
                            </button>
                            </div>
                        </div>
                        </div>
                        <Button className="mb-2 bg-primary" type="submit">
                            <FaArrowAltCircleRight className="btn btn-success text-black mt-4" />
                        </Button>
                        {/* <div className="mb-3">
                            <MessageUserUnknown />
                        </div> */}
                        <div className="mb-3">
                            <LinkRegister onClick={executeRegister}>Create an account</LinkRegister>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
