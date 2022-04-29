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
			<h1 className="text-center">Features</h1>
                <Row>
                    <Col lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" alt="green iguana" image="https://placeimg.com/400/400/rocketspace" />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antar
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Col>
					<Col lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" alt="green iguana" image="https://placeimg.com/400/400/rocketspace" />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antar
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Col>
					<Col lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" alt="green iguana" image="https://placeimg.com/400/400/rocketspace" />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antar
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
