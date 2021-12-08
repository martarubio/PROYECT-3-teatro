import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import EventService from "../../services/event.service";

class EventList extends Component {
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
                <h1>Listado de espectáculos</h1>

                <EventList refreshEvents={this.refreshEvents} events={this.state.events} />

            </Container>
        )
    }
}

export default EventList