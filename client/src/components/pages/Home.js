import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'

const Home = () => {
    return (


        <Carousel className="carousel">

            <Carousel.Item>
                <img className="d-block w-100"
                    src="images/Teatro-EDP-Gran-Via_2255784417_7880358_1300x731.jpg"
                    alt="First slide"/>
                <Carousel.Caption>
                    <h3>Teatro Gran Vía</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                    src="images/teatro la latina.jpg"
                    alt="Second slice" />
                <Carousel.Caption>
                    <h3>Teatro la Latina</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                    src="images/teatro principe gran via.png"
                    alt="Third slide" />
                <Carousel.Caption>
                    <h3>Teatro Príncipe Gran Vía</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                    src="images/reapertura-TEATRO-COFIDIS-ALCAZAR-GRUPO-SMEDIA-MADRID.jpg"
                    alt="Fourth slide" />
                <Carousel.Caption>
                    <h3>Teatro Alcázar</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                    src="images/teatro-español-madrid.jpeg"
                    alt="Fifth slide" />
                <Carousel.Caption>
                    <h3>Teatro Español</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                    src="images/teatro-maravillas_330x275.jpg"
                    alt="Sixth slide" />
                <Carousel.Caption>
                    <h3>Teatro Maravillas</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                    src="images/teatro-real.jpeg"
                    alt="Seventh slide" />
                <Carousel.Caption>
                    <h3>Teatro Real</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                    src="images/Teatros_del_Canal.jpg"
                    alt="Eight slide" />
                <Carousel.Caption>
                    <h3>Teatros del Canal</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
        
        </Carousel>
      

    )
}

export default Home