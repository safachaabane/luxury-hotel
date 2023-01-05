import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './index.scss';
import next from "../../Assets/images/next-galerie.png";
import prev from "../../Assets/images/prev-galerie.png";
import logoHover from "../../Assets/images/hover-box-galerie.png"
const Photos=["img-gal1","img-gal2","img-gal3","img-gal1","img-gal2","img-gal3","img-gal1","img-gal2"]
function Gallerie() {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

    return (
    <Container  fluid className="gallerie">
   
    <Container className="gallerie-contain"> 
    <span className='line'></span>
    <span className='gallerie-title'>galerie photos</span>
    <span className='line'></span>
    
    <Row>
  <Col xs={1}>
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -230);
          }}
          disabled={arrowDisable}
        >
           <img src={prev} alt="prev"/>
        </button>
       
      </Col>
      <Col xs={10}>
      <div class="img-container" ref={elementRef}>
        {Photos.map((item, i) => (
          <div   className='img-container-item'
            key={i}>
          <img
            loading="lazy"
            alt={item}
            src={`../gallerie/${item}.jpg`}
          />
          <div className='logoHover' >
          <img alt="hover logo" src={logoHover}/>
          </div>
          </div>
        ))}
        </div>
      </Col>
      <Col xs={1}>
      <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 230);
          }}
        >
        <img src={next} alt="next"/>
        </button>
      </Col>
      </Row>
    </Container>
    </Container>
  );
}

export default Gallerie;
