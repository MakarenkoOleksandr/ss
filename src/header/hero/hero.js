import { Carousel } from "react-bootstrap";
import hero1 from "./hero-1.jpg";
import hero2 from "./hero-2.jpg";
import hero3 from "./hero-3.jpg";


export default function Hero() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={hero1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={hero2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={hero3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}