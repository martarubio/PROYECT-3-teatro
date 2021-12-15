import React, { Component } from 'react'
import { Form, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import EventService from '../../services/event.service'

export default class NewEventForm extends Component {
    constructor(props) {
        super(props)

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

    handleSubmit = (e) => {
        e.preventDefault();

        this.service.createEvent(this.state)
            .then(response => {
                this.props.closeModal()
                this.props.refreshEvents()
            })
            .catch(err => console.log(err))

    }

    handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        this.setState({ [name]: value })
    }



    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.title} name="title" type="text" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="genre">
                    <Form.Label>Género</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.genre} name="genre" type="text" />
                </Form.Group> */}
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Género
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select name="genre" onChange={this.handleInputChange} aria-label="Escoge tu rol">
                                <option>Elige un género</option>
                                <option value="Comedia">Comedia</option>
                                <option value="Musical">Musical</option>
                                <option value="Danza">Danza</option>
                                <option value="Drama">Drama</option>
                                <option value="Tragedia">Tragedia</option>
                            </Form.Select>

                        </Col>
                    </Form.Group>
                </fieldset>



                <Form.Group className="mb-3" controlId="director">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.director} name="director" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duración</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.duration} name="duration" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="theatre">
                    <Form.Label>Teatro</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.theatre} name="theatre" type="text" />
                </Form.Group>
                {/* 
                <Form.Group className="mb-3">
                    <Form.Label>Situación</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.location} controlId="latitude" name="latitude" type="text" placeholder="latitud" />
                    <Form.Control onChange={this.handleInputChange} value={this.state.location} controlId="longitude" name="longitude" type="text" placeholder="longitud" />
                </Form.Group> */}
                <InputGroup className="mb-3">
                    <InputGroup.Text>Latitud/Longitud</InputGroup.Text>
                    <FormControl
                        name="latitude" value={this.state.latitude} onChange={this.handleInputChange} aria-label="latitude" />
                    <FormControl name="longitude" value={this.state.longitude} onChange={this.handleInputChange} aria-label="longitude" />
                </InputGroup>


                <Form.Group className="mb-3" controlId="days">
                    <Form.Label> Días </Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.days} name="days" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="time">
                    <Form.Label>Horario</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.time} name="time" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.price} name="price" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Url Imagen</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ background: 'rgb(131, 5, 5)' }} >
                    Crear
                </Button>
            </Form>
        )
    }
}


