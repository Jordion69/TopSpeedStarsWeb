import React from 'react'
import { Form, Button } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState, useRef } from 'react';
import * as utils from "../../Utils/utils";



export default function TemaForoForm(props) {

	const { children, onCancel } = props;
    const [tema, setTema] = useState("");
    const [textTema, setTextTema] = useState("");
    const temaRef = useRef(null)
    const textTemaRef = useRef(null)

    async function executeConfirm(e) {
        console.log('test1')
        e.preventDefault();
        const data = {
			userId: sessionStorage.getItem('user-id'),
            title: temaRef.current.value,
            text: textTemaRef.current.value,
        };
        console.log(data);
        try {
            const result = await utils.bodyRequest("https://topspeedstarsapi.herokuapp.com/api/temas", data, "POST");
            console.log(result.data.access_token);

            utils.saveSessionStorage("react-token", result.data.access_token);
            // login correcte
            console.log(result);
            temaRef.current.value = "";
            textTemaRef.current.value = "";
            closeModal();
        } catch (e) {
            // login incorrecte
            console.log(e);
        }
    }
    function testTema(tema) {
        setTema(tema);
        return tema;
    }
    function testTextTema(textTema) {
        setTextTema(textTema);
        return textTema;
    }
    function closeModal() {
        props.cancel();
    }
    
  return (
	<div>
	  <div className="container bg-light">
            <div className="row w-auto  justify-content-center">
                <div className="col-auto h-25 inline-block">
                    <div className="mb-3 h-100">
                        <AiFillCloseCircle onClick={closeModal} className="text-dark"  />
                    </div>
                    <Form onSubmit={executeConfirm} className="col-12">
                        <Form.Group className="">
                            <Form.Label>Tema</Form.Label>
                            <Form.Control
                                name="tema"
                                id="tema"
                                className="form-control my-2 form-label"
                                type="text"
                                startVal=""
                                placeholder="tema"
                                validation={testTema}
                                ref={temaRef}
                                timer={200}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Text</Form.Label>
                            <Form.Control
								as='textarea'
								rows={4}
                                name="textTema"
                                id="textTema"
                                className="form-control my-2 form-label"
                                startVal=""
                                ref={textTemaRef}
                                placeholder="text tema"
                                validation={testTextTema}
                                timer={200}
                            ></Form.Control>
                        </Form.Group>
                        <Button className="mb-2 bg-primary" type="submit">
                           Create
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
	</div>
  )
}
