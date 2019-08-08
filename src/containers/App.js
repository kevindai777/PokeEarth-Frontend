import React from 'react';
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

        <SideNav
          onSelect={(selected) => {
            this.setState({
              link: selected
            })
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="/">

            <NavItem eventKey="/">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Home
              </NavText>
            </NavItem>

            <NavItem eventKey="pokemons">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Pokemon
              </NavText>
            </NavItem>

            <NavItem eventKey="items">
              <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Items
              </NavText>
            </NavItem>

          </SideNav.Nav>
        </SideNav>

        {
          this.state.link ?
            <Redirect to={{
                pathname: '/' + this.state.link
              }}
            />
            :
            null
        }

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

      </div>
    )
  }
}

export default App;
