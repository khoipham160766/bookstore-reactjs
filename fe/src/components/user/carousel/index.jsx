import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

const Slider = () => {
    return(
        <div className="style-carousel">
          <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://vbooks.exdomain.net/image/cache/catalog/slider/slider_2-1349x460.jpg"
                  alt=""
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://vbooks.exdomain.net/image/cache/catalog/slider/slider_1-1349x460.jpg"
                  alt=""
                />

                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;