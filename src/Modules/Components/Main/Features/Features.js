import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
export default function Features() {
    return (
        // <div className='container d-flex align-items-center'>
        // 	<div className='row'>
        // 		<div className='col-12 col-lg-4'>
        // 			<article className="card h-100">
        // 				<div className="card-body mb-3 ps-4">
        // 					<div className='col-12 bg-black'>
        // 						<img src="Images/logo.jpg" className='img-fluid' alt="feature1" />
        // 					</div>
        // 					<div className="align-items-center">
        // 						<h4 className='fs-6 mt-3 text-black font-weight-bold'>PARTIDES RÀPIDES E INTENSES</h4>
        // 					</div>
        // 					<div className='col-12 bg-danger mt-3'>
        // 						<p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae deserunt ex laborum inventore consequatur, debitis labore libero, incidunt doloremque consequuntur voluptatibus. Quis, ipsum ducimus! Cumque.</p>
        // 					</div>
        // 				</div>
        // 			</article>
        // 		</div>

        // 		<div className='col-12 col-lg-4'>
        // 			<article className="card h-100">
        // 				<div className="card-body mb-3 ps-4">
        // 					<div className='col-12 bg-black'>
        // 						<img src="Images/maps.jpg" className='img-fluid' alt="feature1" />
        // 					</div>
        // 					<div className="align-items-center">
        // 						<h4 className='fs-6 mt-3 text-black font-weight-bold'>MULTIPLAYER</h4>
        // 					</div>
        // 					<div className='col-12 bg-danger mt-3'>
        // 						<p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae deserunt ex laborum inventore consequatur, debitis labore libero, incidunt doloremque consequuntur voluptatibus. Quis, ipsum ducimus! Cumque.</p>
        // 					</div>
        // 				</div>
        // 			</article>
        // 		</div>
        // 		<div className='col-12 col-lg-4'>
        // 			<article className="card h-100">
        // 				<div className="card-body mb-3 ps-4">
        // 					<div className='col-12 bg-black'>
        // 						<img src="Images/logo.jpg" className='img-fluid' alt="feature1" />
        // 					</div>
        // 					<div className="align-items-center">
        // 						<h4 className='fs-6 mt-3 text-black font-weight-bold'>RANKING</h4>
        // 					</div>
        // 					<div className='col-12 bg-danger mt-3'>
        // 						<p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae deserunt ex laborum inventore consequatur, debitis labore libero, incidunt doloremque consequuntur voluptatibus. Quis, ipsum ducimus! Cumque.</p>
        // 					</div>
        // 				</div>
        // 			</article>
        // 		</div>

        // 	</div>

        // </div>

        <>
            <Container>
			<h1 className="text-center text-primary">CARACTERÍSTIQUES</h1>
                <Row>
                    <Col lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" alt="multiplayer" src='Images/feature1.jpg' />

                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    MULTIJUGADOR
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Joc multijugador, pots jugar amb gent d'arreu del mon o amb el teus amics. 
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Sent la emoció de competir amb els millors racers del món.
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Col>
					<Col lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" alt="green iguana" src='Images/feature2.png' />

                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                   ESCULL MAPA
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    3 circuits on et trobaràs un munt de obstacles que probaran els teus reflexes.
                                </Typography>
                                
                            </CardContent>
                           
                        </Card>
                    </Col>
					<Col lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" alt="green iguana" src='Images/feature3.jpg' />

                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    RANKING MUNDIAL
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Coneix la teva posició en la lliga mundial. Millora cada segon a segon i ves escalant en el ranking.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Sigues el millor del món. Tu pots.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
