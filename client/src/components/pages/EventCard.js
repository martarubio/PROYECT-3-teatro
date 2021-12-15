import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './EventCard.css'

// import './EventPage.css'

const EventCard = ({ _id, title, genre, director, duration, theatre, latitude, longitude, days, time, price, imageUrl }) => {
    return (
        <Card className="event-card" style={{ width: '15rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title><center>{title}</center></Card.Title>
                <Card.Text>
                    <center>{genre}</center>
                </Card.Text>

                <Link to={`/event/${_id}`}>
                    <center> <Button variant="primary" style={{ background: 'rgb(131, 5, 5)' }} >Detalles</Button></center>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default EventCard