import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewEventForm from './NewEventForm'
import EventCard from './EventCard'
import Search from './Search'

class EventList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            filteredEvents: this.props.events
        }
    }



    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    filterEvents = (e) => {
        const filtered = this.props.events.filter((event) => {
            //compara en minusculas el titulo del evento con el texto de la searchbar en minusculas
            return event.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        })
        //actualiza la lista con la que pintamos
        this.setState({ filteredEvents: filtered })
    }

    render() {
        return (


            <div>
                <Search filter={this.filterEvents} />

                <Button onClick={this.openModal} style={{ background: 'rgb(131, 5, 5)' }} >Crear un nuevo espectáculo</Button>

                <Modal
                    show={this.state.showModal}
                    backdrop="static"
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo Espectáculo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewEventForm refreshEvents={this.props.refreshEvents} closeModal={this.closeModal} />
                    </Modal.Body>

                </Modal>
                <Row>
                    {this.state.filteredEvents.map(elm => {

                        return (
                            <Col key={elm._id}>
                                <EventCard{...elm} />
                            </Col>
                        )
                    })
                    }
                </Row>
            </div>


        )
    }
}

export default EventList