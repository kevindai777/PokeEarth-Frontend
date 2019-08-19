import React from 'react'
import { Fragment } from 'react'
import PokemonPage from '../components/PokemonPage'
import PokemonDetails from '../components/PokemonDetails.js'
import ItemDetails from '../components/ItemDetails.js'
import Items from './Items'
import Profile from '../components/Profile'
import PokemonMap from '../components/PokemonMap'
import Kanto from '../components/Kanto'
import Johto from '../components/Johto'
import Hoenn from '../components/Hoenn'
import Sinnoh from '../components/Sinnoh'
import Unova from '../components/Unova'
import Kalos from '../components/Kalos'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import NoMatch from '../components/NoMatch'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from "react-router-dom"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faClipboardList, faCrow, faMap, faSignInAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class App extends React.Component {

  state = {
    query: null,
    generation: 'all',
    link: null,
    select: null,
    currentUser: null
  }

  componentDidMount() {
    const user_id = localStorage.user_id

    if (user_id) {
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": user_id
        }
      })
        .then(res => res.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors)
          } else {
            this.setState({
              currentUser: response
            })
          }
        })
    }
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      localStorage.user_id = user.id
      this.props.history.push("/")
    })
  }

  startQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  selectGeneration = (event) => {
    this.setState({
      generation: event.target.className
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("user_id")
      this.props.history.push("/login")
    })
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={() => <PokemonMap/>}/>
            <Route exact path="/profile" render={() => <Profile currentUser={this.state.currentUser} userId={localStorage.user_id}/>}/>
            <Route exact path="/login" render={() => <Login setUser={this.setUser}/>}/>
            <Route exact path="/signup" render={() => <SignUp setUser={this.setUser}/>}/>
            <Route exact path="/pokemons" render={() => <PokemonPage/>}/>
            <Route exact path="/items" render={() => <Items/>}/>
            <Route exact path="/Kanto" render={() => <Kanto/>}/>
            <Route exact path="/Johto" render={() => <Johto/>}/>
            <Route exact path="/Hoenn" render={() => <Hoenn/>}/>
            <Route exact path="/Sinnoh" render={() => <Sinnoh/>}/>
            <Route exact path="/Unova" render={() => <Unova/>}/>
            <Route exact path="/Kalos" render={() => <Kalos/>}/>
            <Route exact path="/pokemons/:id" component={PokemonDetails} />
            <Route exact path="/items/:id" component={ItemDetails} />
            <Route component={NoMatch} />
          </Switch>
        <SideNav style={{position: 'fixed'}}
          onSelect={(selected) => {
            if (selected === "logout") {
              this.logout()
            } else {
              this.props.history.push('/' + selected)
            }
          }}
        >
        <SideNav.Toggle />
          <SideNav.Nav defaultSelected="">
            <NavItem eventKey="">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} />
              </NavIcon>
              <NavText>
                <Link to="/">
                  Home
                </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="profile">
              <NavIcon>
                <FontAwesomeIcon icon={faAddressCard} />
              </NavIcon>
              <NavText>
                Profile
              </NavText>
            </NavItem>
            <NavItem eventKey="pokemons">
              <NavIcon>
                <FontAwesomeIcon icon={faCrow} />
              </NavIcon>
              <NavText>
                Pokemon
              </NavText>
            </NavItem>
            <NavItem eventKey="items">
              <NavIcon>
                <FontAwesomeIcon icon={faClipboardList} />
              </NavIcon>
              <NavText>
                Items
              </NavText>
            </NavItem>
            <NavItem eventKey="regions">
              <NavIcon>
                <FontAwesomeIcon icon={faMap} />
              </NavIcon>
              <NavText>
                Regions
              </NavText>
              <NavItem eventKey="kanto">
                <NavText>
                  Kanto
                </NavText>
              </NavItem>
              <NavItem eventKey="johto">
                <NavText>
                  Johto
                </NavText>
              </NavItem>
              <NavItem eventKey="hoenn">
                <NavText>
                  Hoenn
                </NavText>
              </NavItem>
              <NavItem eventKey="sinnoh">
                <NavText>
                  Sinnoh
                </NavText>
              </NavItem>
              <NavItem eventKey="unova">
                <NavText>
                  Unova
                </NavText>
              </NavItem>
              <NavItem eventKey="kalos">
                <NavText>
                  Kalos
                </NavText>
              </NavItem>
            </NavItem>
            <NavItem eventKey={localStorage.user_id ? "logout" : "login"}>
              <NavIcon>
                <FontAwesomeIcon icon={faSignInAlt} />
              </NavIcon>
              <NavText>
                {localStorage.user_id ? "Logout" : "Login"}
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>

      </div>
    )
  }
}

export default App;
