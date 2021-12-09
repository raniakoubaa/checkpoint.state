import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Profil.css'
import ProfilPhoto from './ProfilPhoto'
import { Button } from 'react-bootstrap';
import {BsFillPersonCheckFill} from "react-icons/bs";

const Profil = ({ name, handlclick, bio, descrip, professional }) => {
    return (
        <div>
            <Container>
                <Row className="rowProfil">
                    <Col >
                        <ProfilPhoto>
                            <img src="https://i.pinimg.com/280x280_RS/76/ef/a1/76efa10ff11f9c2800ce12826c0284d5.jpg" className="rounded-circle" alt="" width="150px" height="150px" />
                        </ProfilPhoto>
                    </Col>
                    <Col>
                        <div className="text-profil">
                            <div className="ProfilName">
                                <div style={{ display: 'flex' }}>
                                    <p style={{fontSize:"28px"}}>{name}</p>
                                    <Button variant="light" onClick={() => handlclick(name)} style={{ paddingTop: "5px", paddingRight: "8px", height: "30px", width: "112px", border:"1px solid #DBDBDB" }}>
                                        <div style={{ fontSize: "14px", color:"black" }}> Modifier profil</div>
                                    </Button>
                                    <Button variant="light" style={{ paddingTop: "5px", paddingRight: "8px", height: "30px", width: "75px", border:"1px solid #DBDBDB" }}>
                                        <div style={{  height: "28px", width:"24px"}}><BsFillPersonCheckFill/></div>
                                        </Button>
                                </div>
                            </div>
                            <p style={{fontSize:"16px"}}>{bio}</p>
                            <p>{professional}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profil
