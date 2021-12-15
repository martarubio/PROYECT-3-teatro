import React, { Component } from "react";
import {Container, Row, Col, Button, Nav } from "react-bootstrap";
import EventService from "../../services/event.service";
import './EventDetails.css'
import { Link } from 'react-router-dom'
// import EventList from './EventList';

class EventDetails extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            genre: "",
            director: "",
            duration: "",
            theatre: "",
            latitude: "",
            longitude: "",
            days: "",
            time: "",
            price: "",
            imageUrl: "",
        }

        this.service = new EventService()
    }

    componentDidMount() {
        const id = this.props.match.params.id

        this.service.getOneEvent(id)
            .then(response => {
                const { title, genre, director, duration, theatre, location, days, time, price, imageUrl } = response.data

                this.setState({ title, genre, director, duration, theatre, latitude: location.coordinates[0], longitude: location.coordinates[1], days, time, price, imageUrl })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { title, genre, director, duration, theatre, latitude, longitude, days, time, price, imageUrl } = this.state

        return (
            <Container>
                <center><h1>Detalles</h1></center>
                <Row className="justify-content-around">
                    <Col md={6} style={{ overflow: "hidden" }}>
                        <article>
                            <h2>{title}</h2>
                            <div>
                                <p>Género: {genre}</p>
                                <p>Director: {director}</p>
                                <p>Duración: {duration}</p>
                                <p>Teatro: {theatre}</p>
                                {/* <p>Situación: latitud {latitude} / longitud {longitude}</p> */}
                                <Nav.Link as={Link} to={`/event-map/${latitude}/${longitude}`}>
                                     <Button variant="primary" style={{ background: 'rgb(131, 5, 5)' }} >Plano</Button>
                                </Nav.Link>
                                <p>Días: {days}</p>
                                <p>Horario: {time}</p>
                                <p>Precio: {price}</p>

                            </div>
                            <a href="https://www.ticketmaster.es">
                                <left><Button variant="primary" style={{ background: 'rgb(131, 5, 5)' }}>Compra de entradas</Button></left>
                            </a>

                        </article>
                    </Col>
                    <Col md={4}>
                        <img className="details_image" src={imageUrl} alt={title} ></img>
                    </Col>
                </Row >
            </Container >
        )
    }
}

export default EventDetails