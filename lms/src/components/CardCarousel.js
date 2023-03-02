import {Carousel } from 'react-bootstrap';

function CardCarousel(props) {
  return (
    <div className='mb-3 d-block d-flex justify-content-center '> 
    <Carousel style={{width:"30rem"}} classname="CardCarousel " variant="dark" fade touch >
      <Carousel.Item><img className="d-block w-100" src={props.images1} alt={props.images1}/></Carousel.Item>
      <Carousel.Item><img className="d-block w-100" src={props.images2} alt={props.images2}/></Carousel.Item>
      <Carousel.Item><img className="d-block w-100" src={props.images3} alt={props.images3}/></Carousel.Item>
      <Carousel.Item><img className="d-block w-100" src={props.images4} alt={props.images4}/></Carousel.Item>
      <Carousel.Item><img className="d-block w-100" src={props.images5} alt={props.images5}/></Carousel.Item>
      <Carousel.Item><img className="d-block w-100" src={props.images6} alt={props.images6}/></Carousel.Item>
    
    </Carousel>
    </div>
  );
}

export default CardCarousel;