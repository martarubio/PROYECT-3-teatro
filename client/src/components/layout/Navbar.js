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
        
        <Navbar className="flex-column">
            <Container>
                <Navbar.Brand href="#home" style={{ background: 'rgb(131, 5, 5)'}} >MadrizTeatro</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link as={Link} to="/" style={{color: 'white'}}>Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/event-list" style={{ color: 'white' }} >Cartelera</Nav.Link>
                    <Nav.Link as={Link} to="/history" style={{ color: 'white' }} >Histórico</Nav.Link>
                    {loggedUser ?
                        <Nav.Link as={"span"} onClick={logout}>Cerrar Sesión</Nav.Link>
                        :
                        <>
                            <Nav.Link as={Link} to="/signup" style={{ color: 'white' }}>Registro</Nav.Link>
                            <Nav.Link as={Link} to="/login" style={{ color: 'white' }} >Inicio Sesión</Nav.Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navigation
