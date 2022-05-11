import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";

export default function MainSentence() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Card>
						<Card.Img variant="top" src="Images/Recurso1.svg" />
                            
                        </Card>
                    </Col>
					<Col lg={8}>
					<Card.Title className="fs-1 fw-bold badge bg-success col-auto text-center" >GAUDEIX DE CADA VOLTA</Card.Title>

					</Col>
                </Row>
            </Container>
        </>

    );
}
