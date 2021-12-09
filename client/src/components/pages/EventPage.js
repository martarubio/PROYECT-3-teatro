import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import EventService from "../../services/event.service";
import EventList from './EventList';

class EventPage extends Component {
    constructor() {
        super()

        this.state = {
            events: []
        }

        this.service = new EventService()
    }

    componentDidMount() {
        this.refreshEvents()
    }

    refreshEvents = () => {
        this.service.getAllEvents()
            .then(response => {
                const events = response.data

                this.setState({ events: events })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                <h1>Lista de Espectáculos</h1>

                <EventList refreshEvents={this.refreshEvents} events={this.state.events} />

            </Container>
        )
    }
}

export default EventPage