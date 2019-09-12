import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage.js'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'
import { ButtonToolbar, Button } from 'react-bootstrap'
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";


class Johto extends React.Component {

  state = {
    data: null,
    johtoPokemon: null,
    locations: null,
    area: 'johto-map',
    pokemonLocations: null,
    query: null,
    locationQuery: null,
    moves: null
  }

  componentWillMount() {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemon_locations/johto')
      .then(res => res.json())
      .then(locations =>
        this.setState({
          pokemonLocations: locations
        })
      )
    fetch('https://vast-citadel-58007.herokuapp.com/moves')
      .then(res => res.json())
      .then(moves =>
        this.setState({
          moves: moves
        })
      )
  }

  componentDidMount() {
    this.renderThisData()
    this.updateCanvas()
  }

  renderThisData = () => {

    fetch('https://pokeapi.co/api/v2/pokedex/3/')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons.pokemon_entries
        })
      })

    fetch('https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          johtoPokemon: pokemons.results
        })
      })

    fetch('https://pokeapi.co/api/v2/region/2/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          locations: region.locations
        })
      )
  }

  updateCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d')

    const image = new Image()
    image.src = './images/johto/johto.png'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 500, 500);
    }
  }

  getInfo = (event) => {
    let curleft = 0, curtop = 0;
    let obj = document.getElementsByClassName("map")[0]
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft
        curtop += obj.offsetTop
      }
      while (obj = obj.offsetParent) {
        if ((event.pageX - curleft) < 456 && (event.pageX - curleft) > 437 && (event.pageY - curtop) < 408 && (event.pageY - curtop) > 382) {
          this.setState({
            area: 'new-bark-town-area'
          })
          this.fetchMe(184)
        } else if ((event.pageX - curleft) < 434 && (event.pageX - curleft) > 344 && (event.pageY - curtop) < 408 && (event.pageY - curtop) > 382) {
          this.setState({
            area: 'johto-route-29-area'
          })
          this.fetchMe(185)
        } else if ((event.pageX - curleft) < 345 && (event.pageX - curleft) > 321 && (event.pageY - curtop) < 408 && (event.pageY - curtop) > 382) {
          this.setState({
            area: 'cherrygrove-city-area'
          })
          this.fetchMe(186)
        } else if ((event.pageX - curleft) < 349 && (event.pageX - curleft) > 318 && (event.pageY - curtop) < 379 && (event.pageY - curtop) > 213) {
          this.setState({
            area: 'johto-route-30-area'
          })
          this.fetchMe(187)
        } else if ((event.pageX - curleft) < 349 && (event.pageX - curleft) > 297 && (event.pageY - curtop) < 240 && (event.pageY - curtop) > 209) {
          this.setState({
            area: 'johto-route-31-area'
          })
          this.fetchMe(188)
        } else if ((event.pageX - curleft) < 271 && (event.pageX - curleft) > 182 && (event.pageY - curtop) < 240 && (event.pageY - curtop) > 209) {
          this.setState({
            area: 'johto-route-36-area'
          })
          this.fetchMe(209)
        } else if ((event.pageX - curleft) < 185 && (event.pageX - curleft) > 162 && (event.pageY - curtop) < 240 && (event.pageY - curtop) > 209) {
          this.setState({
            area: 'national-park-area'
          })
          this.fetchMe(207)
        } else if ((event.pageX - curleft) < 187 && (event.pageX - curleft) > 159 && (event.pageY - curtop) < 309 && (event.pageY - curtop) > 238) {
          this.setState({
            area: 'johto-route-35-area'
          })
          this.fetchMe(206)
        } else if ((event.pageX - curleft) < 187 && (event.pageX - curleft) > 159 && (event.pageY - curtop) < 359 && (event.pageY - curtop) > 310) {
          this.setState({
            area: 'goldenrod-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 187 && (event.pageX - curleft) > 159 && (event.pageY - curtop) < 449 && (event.pageY - curtop) > 361) {
          this.setState({
            area: 'johto-route-34-area'
          })
          this.fetchMe(205)
        } else if ((event.pageX - curleft) < 187 && (event.pageX - curleft) > 159 && (event.pageY - curtop) < 479 && (event.pageY - curtop) > 449) {
          this.setState({
            area: 'ilex-forest-area'
          })
          this.fetchMe(204)
        } else if ((event.pageX - curleft) < 216 && (event.pageX - curleft) > 183 && (event.pageY - curtop) < 480 && (event.pageY - curtop) > 447) {
          this.setState({
            area: 'johto-route-33-area'
          })
          this.fetchMe(201)
        } else if ((event.pageX - curleft) < 237 && (event.pageX - curleft) > 215 && (event.pageY - curtop) < 480 && (event.pageY - curtop) > 447) {
          this.setState({
            area: 'azalea-town-area'
          })

        } else if ((event.pageX - curleft) < 295 && (event.pageX - curleft) > 271 && (event.pageY - curtop) < 480 && (event.pageY - curtop) > 447) {
          this.setState({
            area: 'slowpoke-well-1f'
          })
          this.fetchMe(202)
        } else if ((event.pageX - curleft) < 271 && (event.pageX - curleft) > 237 && (event.pageY - curtop) < 480 && (event.pageY - curtop) > 447) {
          this.setState({
            area: 'johto-route-33-area'
          })
          this.fetchMe(201)
        } else if ((event.pageX - curleft) < 296 && (event.pageX - curleft) > 271 && (event.pageY - curtop) < 423 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'johto-route-32-area'
          })
          this.fetchMe(192)
        } else if ((event.pageX - curleft) < 296 && (event.pageX - curleft) > 271 && (event.pageY - curtop) < 449 && (event.pageY - curtop) > 423) {
          this.setState({
            area: 'union-cave-1f'
          })
          this.fetchMe(198)
        } else if ((event.pageX - curleft) < 268 && (event.pageX - curleft) > 245 && (event.pageY - curtop) < 294 && (event.pageY - curtop) > 267) {
          this.setState({
            area: 'ruins-of-alph-outside'
          })
          this.fetchMe(193)
        } else if ((event.pageX - curleft) < 245 && (event.pageX - curleft) > 217 && (event.pageY - curtop) < 213 && (event.pageY - curtop) > 192) {
          this.setState({
            area: 'johto-route-37-area'
          })
          this.fetchMe(210)
        } else if ((event.pageX - curleft) < 245 && (event.pageX - curleft) > 218 && (event.pageY - curtop) < 192 && (event.pageY - curtop) > 145) {
          this.setState({
            area: 'ecruteak-city-area'
          })
          this.fetchMe(211)
        } else if ((event.pageX - curleft) < 222 && (event.pageX - curleft) > 200 && (event.pageY - curtop) < 169 && (event.pageY - curtop) > 142) {
          this.setState({
            area: 'ecruteak-city-area'
          })
          this.fetchMe(211)
        } else if ((event.pageX - curleft) < 198 && (event.pageX - curleft) > 100 && (event.pageY - curtop) < 192 && (event.pageY - curtop) > 145) {
          this.setState({
            area: 'johto-route-38-area'
          })
          this.fetchMe(222)
        } else if ((event.pageX - curleft) < 263 && (event.pageX - curleft) > 245 && (event.pageY - curtop) < 192 && (event.pageY - curtop) > 145) {
          this.setState({
            area: 'johto-route-42-area'
          })
          this.fetchMe(236)
        } else if ((event.pageX - curleft) < 286 && (event.pageX - curleft) > 264 && (event.pageY - curtop) < 192 && (event.pageY - curtop) > 145) {
          this.setState({
            area: 'mt-mortar-1f'
          })
          this.fetchMe(237)
        } else if ((event.pageX - curleft) < 329 && (event.pageX - curleft) > 287 && (event.pageY - curtop) < 192 && (event.pageY - curtop) > 145) {
          this.setState({
            area: 'johto-route-42-area'
          })
          this.fetchMe(236)
        } else if ((event.pageX - curleft) < 353 && (event.pageX - curleft) > 330 && (event.pageY - curtop) < 192 && (event.pageY - curtop) > 145) {
          this.setState({
            area: 'mahogany-town-area'
          })

        } else if ((event.pageX - curleft) < 390 && (event.pageX - curleft) > 353 && (event.pageY - curtop) < 192 && (event.pageY - curtop) > 145) {
          this.setState({
            area: 'johto-route-44-area'
          })
          this.fetchMe(243)
        } else if ((event.pageX - curleft) < 410 && (event.pageX - curleft) > 390 && (event.pageY - curtop) < 192 && (event.pageY - curtop) > 145) {
          this.setState({
            area: 'ice-path-1f'
          })
          this.fetchMe(244)
        } else if ((event.pageX - curleft) < 436 && (event.pageX - curleft) > 415 && (event.pageY - curtop) < 170 && (event.pageY - curtop) > 142) {
          this.setState({
            area: 'blackthorn-city-area'
          })
          this.fetchMe(249)
        } else if ((event.pageX - curleft) < 356 && (event.pageX - curleft) > 327 && (event.pageY - curtop) < 141 && (event.pageY - curtop) > 53) {
          this.setState({
            area: 'johto-route-43-area'
          })
          this.fetchMe(241)
        } else if ((event.pageX - curleft) < 350 && (event.pageX - curleft) > 330 && (event.pageY - curtop) < 53 && (event.pageY - curtop) > 27) {
          this.setState({
            area: 'lake-of-rage-area'
          })
          this.fetchMe(242)
        } else if ((event.pageX - curleft) < 435 && (event.pageX - curleft) > 414 && (event.pageY - curtop) < 136 && (event.pageY - curtop) > 112) {
          this.setState({
            area: 'dragons-den-area'
          })
          this.fetchMe(250)
        } else if ((event.pageX - curleft) < 439 && (event.pageX - curleft) > 412 && (event.pageY - curtop) < 310 && (event.pageY - curtop) > 169) {
          this.setState({
            area: 'johto-route-45-area'
          })
          this.fetchMe(251)
        } else if ((event.pageX - curleft) < 421 && (event.pageX - curleft) > 394 && (event.pageY - curtop) < 309 && (event.pageY - curtop) > 276) {
          this.setState({
            area: 'johto-route-45-area'
          })
          this.fetchMe(251)
        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 394 && (event.pageY - curtop) < 379 && (event.pageY - curtop) > 308) {
          this.setState({
            area: 'johto-route-46-area'
          })
          this.fetchMe(252)
        } else if ((event.pageX - curleft) < 102 && (event.pageX - curleft) > 75 && (event.pageY - curtop) < 187 && (event.pageY - curtop) > 142) {
          this.setState({
            area: 'johto-route-39-area'
          })
          this.fetchMe(223)
        } else if ((event.pageX - curleft) < 102 && (event.pageX - curleft) > 54 && (event.pageY - curtop) < 214 && (event.pageY - curtop) > 186) {
          this.setState({
            area: 'olivine-city-area'
          })
          this.fetchMe(224)
        } else if ((event.pageX - curleft) < 54 && (event.pageX - curleft) > 31 && (event.pageY - curtop) < 207 && (event.pageY - curtop) > 179) {
          this.setState({
            area: 'battle-frontier-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 82 && (event.pageX - curleft) > 54 && (event.pageY - curtop) < 308 && (event.pageY - curtop) > 214) {
          this.setState({
            area: 'johto-sea-route-40-area'
          })
          this.fetchMe(225)
        } else if ((event.pageX - curleft) < 82 && (event.pageX - curleft) > 54 && (event.pageY - curtop) < 335 && (event.pageY - curtop) > 308) {
          this.setState({
            area: 'whirl-islands-1f'
          })
          this.fetchMe(227)
        } else if ((event.pageX - curleft) < 82 && (event.pageX - curleft) > 47 && (event.pageY - curtop) < 367 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'johto-sea-route-41-area'
          })
          this.fetchMe(226)
        } else if ((event.pageX - curleft) < 47 && (event.pageX - curleft) > 25 && (event.pageY - curtop) < 386 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'cianwood-city-area'
          })
          this.fetchMe(235)
        } else if ((event.pageX - curleft) < 25 && (event.pageX - curleft) > 0 && (event.pageY - curtop) < 386 && (event.pageY - curtop) > 365) {
          this.setState({
            area: 'johto-route-47-area'
          })
          this.fetchMe(255)
        } else if ((event.pageX - curleft) < 16 && (event.pageX - curleft) > 0 && (event.pageY - curtop) < 365 && (event.pageY - curtop) > 351) {
          this.setState({
            area: 'johto-route-48-area'
          })
          this.fetchMe(286)
        } else if ((event.pageX - curleft) < 14 && (event.pageX - curleft) > 0 && (event.pageY - curtop) < 351 && (event.pageY - curtop) > 326) {
          this.setState({
            area: 'safari-zone-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 498 && (event.pageX - curleft) > 480 && (event.pageY - curtop) < 304 && (event.pageY - curtop) > 279) {
          this.setState({
            area: 'mt-silver-outside'
          })
          this.fetchMe(269)
        } else if ((event.pageX - curleft) < 409 && (event.pageX - curleft) > 348 && (event.pageY - curtop) < 243 && (event.pageY - curtop) > 216) {
          this.setState({
            area: 'dark-cave-violet-city-entrance'
          })
          this.fetchMe(253)
        } else if ((event.pageX - curleft) < 318 && (event.pageX - curleft) > 296 && (event.pageY - curtop) < 208 && (event.pageY - curtop) > 187) {
          this.setState({
            area: 'sprout-tower-2f'
          })
          this.fetchMe(253)
        } else if ((event.pageX - curleft) < 496 && (event.pageX - curleft) > 485 && (event.pageY - curtop) < 410 && (event.pageY - curtop) > 376) {
          this.setState({
            area: 'tohjo-falls-area'
          })
          this.fetchMe(316)
        } else if ((event.pageX - curleft) < 216 && (event.pageX - curleft) > 200 && (event.pageY - curtop) < 138 && (event.pageY - curtop) > 115) {
          this.setState({
            area: 'burned-tower-1f'
          })
          this.fetchMe(212)
        } else if ((event.pageX - curleft) < 294 && (event.pageX - curleft) > 270 && (event.pageY - curtop) < 240 && (event.pageY - curtop) > 209) {
          this.setState({
            area: 'violet-city-area'
          })
          this.fetchMe(189)
        }
      }
    }
    return undefined
  }

  determineImage = () => {
    return <img src={`/images/johto/${this.state.area}.png`}/>
  }

  getNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let johtoPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nativePokemonLocations = foundPokemonLocations.filter(instance => johtoPokemonNames.includes(instance.pokemon.name))
    if (nativePokemonLocations.length > 0) {
      return nativePokemonLocations.map((instance, index) => <PokemonCard
        key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]} name={instance.pokemon.name} url={instance.pokemon.url} id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
        allMoves={this.state.moves}
      />)
    } else {
      return <i>None found!</i>
    }
  }

  getNonNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let johtoPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !johtoPokemonNames.includes(instance.pokemon.name))
    if (nonNativePokemonLocations.length > 0) {
      return nonNativePokemonLocations.map((instance, index) =>
      <PokemonCard
        key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
        name={instance.pokemon.name}
        url={instance.pokemon.url}
        id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
        allMoves={this.state.moves}
      />)
    } else {
      return <i>None found!</i>
    }
  }

  startQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  startLocationQuery = (event) => {
    this.setState({
      locationQuery: event.target.value
    })
  }

  checkQuery = () => {
    if (this.state.query && !this.state.locationQuery) {
      return this.filterByName()
    } else if (!this.state.query && this.state.locationQuery) {
      return this.filterByLocation()
    } else if (!this.state.query && !this.state.locationQuery) {
      if (this.state.johtoPokemon) {
        return this.state.johtoPokemon.map((pokemon, index) =>
            <PokemonCard
              key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
              name={pokemon.name}
              url={pokemon.url}
              id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
              allMoves={this.state.moves}
            />)
      } else {
        return <LoadingPage/>
      }
    }
  }

  filterByName = () => {
    if (this.state.johtoPokemon) {
      let filteredPokemon = this.state.johtoPokemon.filter(pokemon => pokemon.name.includes(this.state.query))
      return filteredPokemon.map((pokemon, index) =>
          <PokemonCard
            key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
            name={pokemon.name}
            url={pokemon.url}
            id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
      )
    }
  }

  filterByLocation = () => {
    if (this.state.pokemonLocations) {
      let superFilteredPokemon = this.state.pokemonLocations.filter(instance => instance.location.name.includes(this.state.locationQuery))

      let johtoPokemonNames = this.state.johtoPokemon.map(pokemon => pokemon.name)

      let evenMoreFiltered = superFilteredPokemon.filter(instance => johtoPokemonNames.includes(instance.pokemon.name))

      const uniqueArray = evenMoreFiltered.filter((thing, index, self) => self.findIndex(t => t.pokemon.name === thing.pokemon.name) === index)

      return uniqueArray.map((instance, index) =>
          <PokemonCard
            key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
            name={instance.pokemon.name}
            url={instance.pokemon.url}
            id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
      )
    }
  }

  description = () => {
    switch (this.state.area) {
      case 'johto-map':
        return <p style={{marginLeft: '-20px'}}>The second region. West of Kanto and famous for its simplistic lifestyle.</p>
      case 'new-bark-town-area':
        return <p>A town where the wind blows and <br></br> tells of impending change.</p>
      case 'johto-route-29-area':
        return <p>A road that begins a journey. <br></br> The road smells like freshly cut grass.</p>
      case 'johto-route-30-area':
        return <p>A grassy path where you can <br></br> battle other young Trainers.</p>
      case 'cherrygrove-city-area':
        return <p>A city where you can smell <br></br> small flowers and a sea breeze.</p>
      case 'johto-route-31-area':
        return <p>A short, nostalgic path winding through nature.</p>
      case 'violet-city-area':
        return <p>This old village is still surrounded <br></br> by trees and other scenery.</p>
      case 'dark-cave-violet-city-entrance':
        return <p>A dark, difficult-to-navigate tunnel <br></br> that runs beneath the Johto region.</p>
      case 'johto-route-32-area':
        return <p>A path crossed by the Magnet <br></br> Train bridge--nature meets technology.</p>
      case 'union-cave-1f':
        return <p>Deep underground, it's connected <br></br> to the ocean. The water flows here.</p>
      case 'johto-route-33-area':
        return <p>A difficult and always rainy <br></br> path that comes out in a cave.</p>
      case 'azalea-town-area':
        return <p>A town where people and Pokémon <br></br> live together in simple harmony.</p>
      case 'ilex-forest-area':
        return <p>A large forest full of trees <br></br> that are used to make charcoal.</p>
      case 'johto-route-34-area':
        return <p>A lush, green path, even though <br></br> it's right next to a city.</p>
      case 'goldenrod-city-area':
        return <p>A developing city where people <br></br> and Pokémon come and go as they like.</p>
      case 'johto-route-35-area':
        return <p>A bright path with a lake that's <br></br> easy on the eyes and easy to traverse.</p>
      case 'johto-route-36-area':
        return <p>A green and densely overgrown <br></br> path that forks in two directions.</p>
      case 'ruins-of-alph-outside':
        return <p>A place where you can <br></br> find a former adventure.</p>
      case 'national-park-area':
        return <p>A spacious and beautiful park. <br></br> It's connected to the Pokéathlon Dome.</p>
      case 'johto-route-37-area':
        return <p>A popular route for Trainers, <br></br> marked by three Apricorn trees.</p>
      case 'ecruteak-city-area':
        return <p>A city that even now bears <br></br> the marks of its history.</p>
      case 'johto-route-38-area':
        return <p>A path that weaves through trees <br></br> and comes out at a farm.</p>
      case 'johto-route-39-area':
        return <p>A downhill path that passes <br></br> through a grassy and breezy plain.</p>
      case 'olivine-city-area':
        return <p>A city where you can hear <br></br> the melody of the sea.</p>
      case 'johto-sea-route-40-area':
        return <p>You can hear the waves on this path <br></br> from west Olivine City to the sea.</p>
      case 'johto-sea-route-41-area':
        return <p>A rough spot in the sea <br></br> where whirlpools block your path.</p>
      case 'cianwood-city-area':
        return <p>A beachside city that has <br></br> benefitted greatly from the sea.</p>
      case 'johto-route-42-area':
        return <p>A small path opened at the base of <br></br> challenging Mt. Mortar with multiple entrances to it.</p>
      case 'mt-mortar-1f':
        return <p>A naturally large cavern <br></br> that is incredibly spacious.</p>
      case 'mahogany-city-area':
        return <p>A town with a suspicious air to it. <br></br> It's a hiding place for ninjas.</p>
      case 'johto-route-43-area':
        return <p>A woodland path that comes out <br></br> at a lake. Beware the greedy gate.</p>
      case 'johto-route-44-area':
        return <p>A wonderful path with a few <br></br> pleasant springs and abundant greenery.</p>
      case 'ice-path-1f':
        return <p>A cave that connects Route 44 <br></br> to Blackthorn City.</p>
      case 'blackthorn-city-area':
        return <p>A mysterious mountain village <br></br> cut into a rock face.</p>
      case 'lake-of-rage-area':
        return <p>A huge lake full of clear, blue water.</p>
      case 'dragons-den-area':
        return <p>A cave found below Blackthorn City <br></br> known to be home to elite dragon trainers.</p>
      case 'johto-route-45-area':
        return <p>A winding road by a river, <br></br> but called "Mountain Road."</p>
      case 'johto-route-46-area':
        return <p>A way home that runs from the <br></br> base of the mountains to the plains.</p>
      case 'johto-route-47-area':
        return <p>A road on a cliff that strikes fear <br></br> in the hearts of those who dare to pass.</p>
      case 'mt-silver-outside':
        return <p>A hallowed mountain that rises <br></br> between the Johto and Kanto regions.</p>
      case 'tohjo-falls-area':
        return <p>The Tohjo waterfall that links <br></br> the Kanto and Johto regions.</p>
      case 'burned-tower-1f':
        return <p>A tower that was hit by lightning, <br></br> and subsequently caught fire and burned.</p>

        break;
      default:

    }
  }

  fetchMe = (number) => {
    if (number !== 10000) {
      fetch(`https://pokeapi.co/api/v2/location-area/${number}/`)
        .then(res => res.json())
        .then(place =>
          this.setState({
            strangeArray: place.pokemon_encounters.map(pokemon =>
              [pokemon.pokemon.name, pokemon.version_details[0].encounter_details[0].chance, pokemon.version_details[0].encounter_details[0].method.name]
              ).sort((a, b) => (a[2] > b[2]) ? 1: -1)
          })
        )
    } else if (number === 10000) {
      this.setState({
        strangeArray: null
      })
    }
  }

  createBars = () => {
    if (this.state.strangeArray) {
      let array = []
      let wholeArray = []
      let method = this.state.strangeArray[0][2]
      let i=0

      while (i<this.state.strangeArray.length) {
          if (this.state.strangeArray[i][2] === method) {
              array.push(this.state.strangeArray.filter(array => array[2] === method))
              i += this.state.strangeArray.filter(array => array[2] === method).length
          } else if (this.state.strangeArray[i][2] !== method) {
              method = this.state.strangeArray[i][2]
              let newArray = []
              newArray.push(this.state.strangeArray.filter(array => array[2] === method))
              i += this.state.strangeArray.filter(array => array[2] === method).length
              wholeArray.push(newArray)
          }
      }
      wholeArray.push(array)

      return wholeArray.flat().map(arrayOfArrays =>
        <div className={arrayOfArrays[0][2]}>
          <PieChart
            data={arrayOfArrays.map(array =>
              array.slice(0,2)
            )}
            title={arrayOfArrays[0][2]}
          />
        </div>
      )
    }
  }

  scrollToTop = () => {
    var element = document.getElementById("top");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  scrollToGraph = () => {
    var element = document.getElementById("graph");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  scrollToPokedex = () => {
    var element = document.getElementById("pokedex");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  post = () => {
    fetch('https://vast-citadel-58007.herokuapp.com/favorite_locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: localStorage.user_id,
        location_id:  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)[0].location.id
      })
    })
      .then(res => res.json())
  }

  render () {
    return (
      <div>
        <h1 id="top">Johto</h1>
        <br></br>
        <div style={{float: 'left', marginLeft: '65px'}}>
          <canvas
            className="map"
            ref="canvas"
            width={500}
            height={500}
            onClick={(event) => this.getInfo(event)}
          />
        <div className="graph" id="graph">
            <h2>Graphs for {this.state.area}</h2>
            {this.state.strangeArray ? this.createBars() :
            <div>
              <i>Nothing here!</i>
              <br></br>
              <img src="images/charmander.gif"/>
            </div>}
          </div>
        </div>

        <div style={{position: 'fixed', marginLeft: '90%', marginTop: '-70px', zIndex: '1'}}>
          <ButtonToolbar>
            <Button
              style={{width: '80%'}}
              variant="primary"
              onClick={this.scrollToTop}
              block
            >
              Scroll to Top
            </Button>
            <Button
              style={{width: '80%'}}
              variant="success"
              onClick={this.scrollToGraph}
              block
            >
              Scroll to Graphs
            </Button>
            <Button
              style={{width: '80%'}}
              variant="warning"
              onClick={this.scrollToPokedex}
              block
            >
              Scroll to Pokedex
            </Button>
          </ButtonToolbar>
        </div>

        <FadeIn>
          <div className="city-card" style={{width: '52%', marginTop: '-15px'}}>
            <h1>{this.state.area}</h1>
            <br></br>
            <h2 style={{float: 'left', marginLeft: '40px'}}><i>{this.description()}</i></h2>
            <br></br>
            {this.determineImage()}
            <br></br>
            <br></br>
            <AwesomeButtonProgress
              type="primary"
              size="medium"
              action={(element, next) => {this.post(next); setTimeout(() => {next()}, 600)}}
            >
              Favorite!
            </AwesomeButtonProgress>
            <br></br>

            <h1>Native to Johto: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNativePokemonLocations() : <LoadingPage/>}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNonNativePokemonLocations() : <LoadingPage/>}
          </div>
        </FadeIn>

        <br></br>

        <div className="johto-pokemon" id="pokedex">
          <h1>Johto Pokemon: </h1>
          <br></br>

          <h3>Search By Name:</h3>
          <input onChange={(event) => this.startQuery(event)}></input>

          <br></br>

          <h3>Search By Location:</h3>
          <input onChange={(event) => this.startLocationQuery(event)}></input>

          <br></br>

          {this.state.johtoPokemon && this.state.pokemonLocations && this.state.moves ? this.checkQuery() : <LoadingPage/>}
        </div>
      </div>
    )
  }
}

export default Johto
