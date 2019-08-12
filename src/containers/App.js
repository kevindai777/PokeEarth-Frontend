import React from 'react'
import { Fragment } from 'react'
import PokemonPage from '../components/PokemonPage'
import PokemonDetails from '../components/PokemonDetails.js'
import ItemDetails from '../components/ItemDetails.js'
import Items from './Items'
import PokemonMap from '../components/PokemonMap'
import Kanto from '../components/Kanto'
import Johto from '../components/Johto'
import Hoenn from '../components/Hoenn'
import Sinnoh from '../components/Sinnoh'
import Unova from '../components/Unova'
import Kalos from '../components/Kalos'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from "react-router-dom"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faClipboardList, faCrow, faMap } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class App extends React.Component {

  state = {
    query: null,
    generation: 'all',
    link: null
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

  render() {
    console.log(this.state.link)
    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PokemonMap}/>
            <Route exact path="/pokemons" component={PokemonPage}/>
            <Route exact path="/items" component={Items}/>
            <Route exact path="/Kanto" component={Kanto}/>
            <Route exact path="/Johto" component={Johto}/>
            <Route exact path="/Hoenn" component={Hoenn}/>
            <Route exact path="/Sinnoh" component={Sinnoh}/>
            <Route exact path="/Unova" component={Unova}/>
            <Route exact path="/Kalos" component={Kalos}/>
            <Route exact path="/pokemons/:id" component={PokemonDetails} />
            <Route exact path="/items/:id" component={ItemDetails} />
          </Switch>
        </BrowserRouter>

        <SideNav
          onSelect={(selected) => {
            console.log(selected)
          }}
        >
        <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} />
              </NavIcon>
              <NavText>
                Home
              </NavText>
            </NavItem>
            <NavItem eventKey="pokemon">
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
          </SideNav.Nav>
        </SideNav>

      </div>
    )
  }
}

export default App;
