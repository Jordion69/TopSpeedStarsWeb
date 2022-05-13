import React from 'react'
import { Form, Button } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState, useRef } from 'react';
import * as utils from "../../Utils/utils";
import { get } from 'react-hook-form';


export default function TemaForoForm(props) {

	const { children, onCancel } = props;
    const [tema, setTema] = useState("");
    const temaRef = useRef(null)
    const textResponseRef = useRef(null)

    async function executeConfirm(e) {
        console.log('test1')
        e.preventDefault();

        const data = {
			userId: sessionStorage.getItem('user-id'),
			temaId: props.temaId,
            text: textResponseRef.current.value,
        };
        console.log(data);
        try {
            const result = await utils.bodyRequest("https://topspeedstarsapi.herokuapp.com/api/respuestas", data, "POST");
    
            textResponseRef.current.value = "";
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
    // function testTextTema(textTema) {
    //     setTextTema(textTema);
    //     return textTema;
    // }
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
                        <Form.Group className="mb-3">
                            <Form.Label>Text</Form.Label>
                            <Form.Control
								as='textarea'
								rows={4}
                                name="textTema"
                                id="textTema"
                                className="form-control my-2 form-label"
                                startVal=""
                                ref={textResponseRef}
                                placeholder="text tema"
                                timer={200}
                            ></Form.Control>
                        </Form.Group>

                        <Button className="mb-2 bg-primary" type="submit">
                           Response
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
	</div>
  )
}