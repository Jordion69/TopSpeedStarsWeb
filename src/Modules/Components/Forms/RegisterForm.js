import React from "react";
import Input from "../../UI/Input/Input";
import { FaGoogle, FaArrowAltCircleRight } from "react-icons/fa";
import MessageUserUnknown from "../../Components/Header/HeaderMessage/MessageUserUnknown";
import LinkRegister from "../../Components/Header/HeaderMessage/LinkRegister";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import * as utils from "../../Utils/utils";

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
        props.cancel(false);
    }
    function executeRegister() {
        console.log("closing register");
        props.cancel(false);
        props.logInOpener();
    }

    function testUsername(username) {
        return true;
    }

    return (
        <div className="container">
            <form onSubmit={executeConfirm} className="col-12">
                <div className="form-group mt-4">
                    <Input id="username" label="Username" className="form-control m-0 form-label" type="text" startVal="" placeholder="username" validation={testUsername} timer={200}></Input>
                </div>
                <div className="form-group">
                    <Input id="email" label="Email" className="form-control m-0 form-label" type="mail" startVal="" placeholder="email" validation={testEmail} timer={200}></Input>
                </div>
                <div className="form-group mt-4">
                    <Input id="pwd" label="Password" className="form-control m-0 form-label" type="password" startVal="" placeholder="password" validation={testPwd} timer={200}></Input>
                </div>
                <div className="form-group mt-4">
                    <Input
                        id="pwd2"
                        label="Confirm Password"
                        className="form-control m-0 form-label"
                        type="confirm password"
                        startVal=""
                        placeholder="password"
                        validation={testPwd}
                        timer={200}
                    ></Input>
                </div>
                {/* <div className="mt-4">
                    <FaGoogle className="m-2" />
                    <button className="btn btn-primary" onClick={executeConfirm}>
                        Login with google
                    </button>
                </div>*/}
                <Button className="mb-3">
                    <FaArrowAltCircleRight className="btn btn-success text-white mt-4" />
                </Button>
                <div className="mb-3">
                    <MessageUserUnknown />
                </div>
                <div className="mb-3">
                    <LinkRegister onClick={executeRegister} >Log In</LinkRegister>
                </div>
            </form>
        </div>
    );
}
