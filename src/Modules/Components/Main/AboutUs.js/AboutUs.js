import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
export default function AboutUs() {
    return (
     
        <>
            <Container className="mt-4">
			<h1 className="text-center text-primary">SOBRE NOSALTRES</h1>
                <Row>
                    <Col lg={4}>
                        <Card sx={{ maxWidth: 345, height: 550 }}>
                            <CardMedia  component="img" alt="Marc Gaspar fot de perfil" image="Images/avatar1.jpg" />

                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Marc Gaspar
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tècnic amb experiencia de 10 anys al sector, es especialista en base de dades, UNITY, C# i la realització del back-end.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Dissenyador de mapes. I co-creador del jocs tal com call of duty i Assassins.
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Col>
					<Col lg={4}>
                        <Card sx={{ maxWidth: 345, height: 550 }}>
                            <CardMedia component="img" alt="Jordi Grau" image="Images/avatar2.webp" />

                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Jordi Grau
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   Tècnic co-fundador de la empresa topspeedstars. Especialista en UNITY, C# e interficie gràfica.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   Gran intuició per els jocs que marquen tendencia al mercat.
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Col>
					<Col lg={4}>
                        <Card sx={{ maxWidth: 345, height: 550 }}>
                            <CardMedia component="img" alt="Jordi Ortiz" image="Images/avatar3.jpg" />

                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Jordi Ortiz
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tècnic en fron-end, amb experiencia en javascript i especialment REACT. Encara que domina Angular.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Porta més de 10 anys d'antiguitat on ha colaborat en tots els projectes.
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
