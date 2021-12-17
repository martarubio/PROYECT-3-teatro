import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'



const Home = () => {
    return (
        <>
            <Carousel className="carousel">

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/Teatro-EDP-Gran-Via_2255784417_7880358_1300x731.jpg"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>Teatro Gran Vía</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/teatro la latina.jpg"
                        alt="Second slice" />
                    <Carousel.Caption>
                        <h3>Teatro la Latina</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/teatro principe gran via.png"
                        alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Teatro Príncipe Gran Vía</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/reapertura-TEATRO-COFIDIS-ALCAZAR-GRUPO-SMEDIA-MADRID.jpg"
                        alt="Fourth slide" />
                    <Carousel.Caption>
                        <h3>Teatro Alcázar</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/teatro-español-madrid.jpeg"
                        alt="Fifth slide" />
                    <Carousel.Caption>
                        <h3>Teatro Español</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/teatro-maravillas.jpg"
                        alt="Sixth slide" />
                    <Carousel.Caption>
                        <h3>Teatro Maravillas</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/teatro-real.jpeg"
                        alt="Seventh slide" />
                    <Carousel.Caption>
                        <h3>Teatro Real</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/Teatros_del_Canal.jpg"
                        alt="Eight slide" />
                    <Carousel.Caption>
                        <h3>Teatros del Canal</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70"
                        src="images/matadero.jpg"
                        alt="Nineth slide" />
                    <Carousel.Caption>
                        <h3>Matadero</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <div className="recomended">
                <h1>RECOMENDADOS</h1>
                <center><h3>Próximamente</h3></center>
                <center><h2>"SILENCIO"</h2></center>
                <p>UNA COPRODUCCIÓN DE AVANCE PRODUCCIONES TEATRALES</p><p>Y ENTRECAJAS PRODUCCIONES TEATRALES</p>
                <p>Naves del Español (Matadero)</p>
                <p>Del 7/1 al 13/2 De Martes a Domingo a las 19:00 h.</p>
                <p>Dirección: Juan Mayorga</p>
                <p>Intérprete: Blanca Portillo</p>
                <div>
                    <img src="https://madridesteatro.com/wp-content/uploads/2021/08/SILENCIO-en-el-Teatro-Espanol-Madrid-Es-Teatro-2.jpeg" alt="silencio" />
                </div>





            </div>



            )
        </>
    )


}


export default Home
