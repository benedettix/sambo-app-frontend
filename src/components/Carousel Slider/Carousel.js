import Carousel from "react-bootstrap/Carousel";
import "./Carousel.scss";
import "animate.css";
import { Link } from "react-router-dom";
function CarouselSlider() {
  return (
    <div className="car-wrapper">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="/assets/slide3.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="animate__animated animate__fadeInUpBig">
            <h3 className="carousel-heading">SAMBO KLUB NERETVA</h3>
            <Link to="/raspored" className="carousel-btn">
              Pridruži se
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/slide2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="animate__animated animate__fadeInUpBig">
            <h3 className="carousel-heading">POČNITE TRENIRATI DANAS</h3>
            <Link to="/raspored" className="carousel-btn">
              Pridruži se
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/slide1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="animate__animated animate__fadeInUpBig">
            <h3 className="carousel-heading">POGLEDAJTE VRIJEME TRENINGA</h3>
            <Link to="/raspored" className="carousel-btn">
              Pridruži se
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
