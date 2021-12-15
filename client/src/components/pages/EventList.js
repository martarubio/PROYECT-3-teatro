import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewEventForm from './NewEventForm'
import EventCard from './EventCard'
// import EventService from '../../services/event.service'

class EventList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
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
    render() {
        return (
            <div>
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
                    {this.props.events.map(elm => {

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