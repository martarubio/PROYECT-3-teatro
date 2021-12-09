import React from 'react'
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth.service'
// import Nav from 'react-bootstrap/Nav'

const authService = new AuthService()


const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {
        authService.logout()
            .then(response => storeUser(null))
            .catch(err => console.log(err))
    }

    return (
        <Navbar bg="dark" variant="dark" className="flex-column">
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Nav className="me-auto">

                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/event-page">Cartelera</Nav.Link>
                    <Nav.Link as={Link} to="/">Histórico</Nav.Link>
                    {loggedUser ?
                        <Nav.Link as={"span"} onClick={logout}>Cerrar Sesión</Nav.Link>
                        :
                        <>
                            <Nav.Link as={Link} to="/signup">Registro</Nav.Link>
                            <Nav.Link as={Link} to="/login">Inicio Sesión</Nav.Link>


                        </>
                    }
                </Nav>
            </Container>
        </Navbar>


    )
}

export default Navigation
