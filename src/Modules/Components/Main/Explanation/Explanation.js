import React from "react";
import { Container, Row, Col } from "react-bootstrap";
;

export default function Explanation() {
    


    return (
        <>
        <Container>
            <Row>
                <h1>TopSpeedStar</h1>
            </Row>
        </Container>
            <Container className="mt-4 text-white">
                <Row className="row" >
                    <Col lg={2} />
                    <Col lg={8} className="text-center text-warning">
                        <h3>LES MILLORS CURSES ESPAIALS</h3>
						<h3>EMOCIÓ FINS AL FINAL</h3>
                        <h3>GAUDEIX DE CADA SEGON</h3>
						<h3>SIGAS EL MES RÀPID</h3>
						

                    </Col>
                    <Col lg={2} />
                </Row>
            </Container>
        </>
    );
}
