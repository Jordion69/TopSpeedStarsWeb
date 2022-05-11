import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import style from "./video.module.css";

export default function Video() {
    return (
        <>
            <div className="container">
                <Container className="container">
                    <Row className="">
                        <Col sm={12}>
                            <ReactPlayer className="border-2 border-light w-100 h-auto" url={["Video/starWars.mp4"]} playing controls />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

