import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'
import { Link } from 'react-router-dom'
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { ButtonToolbar, Button } from 'react-bootstrap'

class Sevii extends React.Component {

  state = {
    data: null,
    locations: null,
    area: 'Sevii',
    pokemonLocations: null,
    query: null,
    locationQuery: null,
    formats: null,
    visible: false,
    moves: null
  }

  componentWillMount() {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemon_locations/kanto')
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
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons.results
        })
      })
    fetch('https://pokeapi.co/api/v2/region/1/')
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
    image.src = './images/kanto/sevii.png'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 375, 600);
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

  getInfo = (event) => {
    let curleft = 0, curtop = 0;
    let obj = document.getElementsByClassName("map")[0]
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft
        curtop += obj.offsetTop
      }
      while (obj = obj.offsetParent) {
        if ((event.pageX - curleft) < 46 && (event.pageX - curleft) > 33 && (event.pageY - curtop) < 122 && (event.pageY - curtop) > 112) {
          this.setState({
            area: 'one-island-area'
          })
          this.fetchMe(526)
        } else if ((event.pageX - curleft) < 63 && (event.pageX - curleft) > 49 && (event.pageY - curtop) < 124 && (event.pageY - curtop) > 70) {
          this.setState({
            area: 'kindle-road-area'
          })
          this.fetchMe(512)
        } else if ((event.pageX - curleft) < 63 && (event.pageX - curleft) > 49 && (event.pageY - curtop) < 70 && (event.pageY - curtop) > 57) {
          this.setState({
            area: 'mt-ember-area'
          })
          this.fetchMe(488)
        } else if ((event.pageX - curleft) < 46 && (event.pageX - curleft) > 33 && (event.pageY - curtop) < 157 && (event.pageY - curtop) > 122) {
          this.setState({
            area: 'treasure-beach-area'
          })
          this.fetchMe(513)
        } else if ((event.pageX - curleft) < 109 && (event.pageX - curleft) > 94 && (event.pageY - curtop) < 522 && (event.pageY - curtop) > 512) {
          this.setState({
            area: 'seven-island-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 109 && (event.pageX - curleft) > 94 && (event.pageY - curtop) < 536 && (event.pageY - curtop) > 522) {
          this.setState({
            area: 'canyon-entrance-area'
          })
          this.fetchMe(527)
        } else if ((event.pageX - curleft) < 125 && (event.pageX - curleft) > 110 && (event.pageY - curtop) < 557 && (event.pageY - curtop) > 524) {
          this.setState({
            area: 'sevault-canyon-area'
          })
          this.fetchMe(527)
        } else if ((event.pageX - curleft) < 156 && (event.pageX - curleft) > 63 && (event.pageY - curtop) < 569 && (event.pageY - curtop) > 558) {
          this.setState({
            area: 'tanoby-ruins-area'
          })
          this.fetchMe(528)
        } else if ((event.pageX - curleft) < 109 && (event.pageX - curleft) > 94 && (event.pageY - curtop) < 512 && (event.pageY - curtop) > 491) {
          this.setState({
            area: 'trainer-tower-area'
          })
          this.fetchMe(525)
        } else if ((event.pageX - curleft) < 173 && (event.pageX - curleft) > 156 && (event.pageY - curtop) < 135 && (event.pageY - curtop) > 125) {
          this.setState({
            area: 'two-island-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 173 && (event.pageX - curleft) > 156 && (event.pageY - curtop) < 125 && (event.pageY - curtop) > 102) {
          this.setState({
            area: 'cape-brink-area'
          })
          this.fetchMe(514)
        } else if ((event.pageX - curleft) < 313 && (event.pageX - curleft) > 295 && (event.pageY - curtop) < 167 && (event.pageY - curtop) > 158) {
          this.setState({
            area: 'three-island-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 329 && (event.pageX - curleft) > 298 && (event.pageY - curtop) < 179 && (event.pageY - curtop) > 169) {
          this.setState({
            area: 'three-isle-port-area'
          })
          this.fetchMe(516)
        } else if ((event.pageX - curleft) < 298 && (event.pageX - curleft) > 250 && (event.pageY - curtop) < 167 && (event.pageY - curtop) > 158) {
          this.setState({
            area: 'bond-bridge-area'
          })
          this.fetchMe(515)
        } else if ((event.pageX - curleft) < 250 && (event.pageX - curleft) > 234 && (event.pageY - curtop) < 167 && (event.pageY - curtop) > 158) {
          this.setState({
            area: 'berry-forest-area'
          })
          this.fetchMe(495)
        } else if ((event.pageX - curleft) < 75 && (event.pageX - curleft) > 63 && (event.pageY - curtop) < 280 && (event.pageY - curtop) > 268) {
          this.setState({
            area: 'four-island-area'
          })
          this.fetchMe(562)
        } else if ((event.pageX - curleft) < 81 && (event.pageX - curleft) > 70 && (event.pageY - curtop) < 292 && (event.pageY - curtop) > 282) {
          this.setState({
            area: 'icefall-cave-1f'
          })
          this.fetchMe(497)
        } else if ((event.pageX - curleft) < 280 && (event.pageX - curleft) > 266 && (event.pageY - curtop) < 357 && (event.pageY - curtop) > 347) {
          this.setState({
            area: 'five-island-area'
          })
          this.fetchMe(563)
        } else if ((event.pageX - curleft) < 298 && (event.pageX - curleft) > 267 && (event.pageY - curtop) < 335 && (event.pageY - curtop) > 325) {
          this.setState({
            area: 'resort-gorgeous-area'
          })
          this.fetchMe(517)
        } else if ((event.pageX - curleft) < 314 && (event.pageX - curleft) > 298 && (event.pageY - curtop) < 335 && (event.pageY - curtop) > 325) {
          this.setState({
            area: 'lost-cave-room-1'
          })
          this.fetchMe(501)
        } else if ((event.pageX - curleft) < 283 && (event.pageX - curleft) > 235 && (event.pageY - curtop) < 347 && (event.pageY - curtop) > 336) {
          this.setState({
            area: 'water-labyrinth-area'
          })
          this.fetchMe(518)
        } else if ((event.pageX - curleft) < 297 && (event.pageX - curleft) > 282 && (event.pageY - curtop) < 369 && (event.pageY - curtop) > 347) {
          this.setState({
            area: 'five-isle-meadow-area'
          })
          this.fetchMe(519)
        } else if ((event.pageX - curleft) < 313 && (event.pageX - curleft) > 299 && (event.pageY - curtop) < 392 && (event.pageY - curtop) > 359) {
          this.setState({
            area: 'memorial-pillar-area'
          })
          this.fetchMe(520)
        } else if ((event.pageX - curleft) < 297 && (event.pageX - curleft) > 282 && (event.pageY - curtop) < 489 && (event.pageY - curtop) > 480) {
          this.setState({
            area: 'six-island-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 312 && (event.pageX - curleft) > 297 && (event.pageY - curtop) < 513 && (event.pageY - curtop) > 458) {
          this.setState({
            area: 'water-path-area'
          })
          this.fetchMe(523)
        } else if ((event.pageX - curleft) < 296 && (event.pageX - curleft) > 267 && (event.pageY - curtop) < 523 && (event.pageY - curtop) > 501) {
          this.setState({
            area: 'ruin-valley-area'
          })
          this.fetchMe(524)
        } else if ((event.pageX - curleft) < 296 && (event.pageX - curleft) > 282 && (event.pageY - curtop) < 469 && (event.pageY - curtop) > 456) {
          this.setState({
            area: 'pattern-bush-area'
          })
          this.fetchMe(500)
        } else if ((event.pageX - curleft) < 282 && (event.pageX - curleft) > 252 && (event.pageY - curtop) < 469 && (event.pageY - curtop) > 456) {
          this.setState({
            area: 'green-path-area'
          })
          this.fetchMe(522)
        } else if ((event.pageX - curleft) < 266 && (event.pageX - curleft) > 250 && (event.pageY - curtop) < 459 && (event.pageY - curtop) > 435) {
          this.setState({
            area: 'outcast-island-area'
          })
          this.fetchMe(521)
        } else if ((event.pageX - curleft) < 266 && (event.pageX - curleft) > 250 && (event.pageY - curtop) < 435 && (event.pageY - curtop) > 424) {
          this.setState({
            area: 'kanto-altering-cave-a'
          })
          this.fetchMe(564)
        }
      }
    }
    return undefined
  }

  determineImage = () => {
    return <img src={`/images/kanto/${this.state.area}.png`} />
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

  getNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let kantoPokemonNames = this.state.data.map(pokemon => pokemon.name)
    let nativePokemonLocations = foundPokemonLocations.filter(instance => kantoPokemonNames.includes(instance.pokemon.name))
    if (nativePokemonLocations) {
      return nativePokemonLocations.map((instance, index) =>
        <PokemonCard
          key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
          name={instance.pokemon.name}
          url={instance.pokemon.url}
          id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
          allMoves={this.state.moves}
        />)
    } else {
      return "None!"
    }
  }

  getNonNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let kantoPokemonNames = this.state.data.map(pokemon => pokemon.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !kantoPokemonNames.includes(instance.pokemon.name))
    if (nonNativePokemonLocations) {
      return nonNativePokemonLocations.map((instance, index) =>
        <PokemonCard
          key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
          name={instance.pokemon.name}
          url={instance.pokemon.url}
          id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
          allMoves={this.state.moves}
        />)
    } else {
      return "None!"
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
    } else {
      if (this.state.data) {
        return this.state.data.map((pokemon, index) =>
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
    if (this.state.data) {
      let filteredPokemon = this.state.data.filter(pokemon => pokemon.name.includes(this.state.query))
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

      let kantoPokemonNames = this.state.data.map(pokemon => pokemon.name)

      let evenMoreFiltered = superFilteredPokemon.filter(instance => kantoPokemonNames.includes(instance.pokemon.name))

      const uniqueArray = superFilteredPokemon.filter((thing, index, self) => self.findIndex(t => t.pokemon.name === thing.pokemon.name) === index)

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
      case 'Sevii':
        return <p style={{marginLeft: '265px'}}>An archipelago of nine large islands. South of Kanto.</p>
      case 'one-island-area':
        return <p>A small town home to Bill, <br></br> who runs the Network Center.</p>
      case 'treasure-beach-area':
        return <p>A small area to <br></br> the south of One Island.</p>
      case 'kindle-road-area':
        return <p>A straight path north from One Island <br></br> famous for it's hot springs.</p>
      case 'mt-ember-area':
        return <p>An inactive volcano, but there are <br></br> reports that the peak blazes with fire at night.</p>
      case 'two-island-area':
        return <p>Commonly referred to as 'Friendship Island'. <br></br> Also home to the move relearner.</p>
      case 'cape-brink-area':
        return <p>A short, straightforward walk up a mountin to <br></br> the house of move tutors.</p>
      case 'berry-forest-area':
        return <p>A forest where berries grow wildly <br></br> in profusion, quickly replenishing those that fall off.</p>
      case 'bond-bridge-area':
        return <p>An area on Three Island that connects the <br></br> two neighboring islands together.</p>
      case 'three-island-area':
        return <p>Commonly referred to as 'Family Island'. <br></br> East of Two Island.</p>
      case 'three-isle-port-area':
        return <p>Home to a cave with a <br></br> multitude of Dunsparce.</p>
      case 'four-island-area':
        return <p>Commonly reffered to as 'Ice Island'. <br></br> Home to Lorelei of the Elite Four.</p>
      case 'icefall-cave-1f':
        return <p>A cave which is covered by water and ice that seems <br></br> like the end of the cave is connected to the ocean.</p>
      case 'resort-gorgeous-area':
        return <p>A route whose name is derived <br></br> from the resort in the center of the waterway.</p>
      case 'lost-cave-room-1':
        return <p>A bewildering cave off the coast. Some curious <br></br> thrill seekers have never emerged from it.</p>
      case 'water-labyrinth-area':
        return <p>A simple route composed predominantly of <br></br> a small maze made of sea rocks.</p>
      case 'five-island-area':
        return <p></p>
      case 'five-isle-meadow-area':
        return <p></p>
      case 'memorial-pillar-area':
        return <p></p>
      case 'kanto-altering-cave-a':
        return <p></p>
      case 'outcast-island-area':
        return <p></p>
      case 'green-path-area':
        return <p></p>
      case 'pattern-bush-area':
        return <p></p>
      case 'water-path-area':
        return <p></p>
      case 'six-island-area':
        return <p></p>
      case 'ruin-valley-area':
        return <p></p>
      case 'trainer-tower-area':
        return <p></p>
      case 'seven-island-area':
        return <p></p>
      case 'canyon-entrance-area':
        return <p></p>
      case 'sevault-canyon-area':
        return <p></p>
      case 'tanoby-ruins-area':
        return <p></p>

        break;
      default:

    }
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
      <div className="kanto">
        <h1 id="top">Sevii Islands</h1>
        <Link to="/kanto">Click here to go back to Kanto</Link>
        <br></br>

        <div style={{float: 'left', marginLeft: '65px'}}>
          <FadeIn>
            <canvas
              className="map"
              ref="canvas"
              width={375}
              height={600}
              onClick={(event) => {this.getInfo(event)}}
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
          </FadeIn>
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
          <div className="city-card" style={{width: '60%', marginTop: '-5px'}}>
            <h1>{this.state.area}</h1>
            <br></br>
            <h2 style={{float: 'left', marginLeft: '-120px'}}><i>{this.description()}</i></h2>
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

            <h1>Native to Kanto: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNativePokemonLocations() : <LoadingPage/>}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNonNativePokemonLocations() : <LoadingPage/>}
          </div>
        </FadeIn>

        <br></br>

        <div className="kanto-pokemon" id="pokedex">
          <h1>Kanto Pokemon: </h1>
          <br></br>

          <h3>Search By Name:</h3>
          <input onChange={(event) => this.startQuery(event)}></input>

          <br></br>

          <h3>Search By Location:</h3>
          <input onChange={(event) => this.startLocationQuery(event)}></input>

          <br></br>

          {this.state.data && this.state.pokemonLocations && this.state.moves ? this.checkQuery() : <LoadingPage/>}

        </div>
      </div>
    )
  }
}

export default Sevii
