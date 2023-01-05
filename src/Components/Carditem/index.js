import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.scss"
function Carditem({title, image, description }) {
   
    return (
    <div className="carditem">
    
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className='line-title'></div>
        <Card.Img variant="top" src={`../images/${image}.jpg`}  />
        <Card.Text>
          {description.map(({id,paragraphe,classes}) =>{
           return <span key={id} className={classes}>{paragraphe}</span>
          })}
        </Card.Text>
        <Button variant="primary">En savoir plus</Button>
        <div className='line-btn'></div>
      </Card.Body>
      <Card.Footer></Card.Footer>
    
    </Card>
    </div>
  );
}

export default Carditem;
