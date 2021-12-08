import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventService from "../../services/event.service";
import EventList from "./EventList";

class EventDetails extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            genre: "",
            director: "",
            duration: "",
            theatre: "",
            location: "",
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

                this.setState({ title, genre, director, duration, theatre, location, days, time, price, imageUrl })
            })
            .catch(err => console.log(err))
    }

    render() {
        const {title, genre, director, duration, theatre, location, days, time, price, imageUrl} = this.state

        return (
            <Container>
                <h1>Detalles</h1>

                <Row className="justify-content-around">
                    <Col md={6} style={{ overflow: "hidden" }}>
                        <article>
                            <h2>{title}</h2>
                            <div>
                                <p>{genre}</p>
                                <hr />
                                <br />
                                <p>Director:{director}</p>
                                <p>Duración:{duration}</p>
                                <p>Teatro:{theatre}</p>
                                <p>Situación:{location}</p>
                                <p>Días:{days}</p>
                                <p>Horario:{time}</p>
                                <p>Precio:{price}</p>

                            </div>
                        </article>
                    </Col>
                    <Col md={4}>
                        <img src={imageUrl} alt={title} ></img>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EventDetails