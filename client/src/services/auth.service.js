import axios from 'axios'

class AuthService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5005/api',
            withCredentials: true
        })
    }

    signup = (username, password, name, roles, email, events_attended) => this.app.post("/signup", { username, password, name, roles, email, events_attended })
    login = (username, password) => this.app.post("/login", { username, password})
    logout = () => this.app.get("/logout")
    isloggedin = () => this.app.get("/isloggedin")
}

export default AuthService