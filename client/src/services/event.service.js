import axios from 'axios'

class EventService {
    constructor() {
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL
        })
        // withCredentials: true
    }

    getAllEvents = () => this.app.get("/allEvents")
    getOneEvent = (id) => this.app.get(`/event/${id}`)
    createEvent = (eventData) => this.app.post("/newEvent", eventData)
}

export default EventService