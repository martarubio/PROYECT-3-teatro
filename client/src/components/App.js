import { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import EventPage from './pages/EventPage';
import Navbar from './layout/Navbar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AuthService from '../services/auth.service';
import Footer from './layout/Footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedUser: undefined
    }

    this.authService = new AuthService()
  }

  componentDidMount() {
    this.authService.isloggedin()
      .then(response => this.storeUser(response.data))
      .catch(err => this.storeUser(null))
  }

  storeUser = (user) => {
    this.setState({ loggedUser: user })
  }


  render() {
    return (
      <>

        <Navbar storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

        <main>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact render={() =><Home/>} />
              <Route path="/event-page" exact render={() =><EventPage/>} />
              <Route path="/event/:id" render={(props) =><EventDetails {...props} />} />

              {this.state.loggedUser ?
                <Redirect to="event-page" />
                :
                <>
                  <Route path="/signup" render={(props) =><SignupPage {...props} storeUser={this.storeUser} />} />
                  <Route path="/login" render={(props) =><LoginPage {...props} storeUser={this.storeUser} />} />
                </>
              }
            </Switch>
          </BrowserRouter>
        </main>

        <Footer />
      </>
    )
  }
}

export default App;


