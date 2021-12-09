import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import './EventPage.css'

const EventCard = ({ _id, title, genre, director, duration, theatre, location, days, time, price, imageUrl }) => {
    return (
        <Card className="event-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {genre}.
                </Card.Text>

                <Link to={`/event/${_id}`}>
                    <Button variant="primary">Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default EventCard