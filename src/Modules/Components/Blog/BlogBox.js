import React from "react";
import { motion } from "framer-motion";
import { Card, Button, Container, Row, Col } from "react-bootstrap";


export default function BlogBox() {

	 const generate = () => {
		 const num = parseInt(Math.random()*1000);
		 return num;
	 }
	

    return (
      

        <Container>
		<Row>
		<Col className='m-3' mr='auto'>
            <Card style={{ width: "35rem", height: "35em" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <motion.img whileHover={{ scale: 1.1 }} className="img-fluid" src={`https://picsum.photos/id/${generate()}/900/500`} alt="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
					Some quick example text to build on the card title and make up the bulk of the card's content.<br></br>
					Some quick example text to build on the card title and make up the bulk of the card's content.<br></br>
					Some quick example text to build on the card title and make up the bulk of the card's content.<br></br>
					
                    </Card.Text>
                </Card.Body>
            </Card>
			</Col>
			<Col className='m-3' md='auto'>
            <Card style={{ width: "35rem", height: "35em" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <motion.img whileHover={{ scale: 1.1 }} className="img-fluid" src="https://picsum.photos/id/350/900/500" alt="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
            </Card>
			</Col>
			</Row>
        </Container>
    );
}
