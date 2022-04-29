import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";

export default function Video() {
    return (
        <>
            <Container className="mt-4" >
                <Row className="d-flex flex-row justify-content-center alig-items-center" >
                   <Col sm={2}/>
				    <Col sm={8}>
                        <ReactPlayer url={"https://www.youtube.com/embed/qLyi4-3pUQM"} playing={true} />
                    </Col>
					<Col sm={2}/>
                </Row>
            </Container>
        </>
    );
}
