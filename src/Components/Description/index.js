import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../Carditem';

import './index.scss'
var description =[
  {"id":"1","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"},
  {"id":"2","paragraphe":" Donec prci purus","classes":"grasText"},
  {"id":"3","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"},
  {"id":"4","paragraphe":" Vovabus faucimus","classes":"grasText"},
  {"id":"5","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit Lorem ipsum dolor sit amet consectetuer adpiscing elit","classes":"simpleText"},
  {"id":"6","paragraphe":" Vovabus faucimus","classes":"grasText"},
  {"id":"7","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"}
]
var cards =[
  {"id":"1","title":"SPAS","image":"img-bx1", "description":[
    {"id":"1","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"},
    {"id":"2","paragraphe":" Donec prci purus","classes":"grasText"},
    {"id":"3","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"}
   
  ]},
  {"id":"2","title":"RESTAURANTS","image":"img-bx2", "description":[
    {"id":"1","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"},
    {"id":"2","paragraphe":" Donec prci purus","classes":"grasText"},
    {"id":"3","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"}
   
  ]},
  {"id":"3","title":"SUITES","image":"img-bx3", "description":[
    {"id":"1","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"},
    {"id":"2","paragraphe":" Donec prci purus","classes":"grasText"},
    {"id":"3","paragraphe":" Lorem ipsum dolor sit amet consectetuer adpiscing elit.","classes":"simpleText"}
   
  ]},
 
]
function Description() {
  function DescriptionText() {
    return description.map(({id,paragraphe,classes}) => (
      <span key={id} className={classes}> {paragraphe} </span>
    ));
  }

  function Cards() {
    return cards.map(({id,title,image,description}) => (
      <Col className='card-col' key={id} lg={4} md={12}>
      <Card  title={title} image={image} description={description} />
      </Col>

    ));
  }
    return (
    <Container fluid className="description">


<h1 className='description-title1'>Bienvenue sur notre site web </h1>
<h2 className='description-sub-title'> Lorem ipsum dolor sit amet consectetuer adpiscing elit</h2>
<div className='description-text'><DescriptionText/></div>
<div className='description-title-block'>
<span className='line'></span>
<h1 className='description-title'>en savoir plus</h1>
<span className='line'></span>
</div>
<Container>
<Row className="description-cards">
<Cards/>
</Row>
</Container>
    </Container>
  );
}

export default Description;
