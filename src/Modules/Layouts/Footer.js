import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {GiDiamondTrophy} from "react-icons/gi"

export default function App() {
    return (
        <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="https://www.google.es/maps/?hl=es">
                        <FaInstagram className="me-4 text-reset" />
                    </a>
                    <a href="https://www.google.es/maps/?hl=es">
                        <FaTwitter className="me-4 text-reset" />
                    </a>
                    <a href="https://www.google.es/maps/?hl=es">
                        <FaFacebook className="me-4 text-reset" />
                    </a>
                    <a href="https://www.google.es/maps/?hl=es">
                        <FaYoutube className="me-4 text-reset" />
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <GiDiamondTrophy className="fas fa-gem me-3"/>Top Speed Stars
                            </h6>
                            <p>Companyia dedicada a la creació de videogames amb més de 10 anys d'experiencia.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Top Speed Stars
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Call of Duty
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    League of Legens
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Assassins
                                </a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Foro
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Ranking
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    MultiMedia
                                </a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <FaHome className="fas fa-home me-3"/> Plaça Nord s/n Barcelona
                            </p>
                            <p>
                                <FaEnvelope className="fas fa-envelope me-3"/>
                                tss@gracia.lasalle.com
                            </p>
                            <p>
                                <FaPhoneAlt className="fas fa-phone me-3"/> + 01 234 567 88
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                    topspeedstars.com
                </a>
            </div>
        </MDBFooter>
    );
}
