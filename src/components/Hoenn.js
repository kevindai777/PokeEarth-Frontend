import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage.js'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'
import { ButtonToolbar, Button } from 'react-bootstrap'

class Hoenn extends React.Component {

  state = {
    data: null,
    hoennPokemon: null,
    area: 'Hoenn',
    pokemonLocations: null
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemon_locations/hoenn')
      .then(res => res.json())
      .then(locations =>
        this.setState({
          pokemonLocations: locations
        })
      )
  }

  componentDidMount() {
    this.renderThisData()
    this.updateCanvas()
  }

  renderThisData = () => {
    fetch('https://pokeapi.co/api/v2/pokedex/4/')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons.pokemon_entries
        })
      })
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          hoennPokemon: pokemons.results
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

  updateCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d')

    const image = new Image()
    image.src = './images/hoenn.png'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 700, 640);
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
        console.log("-----------")
        if ((event.pageX - curleft) < 150 && (event.pageX - curleft) > 132 && (event.pageY - curtop) < 450 && (event.pageY - curtop) > 431) {
          this.setState({
            area: 'littleroot-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 150 && (event.pageX - curleft) > 132 && (event.pageY - curtop) < 431 && (event.pageY - curtop) > 378) {
          this.setState({
            area: 'hoenn-route-101-area'
          })
          this.fetchMe(393)
        } else if ((event.pageX - curleft) < 150 && (event.pageX - curleft) > 132 && (event.pageY - curtop) < 378 && (event.pageY - curtop) > 358) {
          this.setState({
            area: 'oldale-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 133 && (event.pageX - curleft) > 103 && (event.pageY - curtop) < 380 && (event.pageY - curtop) > 357) {
          this.setState({
            area: 'hoenn-route-102-area'
          })
          this.fetchMe(394)
        } else if ((event.pageX - curleft) < 103 && (event.pageX - curleft) > 70 && (event.pageY - curtop) < 380 && (event.pageY - curtop) > 357) {
          this.setState({
            area: 'petalburg-city-area'
          })
          this.fetchMe(350)
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 132 && (event.pageY - curtop) < 358 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'hoenn-route-103-area'
          })
          this.fetchMe(395)
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 354 && (event.pageY - curtop) > 301) {
          this.setState({
            area: 'hoenn-route-104-area'
          })
          this.fetchMe(396)
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 301 && (event.pageY - curtop) > 281) {
          this.setState({
            area: 'petalburg-woods-area'
          })
          this.fetchMe(365)
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 513 && (event.pageY - curtop) > 378) {
          this.setState({
            area: 'hoenn-route-105-area'
          })
          this.fetchMe(397)
        } else if ((event.pageX - curleft) < 105 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 539 && (event.pageY - curtop) > 515) {
          this.setState({
            area: 'hoenn-route-106-area'
          })
          this.fetchMe(398)
        } else if ((event.pageX - curleft) < 105 && (event.pageX - curleft) > 87 && (event.pageY - curtop) < 559 && (event.pageY - curtop) > 539) {
          this.setState({
            area: 'dewford-town-area'
          })
          this.fetchMe(433)
        } else if ((event.pageX - curleft) < 160 && (event.pageX - curleft) > 105 && (event.pageY - curtop) < 559 && (event.pageY - curtop) > 539) {
          this.setState({
            area: 'hoenn-route-107-area'
          })
          this.fetchMe(399)
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 160 && (event.pageY - curtop) < 559 && (event.pageY - curtop) > 539) {
          this.setState({
            area: 'hoenn-route-108-area'
          })
          this.fetchMe(400)
        } else if ((event.pageX - curleft) < 213 && (event.pageX - curleft) > 195 && (event.pageY - curtop) < 560 && (event.pageY - curtop) > 450) {
          this.setState({
            area: 'hoenn-route-109-area'
          })
          this.fetchMe(401)
        } else if ((event.pageX - curleft) < 213 && (event.pageX - curleft) > 195 && (event.pageY - curtop) < 409 && (event.pageY - curtop) > 302) {
          this.setState({
            area: 'hoenn-route-110-area'
          })
          this.fetchMe(402)
        } else if ((event.pageX - curleft) < 229 && (event.pageX - curleft) > 195 && (event.pageY - curtop) < 448 && (event.pageY - curtop) > 408) {
          this.setState({
            area: 'slateport-city-area'
          })
          this.fetchMe(351)
        } else if ((event.pageX - curleft) < 285 && (event.pageX - curleft) > 229 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-134-area'
          })
          this.fetchMe(428)
        } else if ((event.pageX - curleft) < 334 && (event.pageX - curleft) > 285 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-133-area'
          })
          this.fetchMe(427)
        } else if ((event.pageX - curleft) < 395 && (event.pageX - curleft) > 334 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-132-area'
          })
          this.fetchMe(426)
        } else if ((event.pageX - curleft) < 412 && (event.pageX - curleft) > 395 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'pacifidlog-town-area'
          })
          this.fetchMe(434)
        } else if ((event.pageX - curleft) < 470 && (event.pageX - curleft) > 412 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-131-area'
          })
          this.fetchMe(425)
        } else if ((event.pageX - curleft) < 523 && (event.pageX - curleft) > 470 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-130-area'
          })
          this.fetchMe(424)
        } else if ((event.pageX - curleft) < 554 && (event.pageX - curleft) > 523 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-129-area'
          })
          this.fetchMe(423)
        } else if ((event.pageX - curleft) < 611 && (event.pageX - curleft) > 512 && (event.pageY - curtop) < 421 && (event.pageY - curtop) > 393) {
          this.setState({
            area: 'hoenn-route-128-area'
          })
          this.fetchMe(422)
        } else if ((event.pageX - curleft) < 631 && (event.pageX - curleft) > 615 && (event.pageY - curtop) < 417 && (event.pageY - curtop) > 405) {
          this.setState({
            area: 'ever-grande-city-area'
          })
          this.fetchMe(355)
        } else if ((event.pageX - curleft) < 631 && (event.pageX - curleft) > 615 && (event.pageY - curtop) < 399 && (event.pageY - curtop) > 380) {
          this.setState({
            area: 'hoenn-victory-road-1f'
          })
          this.fetchMe(382)
        } else if ((event.pageX - curleft) < 554 && (event.pageX - curleft) > 487 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 251) {
          this.setState({
            area: 'hoenn-route-127-area'
          })
          this.fetchMe(421)
        } else if ((event.pageX - curleft) < 458 && (event.pageX - curleft) > 419 && (event.pageY - curtop) < 391 && (event.pageY - curtop) > 319) {
          this.setState({
            area: 'hoenn-route-126-area'
          })
          this.fetchMe(419)
        } else if ((event.pageX - curleft) < 458 && (event.pageX - curleft) > 419 && (event.pageY - curtop) < 319 && (event.pageY - curtop) > 251) {
          this.setState({
            area: 'hoenn-route-126-area'
          })
          this.fetchMe(419)
        } else if ((event.pageX - curleft) < 487 && (event.pageX - curleft) > 458 && (event.pageY - curtop) < 390 && (event.pageY - curtop) > 339) {
          this.setState({
            area: 'hoenn-route-126-area'
          })
          this.fetchMe(419)
        } else if ((event.pageX - curleft) < 487 && (event.pageX - curleft) > 474 && (event.pageY - curtop) < 339 && (event.pageY - curtop) > 253) {
          this.setState({
            area: 'hoenn-route-126-area'
          })
          this.fetchMe(419)
        } else if ((event.pageX - curleft) < 521 && (event.pageX - curleft) > 420 && (event.pageY - curtop) < 253 && (event.pageY - curtop) > 179) {
          this.setState({
            area: 'hoenn-route-124-area'
          })
          this.fetchMe(416)
        } else if ((event.pageX - curleft) < 554 && (event.pageX - curleft) > 520 && (event.pageY - curtop) < 232 && (event.pageY - curtop) > 179) {
          this.setState({
            area: 'hoenn-route-125-area'
          })
          this.fetchMe(418)
        } else if ((event.pageX - curleft) < 554 && (event.pageX - curleft) > 522 && (event.pageY - curtop) < 251 && (event.pageY - curtop) > 232) {
          this.setState({
            area: 'mossdeep-city-area'
          })
          this.fetchMe(353)
        } else if ((event.pageX - curleft) < 473 && (event.pageX - curleft) > 458 && (event.pageY - curtop) < 339 && (event.pageY - curtop) > 321) {
          this.setState({
            area: 'sootopolis-city-area'
          })
          this.fetchMe(354)
        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 359 && (event.pageY - curtop) < 219 && (event.pageY - curtop) > 179) {
          this.setState({
            area: 'lilycove-city-area'
          })
          this.fetchMe(352)
        } else if ((event.pageX - curleft) < 359 && (event.pageX - curleft) > 289 && (event.pageY - curtop) < 204 && (event.pageY - curtop) > 181) {
          this.setState({
            area: 'hoenn-route-121-area'
          })
          this.fetchMe(413)
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 327 && (event.pageY - curtop) < 230 && (event.pageY - curtop) > 204) {
          this.setState({
            area: 'hoenn-route-122-area'
          })
          this.fetchMe(414)
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 327 && (event.pageY - curtop) < 254 && (event.pageY - curtop) > 230) {
          this.setState({
            area: 'mt-pyre-1f'
          })
          this.fetchMe(368)
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 327 && (event.pageY - curtop) < 261 && (event.pageY - curtop) > 254) {
          this.setState({
            area: 'hoenn-route-122-area'
          })
          this.fetchMe(414)
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 247 && (event.pageY - curtop) < 284 && (event.pageY - curtop) > 260) {
          this.setState({
            area: 'hoenn-route-123-area'
          })
          this.fetchMe(415)
        } else if ((event.pageX - curleft) < 245 && (event.pageX - curleft) > 228 && (event.pageY - curtop) < 284 && (event.pageY - curtop) > 260) {
          this.setState({
            area: 'hoenn-route-118-area'
          })
          this.fetchMe(410)
        } else if ((event.pageX - curleft) < 244 && (event.pageX - curleft) > 230 && (event.pageY - curtop) < 260 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'hoenn-route-119-area'
          })
          this.fetchMe(411)
        } else if ((event.pageX - curleft) < 271 && (event.pageX - curleft) > 248 && (event.pageY - curtop) < 148 && (event.pageY - curtop) > 128) {
          this.setState({
            area: 'fortree-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 288 && (event.pageX - curleft) > 271 && (event.pageY - curtop) < 204 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'hoenn-route-120-area'
          })
          this.fetchMe(412)
        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 326 && (event.pageY - curtop) < 180 && (event.pageY - curtop) > 161) {
          this.setState({
            area: 'hoenn-safari-zone-expansion-north'
          })
          this.fetchMe(436)
        } else if ((event.pageX - curleft) < 228 && (event.pageX - curleft) > 196 && (event.pageY - curtop) < 301 && (event.pageY - curtop) > 262) {
          this.setState({
            area: 'mauville-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 147 && (event.pageY - curtop) < 282 && (event.pageY - curtop) > 261) {
          this.setState({
            area: 'hoenn-route-117-area'
          })
          this.fetchMe(409)
        } else if ((event.pageX - curleft) < 147 && (event.pageX - curleft) > 133 && (event.pageY - curtop) < 282 && (event.pageY - curtop) > 261) {
          this.setState({
            area: 'verdanturf-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 105 && (event.pageX - curleft) > 59 && (event.pageY - curtop) < 262 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'hoenn-route-116-area'
          })
          this.fetchMe(408)
        } else if ((event.pageX - curleft) < 135 && (event.pageX - curleft) > 107 && (event.pageY - curtop) < 262 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'rusturf-tunnel-area'
          })
          this.fetchMe(360)
        } else if ((event.pageX - curleft) < 149 && (event.pageX - curleft) > 135 && (event.pageY - curtop) < 262 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'hoenn-route-116-area'
          })
          this.fetchMe(408)
        } else if ((event.pageX - curleft) < 213 && (event.pageX - curleft) > 196 && (event.pageY - curtop) < 259 && (event.pageY - curtop) > 126) {
          this.setState({
            area: 'hoenn-route-111-area'
          })
          this.fetchMe(403)
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 164 && (event.pageY - curtop) < 210 && (event.pageY - curtop) > 189) {
          this.setState({
            area: 'hoenn-route-112-area'
          })
          this.fetchMe(404)
        } else if ((event.pageX - curleft) < 164 && (event.pageX - curleft) > 149 && (event.pageY - curtop) < 210 && (event.pageY - curtop) > 189) {
          this.setState({
            area: 'lavaridge-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 196 && (event.pageX - curleft) > 135 && (event.pageY - curtop) < 150 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'hoenn-route-113-area'
          })
          this.fetchMe(405)
        } else if ((event.pageX - curleft) < 133 && (event.pageX - curleft) > 103 && (event.pageY - curtop) < 150 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'fallarbor-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 103 && (event.pageX - curleft) > 62 && (event.pageY - curtop) < 150 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'hoenn-route-114-area'
          })
          this.fetchMe(406)
        } else if ((event.pageX - curleft) < 80 && (event.pageX - curleft) > 60 && (event.pageY - curtop) < 184 && (event.pageY - curtop) > 148) {
          this.setState({
            area: 'hoenn-route-114-area'
          })
          this.fetchMe(406)
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 239 && (event.pageY - curtop) > 184) {
          this.setState({
            area: 'hoenn-route-115-area'
          })
          this.fetchMe(407)
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 184 && (event.pageY - curtop) > 162) {
          this.setState({
            area: 'meteor-falls-area'
          })
          this.fetchMe(356)
        } else if ((event.pageX - curleft) < 59 && (event.pageX - curleft) > 27 && (event.pageY - curtop) < 281 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'rustboro-city-area'
          })
          this.fetchMe(10000)
        }  else if ((event.pageX - curleft) < 70 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 377 && (event.pageY - curtop) > 352) {
          this.setState({
            area: 'hoenn-route-104-area'
          })
          this.fetchMe(396)
        }
      }
    }
    return undefined
  }

  determineImage = () => {
    return <img src={`/images/hoenn/${this.state.area}.png`} style={{width: '211px', height: '143px'}}/>
  }

  getNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let johtoPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nativePokemonLocations = foundPokemonLocations.filter(instance => johtoPokemonNames.includes(instance.pokemon.name))
    if (nativePokemonLocations.length > 0) {
      return nativePokemonLocations.map((instance, index) => <PokemonCard
        key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]} name={instance.pokemon.name}
        url={instance.pokemon.url} id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
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
        key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]} name={instance.pokemon.name} url={instance.pokemon.url} id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
        allMoves={this.state.moves}
      />)
    } else {
      return <i>None found!</i>
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
      if (this.state.hoennPokemon) {
        return this.state.hoennPokemon.map((pokemon, index) =>
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
    if (this.state.hoennPokemon) {
      let filteredPokemon = this.state.hoennPokemon.filter(pokemon => pokemon.name.includes(this.state.query))
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

      let hoennPokemonNames = this.state.hoennPokemon.map(pokemon => pokemon.name)

      let evenMoreFiltered = superFilteredPokemon.filter(instance => hoennPokemonNames.includes(instance.pokemon.name))

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
      case 'Hoenn':
        return <p style={{marginLeft: '-20px'}}>The third region. Famous for its large bodies of water.</p>
      case 'littleroot-town-area':
        return <p>Basking amid vibrant nature, this simple <br></br> town is not shaded with any one hue.</p>
      case 'hoenn-route-101-area':
        return <p>This grassy path running between Littleroot Town <br></br> and Oldale Town is perfect for doing fieldwork.</p>
      case 'hoenn-route-102-area':
        return <p>Many Trainers gather on this route in the <br></br> hope of encountering Pokémon in the wild.</p>
      case 'oldale-town-area':
        return <p>A town where the contrast between colorful flowers <br></br> and deep, verdant forests is most beautiful.</p>
      case 'hoenn-route-103-area':
        return <p>On weekends and holidays, fishing enthusiasts flock <br></br> to every section of coastline on this seaside route.</p>
      case 'petalburg-city-area':
        return <p>A whiff of salt is always in the air in <br></br> this city, which is skirted by the ocean shore.</p>
      case 'rustboro-city-area':
        return <p>This city is the main hub of industry in the Hoenn region, <br></br> with the Devon Corporation as its beating heart.</p>
      case 'hoenn-route-104-area':
        return <p>This path, rich with water and colorful plant life, <br></br> runs north and south of Petalburg Woods.</p>
      case 'hoenn-route-105-area':
        return <p>This water route boasts gentle currents, which makes <br></br> it safe for even poor swimmers to bask in.</p>
      case 'dewford-town-area':
        return <p>New trends are always the rage among <br></br> the inhabitants of this small island town.</p>
      case 'hoenn-route-106-area':
        return <p>This is the site of serious battles between Fishermen <br></br> of the seaside area and the wild Pokémon of the seas.</p>
      case 'slateport-city-area':
        return <p>People from many different regions gather <br></br> and mingle in this bustling port city.</p>
      case 'hoenn-route-107-area':
        return <p>The local children of Dewford Town practice long-distance <br></br> swimming in the waters of this aquatic route.</p>
      case 'hoenn-route-108-area':
        return <p>People come swimming from as far away as the <br></br> Kalos region to see the site of Sea Mauville.</p>
      case 'hoenn-route-109-area':
        return <p>People and Pokémon alike enjoy <br></br> ocean swims in this water route.</p>
      case 'hoenn-route-110-area':
        return <p>A timeworn path where nature remains untouched. <br></br> Above it on this route stretches the huge Cycling Road.</p>
      case 'hoenn-route-111-area':
        return <p>This expansive route includes a desert where <br></br> sandstorms rage unceasingly and a mountain pass.</p>
      case 'mauville-city-area':
        return <p>This large city is located in the heart of the Hoenn <br></br> region, at the crossroads of its nostalgic past and new technology.</p>
      case 'hoenn-route-112-area':
        return <p>This route is popular among Trainers because it <br></br> offers the chance to stroll while gazing up at Mt. Chimney.</p>
      case 'hoenn-route-113-area':
        return <p>The tall grass on this route is painted a dusty <br></br> gray by the volcanic ash that pours from Mt. Chimney.</p>
      case 'lavaridge-town-area':
        return <p>A popular spot in the Hoenn region, thanks <br></br> to its hot springs, said to cure any ailment.</p>
      case 'hoenn-route-114-area':
        return <p>This mountain path to Meteor Falls is so long <br></br> and arduous that even Hikers have difficulty tackling it.</p>
      case 'meteor-falls-area':
        return <p>This waterfall is said to have been the site of a <br></br> meteor shower. An ancient people once made their home here.</p>
      case 'fallarbor-town-area':
        return <p>A town formed by scholars who <br></br> gather to research meteorites.</p>
      case 'hoenn-route-115-area':
        return <p>This trail to Rustboro City was broken <br></br> by people who lived at Meteor Falls long ago.</p>
      case 'hoenn-route-116-area':
        return <p>A path that many workers take on their daily <br></br> commute between Rustboro City and Rusturf Tunnel.</p>
      case 'rusturf-tunnel-area':
        return <p>This stone tunnel links together Rustboro and Verdanturf. <br></br> Its name was chosen as a mixture of the two.</p>
      case 'verdanturf-town-area':
        return <p>Thanks to the prevailing wind pattern, this <br></br> town is always kept clear of falling volcanic ash.</p>
      case 'hoenn-route-117-area':
        return <p>A path where many Trainers gather to raise <br></br> their Pokémon and train them for battle.</p>
      case 'fortree-city-area':
        return <p>The people and the Pokémon of this city <br></br> follow nature's cues to rise each morning and end each day.</p>
      case 'hoenn-route-118-area':
        return <p>This seaside route brings together the <br></br> east and west sides of the Hoenn region.</p>
      case 'hoenn-route-119-area':
        return <p>If you are not prepared for it, the harsh conditions of <br></br> this tropical rain forest will defeat you in less than five minutes.</p>
      case 'hoenn-route-120-area':
        return <p>Pokémon that can camouflage themselves <br></br> hide in the rich wilds along this route.</p>
      case 'hoenn-route-121-area':
        return <p>This road leads to both the Safari Zone and Mt. Pyre. <br></br> Many people set out along this route from Lilycove City.</p>
      case 'hoenn-safari-zone-expansion-north':
        return <p>This amusement area provides a rich environment <br></br> in which to catch many different kinds of Pokémon.</p>
      case 'lilycove-city-area':
        return <p>This tourist destination is undergoing a revival, <br></br> thanks to the popularity of its Pokémon Contest Spectaculars.</p>
      case 'hoenn-route-122-area':
        return <p>People make their way to Mt. Pyre over this <br></br> water route, reliving many precious memories as they traverse it.</p>
      case 'hoenn-route-123-area':
        return <p>This route offers a convenient path back to Mauville <br></br> City from Mt. Pyre, but be aware that it is a one-way road.</p>
      case 'hoenn-route-124-area':
        return <p>This great stretch of ocean connects <br></br> the cities of Lilycove, Mossdeep, and Sootopolis.</p>
      case 'hoenn-route-125-area':
        return <p>Small children are allowed to play in the <br></br> waters of this sea route as far as Shoal Cave—but no further!</p>
      case 'mossdeep-city-area':
        return <p>Research is underway day and night in this city, <br></br> all in the hope of understanding the distant reaches of space.</p>
      case 'hoenn-route-126-area':
        return <p>Even a pro swimmer would need three entire days <br></br> to circuit around the crater containing Sootopolis City.</p>
      case 'hoenn-route-127-area':
        return <p>With no place to stop and rest in these waters, it <br></br> is very hard for a swimmer to make it across this route.</p>
      case 'hoenn-route-128-area':
        return <p>The ocean floor beneath this water route <br></br> is rumored to contain an undiscovered ruin.</p>
      case 'sootopolis-city-area':
        return <p>This city, which rises from the crater of a great <br></br> meteoroid crash, can only be reached through the sea or from the sky.</p>
      case 'hoenn-route-129-area':
        return <p>Many Pokémon Trainers visit this route to train <br></br> their Pokémon before challenging the Pokémon League.</p>
      case 'hoenn-route-130-area':
        return <p>This route was once a big topic of conversation due <br></br> to a strange island that seemed to appear and then disappear.</p>
      case 'hoenn-route-131-area':
        return <p>It is the custom in Pacifidlog Town <br></br> to swim a lap around this route before breakfast.</p>
      case 'hoenn-route-132-area':
        return <p>The children of Pacifidlog Town are said to be such <br></br> strong swimmers that they frolic and play in these fierce currents.</p>
      case 'pacifidlog-town-area':
        return <p>This town first came into being as a floating <br></br> storehouse used by people living on the ocean's surface.</p>
      case 'hoenn-route-133-area':
        return <p>Trainers gather in this stretch of sea in <br></br> search of something beyond its fierce currents.</p>
      case 'ever-grande-city-area':
        return <p>This city is blanketed in a profusion of colorful <br></br> blooms. It plays host to the grand Pokémon League.</p>
      case 'hoenn-victory-road-1f':
        return <p>This challenging path forces Trainers who hope to <br></br> overcome the Pokémon League to first surpass their own limits.</p>
      case 'mt-pyre-1f':
        return <p>The mountain is where spirits of Pokémon have <br></br> rested and will always rest: past, present, and future.</p>

        break;
      default:

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

  render () {
    return (
      <div>
        <h1 id="top">Hoenn</h1>
        <br></br>
        <div style={{float: 'left', marginLeft: '64px'}}>
          <canvas
            className="map"
            ref="canvas"
            width={700}
            height={640}
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
          <div className="city-card" style={{width: '44%', marginTop: '-10px'}}>
            <h1>{this.state.area}</h1>
            <br></br>
            <h2 style={{float: 'left', marginLeft: '40px'}}><i>{this.description()}</i></h2>
            <br></br>
            {this.determineImage()}
            <br></br>

            <h1>Native to Hoenn: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNativePokemonLocations() : <LoadingPage/>}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNonNativePokemonLocations() : <LoadingPage/>}
          </div>
        </FadeIn>

        <div className="hoenn-pokemon" id="pokedex">
          <h1>Hoenn Pokemon: </h1>
          <br></br>
          <h3>Search By Name:</h3>
          <input onChange={(event) => this.startQuery(event)}></input>

          <br></br>

          <h3>Search By Location:</h3>
          <input onChange={(event) => this.startLocationQuery(event)}></input>

          <br></br>

          {this.state.hoennPokemon && this.state.pokemonLocations && this.state.moves ? this.checkQuery() : <LoadingPage/>}
        </div>
      </div>
    )
  }
}

export default Hoenn
