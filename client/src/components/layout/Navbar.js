import React from 'react'
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth.service'

const authService = new AuthService()


const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {
        authService.logout()
            .then(response => storeUser(null))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Nav variant="tabs" defaultActiveKey="/home" className="flex-column">
                <Nav.Item>
                    <Nav.Link href="/home">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/events">Cartelera</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Histórico</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login" eventKey="link-3">Registro</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Contacto</Nav.Link>
                </Nav.Item>

            </Nav>
        </Container>

    )
}

export default Navigation
