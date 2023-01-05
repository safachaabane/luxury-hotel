import React from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import adresse from "../../Assets/images/icon-home.png";
import position from "../../Assets/images/icon-map.png";
import phone from "../../Assets/images/icon-tel.png";
import email from "../../Assets/images/icon-mail.png";
import work from "../../Assets/images/icon-ma.png";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
function Footer() {
  
    return (
    <Container fluid className="footer">
    <Container className="footer-contain">
     <Row>
      <Col md={4}>
        <h1 className='footer-title'> NEWSLETTER</h1>
        <p>Inscivez-vous à notre lettre de diffusion ci-dessous afin  de connaitre nos derniéres actualités et promotions :</p>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon2"
        />
        <button id="button-addon2">
          S'inscrire
        </button>
      </InputGroup>
      </Col>
      <Col md={8}>
      <h1  className='footer-title'> CONTACTEZ-NOUS</h1>
      <Row>
        <Col md={4}><Row><Col xs={1} ><img alt="adresse" src={adresse}/></Col><Col  ><p><h5>LUXURY HOTEL</h5><p>Rue de la republique,19</p><p> 1082 Tunis</p><p> Tunisia</p></p></Col></Row>
        <Row className="contact-informations"><Col xs={1} > <img alt="adresse" src={position}/></Col><Col><p> <a className='block-information' href="/">Plan d'accés</a></p></Col></Row></Col>
        <Col md={4} className="contact-information">
        <Row ><Col xs={1}> <img alt="phone" src={phone}/></Col><Col> <p className='block-information'>Tél.: +21671000000</p></Col></Row>
        <Row ><Col xs={1}><img alt="email" src={email}/></Col><Col><p className='block-information'><a href="mailto:safa1chaabane@gmail.com">contact@luxuryhotel.com</a></p></Col></Row>
        <Row ><Col xs={1}><img alt="work" src={work}/></Col><Col><p className='block-information'>MA 800 50</p></Col></Row>
        </Col>
        <Col md={4} className="contact-information2">
         <FontAwesomeIcon icon={faFacebookSquare} size="3x"/>
         <FontAwesomeIcon icon={faTwitterSquare}  size="3x"/>
         <FontAwesomeIcon icon={faGooglePlusSquare}  size="3x"/>
        </Col>
      </Row>
      </Col>
     </Row>
    
     </Container>    
       <Row className='footer-bonde'></Row>
    </Container>
  );
}

export default Footer;
