import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../services/auth.service'
import './SignUpPage.css'

class SignupPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            name: "",
            roles: "",
            email: "",
            events_attended: "",
        }
        // this.onValueChange = this.onValueChange.bind(this);
        this.authService = new AuthService();
    }
    //     onValueChange(event) {
    //         this.setState({
    //             selectedOption: event.target.value
    //         });

    // }

    handleSubmit = (e) => {
        e.preventDefault();

        this.authService.signup(this.state.username, this.state.password, this.state.name, this.state.roles, this.state.email, this.state.events_attended)
            .then(response => {
                this.props.storeUser(response.data)
            })
            .catch(err => console.log(err.response.data.message))
    }

    handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        this.setState({ [name]: value })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h2>Registro</h2><h6>(Rellena el formulario para crear una cuenta)</h6>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.username} name="username" type="text" placeholder="Elige un nombre de usuario" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" placeholder="Elige una contraseña" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" placeholder="Escribe tu nombre" />
                            </Form.Group>

                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={2}>
                                        Perfil
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Select name="roles" onChange={this.handleInputChange} aria-label="Escoge tu rol">
                                            <option>Escoge el rol</option>
                                            <option value="Administrador">Administrador</option>
                                            <option value="Usuario">Usuario</option>
                                        </Form.Select>

                                    </Col>
                                </Form.Group>
                            </fieldset>


                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email" type="text" placeholder="Escribe tu correo electrónico" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="events_attended">
                                <Form.Label>Espectáculos vistos</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.events_attended} name="events_attended" type="text" placeholder="Espectáculos vistos" />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{ background: 'rgb(131, 5, 5)' }} >
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default SignupPage