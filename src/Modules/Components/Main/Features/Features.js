import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
export default function Features() {
    return (


        <>
            <Container>
			<h1 className="text-center text-primary">CARACTERÍSTIQUES</h1>
                <Row>
                    <Col lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" alt="multiplayer" sx={{height: 300 }} src='Images/feature1.jpg' />

                            <CardContent sx={{height: 200 }}>
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
                            <CardMedia component="img" alt="green iguana" sx={{height: 300 }} src='Images/feature2.png' />

                            <CardContent sx={{height: 200 }}>
                                <Typography gutterBottom variant="h4" component="div">
                                   ESCULL MAPA
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    3 circuits on et trobaràs un munt de obstacles que probaran els teus reflexes.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Aconsegueix magic box durant la cursa. Sigues el mes ràpid.
                                </Typography>
                                
                            </CardContent>
                           
                        </Card>
                    </Col>
					<Col lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia component="img" alt="green iguana" sx={{height: 300 }} src='Images/feature3.jpg' />

                            <CardContent sx={{height: 200 }}>
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
