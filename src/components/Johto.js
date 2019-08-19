import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage.js'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'


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
    fetch('http://localhost:3000/pokemon_locations/johto')
      .then(res => res.json())
      .then(locations =>
        this.setState({
          pokemonLocations: locations
        })
      )
    fetch('http://localhost:3000/moves')
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
        console.log("X", event.pageX - curleft)
        console.log("Y", event.pageY - curtop)
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
    return nativePokemonLocations.map((instance, index) => <PokemonCard
      key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]} name={instance.pokemon.name} url={instance.pokemon.url} id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
      allMoves={this.state.moves}
    />)
  }

  getNonNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let johtoPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !johtoPokemonNames.includes(instance.pokemon.name))
    return nonNativePokemonLocations.map((instance, index) =>
    <PokemonCard
      key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
      name={instance.pokemon.name}
      url={instance.pokemon.url}
      id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
      allMoves={this.state.moves}
    />)
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
    if (this.state.data) {
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
      return superFilteredPokemon.map((instance, index) =>
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
      case 'Kanto':
        return "The first region."
      case 'pallet-town-area':
        return <p>A fairly new and quiet town. <br></br> It's a small and pretty place.</p>
      case 'kanto-route-1-area':
        return <p>A country road full of greenery <br></br> and rough paths.</p>

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

      console.log(wholeArray.flat())

      return wholeArray.flat().map(arrayOfArrays =>
        <div className={arrayOfArrays[0][2]}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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

  render () {
    return (
      <div>
        <h1>Johto</h1>
        <br></br>
        <canvas
          style={{float: 'left', marginLeft: '64px'}}
          className="map"
          ref="canvas"
          width={500}
          height={500}
          onClick={(event) => this.getInfo(event)}
        />

        <FadeIn>
          <div className="city-card" style={{width: '52%', marginTop: '-15px'}}>
            <h1>{this.state.area}</h1>
            <br></br>
            <h2 style={{float: 'left', marginLeft: '40px'}}><i>{this.description()}</i></h2>
            <br></br>
            {this.determineImage()}
            <br></br>

            <h1>Native to Johto: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNativePokemonLocations() : <LoadingPage/>}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNonNativePokemonLocations() : <LoadingPage/>}
          </div>
        </FadeIn>

        <div className="graph">
          {this.state.strangeArray ? this.createBars() : null}
        </div>

        <br></br>

        <div className="johto-pokemon">
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
