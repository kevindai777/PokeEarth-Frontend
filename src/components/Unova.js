import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage.js'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'

class Unova extends React.Component {
  state = {
    data: null,
    unovaPokemon: null,
    locations: null,
    area: 'unova-map',
    pokemonLocations: null,
    query: null,
    locationQuery: null,
    moves: null
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemon_locations/unova')
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

    fetch('https://pokeapi.co/api/v2/pokedex/8/')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons.pokemon_entries
        })
      })

    fetch('https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          unovaPokemon: pokemons.results
        })
      })

    fetch('https://pokeapi.co/api/v2/region/5/')
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
    image.src = './images/unova/unova-map.png'
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
        console.log("------------------------")
        if ((event.pageX - curleft) < 465 && (event.pageX - curleft) > 443 && (event.pageY - curtop) < 489 && (event.pageY - curtop) > 456) {
          this.setState({
            area: 'nuvema-town-area'
          })

        } else if ((event.pageX - curleft) < 465 && (event.pageX - curleft) > 443 && (event.pageY - curtop) < 456 && (event.pageY - curtop) > 429) {
          this.setState({
            area: 'unova-route-1-area'
          })
          this.fetchMe(356)
        } else if ((event.pageX - curleft) < 465 && (event.pageX - curleft) > 443 && (event.pageY - curtop) < 429 && (event.pageY - curtop) > 395) {
          this.setState({
            area: 'accumula-town-area'
          })

        } else if ((event.pageX - curleft) < 464 && (event.pageX - curleft) > 440 && (event.pageY - curtop) < 394 && (event.pageY - curtop) > 370) {
          this.setState({
            area: 'unova-route-2-area'
          })
          this.fetchMe(624)
        } else if ((event.pageX - curleft) < 458 && (event.pageX - curleft) > 434 && (event.pageY - curtop) < 370 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'striaton-city-area'
          })
          this.fetchMe(576)
        } else if ((event.pageX - curleft) < 434 && (event.pageX - curleft) > 408 && (event.pageY - curtop) < 362 && (event.pageY - curtop) > 345) {
          this.setState({
            area: 'unova-route-3-area'
          })
          this.fetchMe(358)
        } else if ((event.pageX - curleft) < 408 && (event.pageX - curleft) > 386 && (event.pageY - curtop) < 370 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'nacrene-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 385 && (event.pageX - curleft) > 375 && (event.pageY - curtop) < 383 && (event.pageY - curtop) > 367) {
          this.setState({
            area: 'pinwheel-forest-inside'
          })
          this.fetchMe(582)
        } else if ((event.pageX - curleft) < 366 && (event.pageX - curleft) > 271 && (event.pageY - curtop) < 387 && (event.pageY - curtop) > 352) {
          this.setState({
            area: 'skyarrow-bridge-area'
          })

        } else if ((event.pageX - curleft) < 269 && (event.pageX - curleft) > 249 && (event.pageY - curtop) < 406 && (event.pageY - curtop) > 372) {
          this.setState({
            area: 'castelia-city-area'
          })
          this.fetchMe(656)
        } else if ((event.pageX - curleft) < 310 && (event.pageX - curleft) > 300 && (event.pageY - curtop) < 436 && (event.pageY - curtop) > 422) {
          this.setState({
            area: 'castelia-sewers-area'
          })
          this.fetchMe(671)
        } else if ((event.pageX - curleft) < 269 && (event.pageX - curleft) > 248 && (event.pageY - curtop) < 371 && (event.pageY - curtop) > 323) {
          this.setState({
            area: 'unova-route-4-area'
          })
          this.fetchMe(627)
        } else if ((event.pageX - curleft) < 266 && (event.pageX - curleft) > 252 && (event.pageY - curtop) < 323 && (event.pageY - curtop) > 301) {
          this.setState({
            area: 'join-avenue-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 269 && (event.pageX - curleft) > 248 && (event.pageY - curtop) < 323 && (event.pageY - curtop) > 289) {
          this.setState({
            area: 'unova-route-4-area'
          })
          this.fetchMe(627)
        } else if ((event.pageX - curleft) < 268 && (event.pageX - curleft) > 247 && (event.pageY - curtop) < 288 && (event.pageY - curtop) > 256) {
          this.setState({
            area: 'nimbasa-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 250 && (event.pageX - curleft) > 231 && (event.pageY - curtop) < 320 && (event.pageY - curtop) > 304) {
          this.setState({
            area: 'desert-resort-area'
          })
          this.fetchMe(584)
        } else if ((event.pageX - curleft) < 231 && (event.pageX - curleft) > 220 && (event.pageY - curtop) < 319 && (event.pageY - curtop) > 305) {
          this.setState({
            area: 'relic-castle-a'
          })
          this.fetchMe(585)
        } else if ((event.pageX - curleft) < 268 && (event.pageX - curleft) > 245 && (event.pageY - curtop) < 294 && (event.pageY - curtop) > 267) {
          this.setState({
            area: 'ruins-of-alph-outside'
          })
          this.fetchMe(193)
        } else if ((event.pageX - curleft) < 246 && (event.pageX - curleft) > 223 && (event.pageY - curtop) < 282 && (event.pageY - curtop) > 261) {
          this.setState({
            area: 'unova-route-5-area'
          })
          this.fetchMe(628)
        } else if ((event.pageX - curleft) < 223 && (event.pageX - curleft) > 186 && (event.pageY - curtop) < 282 && (event.pageY - curtop) > 261) {
          this.setState({
            area: 'driftveil-drawbridge-area'
          })
          this.fetchMe(620)
        } else if ((event.pageX - curleft) < 186 && (event.pageX - curleft) > 156 && (event.pageY - curtop) < 282 && (event.pageY - curtop) > 261) {
          this.setState({
            area: 'unova-route-5-area'
          })
          this.fetchMe(628)
        } else if ((event.pageX - curleft) < 156 && (event.pageX - curleft) > 134 && (event.pageY - curtop) < 289 && (event.pageY - curtop) > 257) {
          this.setState({
            area: 'driftveil-city-area'
          })
          this.fetchMe(577)
        } else if ((event.pageX - curleft) < 159 && (event.pageX - curleft) > 144 && (event.pageY - curtop) < 319 && (event.pageY - curtop) > 299) {
          this.setState({
            area: 'cold-storage-area'
          })
          this.fetchMe(589)
        } else if ((event.pageX - curleft) < 147 && (event.pageX - curleft) > 137 && (event.pageY - curtop) < 239 && (event.pageY - curtop) > 223) {
          this.setState({
            area: 'clay-tunnel-area'
          })
          this.fetchMe(695)
        } else if ((event.pageX - curleft) < 147 && (event.pageX - curleft) > 137 && (event.pageY - curtop) < 172 && (event.pageY - curtop) > 160) {
          this.setState({
            area: 'twist-mountain-area'
          })
          this.fetchMe(593)
        } else if ((event.pageX - curleft) < 155 && (event.pageX - curleft) > 135 && (event.pageY - curtop) < 145 && (event.pageY - curtop) > 113) {
          this.setState({
            area: 'icirrus-city-area'
          })
          this.fetchMe(578)
        } else if ((event.pageX - curleft) < 130 && (event.pageX - curleft) > 87 && (event.pageY - curtop) < 255 && (event.pageY - curtop) > 209) {
          this.setState({
            area: 'unova-route-6-area'
          })
          this.fetchMe(629)
        } else if ((event.pageX - curleft) < 87 && (event.pageX - curleft) > 78 && (event.pageY - curtop) < 247 && (event.pageY - curtop) > 232) {
          this.setState({
            area: 'chargestone-cave-1f'
          })
          this.fetchMe(590)
        } else if ((event.pageX - curleft) < 89 && (event.pageX - curleft) > 68 && (event.pageY - curtop) < 216 && (event.pageY - curtop) > 184) {
          this.setState({
            area: 'mistralton-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 135 && (event.pageX - curleft) > 89 && (event.pageY - curtop) < 191 && (event.pageY - curtop) > 143) {
          this.setState({
            area: 'unova-route-7-area'
          })
          this.fetchMe(362)
        } else if ((event.pageX - curleft) < 110 && (event.pageX - curleft) > 102 && (event.pageY - curtop) < 158 && (event.pageY - curtop) > 143) {
          this.setState({
            area: 'celestial-tower-2f'
          })
          this.fetchMe(633)
        } else if ((event.pageX - curleft) < 184 && (event.pageX - curleft) > 157 && (event.pageY - curtop) < 141 && (event.pageY - curtop) > 119) {
          this.setState({
            area: 'unova-route-8-area'
          })
          this.fetchMe(637)
        } else if ((event.pageX - curleft) < 291 && (event.pageX - curleft) > 271 && (event.pageY - curtop) < 141 && (event.pageY - curtop) > 119) {
          this.setState({
            area: 'unova-route-11-area'
          })
          this.fetchMe(645)
        } else if ((event.pageX - curleft) < 179 && (event.pageX - curleft) > 168 && (event.pageY - curtop) < 117 && (event.pageY - curtop) > 101) {
          this.setState({
            area: 'moor-of-icirrus-area'
          })
          this.fetchMe(638)
        } else if ((event.pageX - curleft) < 223 && (event.pageX - curleft) > 184 && (event.pageY - curtop) < 141 && (event.pageY - curtop) > 119) {
          this.setState({
            area: 'tubeline-bridge-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 247 && (event.pageX - curleft) > 223 && (event.pageY - curtop) < 141 && (event.pageY - curtop) > 119) {
          this.setState({
            area: 'unova-route-9-area'
          })
          this.fetchMe(639)
        } else if ((event.pageX - curleft) < 269 && (event.pageX - curleft) > 248 && (event.pageY - curtop) < 147 && (event.pageY - curtop) > 114) {
          this.setState({
            area: 'opelucid-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 330 && (event.pageX - curleft) > 291 && (event.pageY - curtop) < 141 && (event.pageY - curtop) > 119) {
          this.setState({
            area: 'village-bridge-area'
          })
          this.fetchMe(621)
        } else if ((event.pageX - curleft) < 361 && (event.pageX - curleft) > 330 && (event.pageY - curtop) < 141 && (event.pageY - curtop) > 119) {
          this.setState({
            area: 'unova-route-12-area'
          })
          this.fetchMe(646)
        } else if ((event.pageX - curleft) < 382 && (event.pageX - curleft) > 361 && (event.pageY - curtop) < 147 && (event.pageY - curtop) > 114) {
          this.setState({
            area: 'lacunosa-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 427 && (event.pageX - curleft) > 381 && (event.pageY - curtop) < 184 && (event.pageY - curtop) > 148) {
          this.setState({
            area: 'unova-route-13-area'
          })
          this.fetchMe(647)
        } else if ((event.pageX - curleft) < 450 && (event.pageX - curleft) > 427 && (event.pageY - curtop) < 219 && (event.pageY - curtop) > 186) {
          this.setState({
            area: 'undella-town-area'
          })
          this.fetchMe(654)
        } else if ((event.pageX - curleft) < 431 && (event.pageX - curleft) > 384 && (event.pageY - curtop) < 219 && (event.pageY - curtop) > 255) {
          this.setState({
            area: 'unova-route-14-area'
          })
          this.fetchMe(648)
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
    return <img src={`/images/unova/${this.state.area}.png`}/>
  }

  getNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let unovaPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nativePokemonLocations = foundPokemonLocations.filter(instance => unovaPokemonNames.includes(instance.pokemon.name))
    return nativePokemonLocations.map((instance, index) => <PokemonCard
      key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]} name={instance.pokemon.name} url={instance.pokemon.url} id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
      allMoves={this.state.moves}
    />)
  }

  getNonNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let unovaPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !unovaPokemonNames.includes(instance.pokemon.name))
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
      if (this.state.unovaPokemon) {
        return this.state.unovaPokemon.map((pokemon, index) =>
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
    if (parseInt(number) !== 10000) {
      fetch(`https://pokeapi.co/api/v2/location-area/${number}/`)
        .then(res => res.json())
        .then(place =>
          this.setState({
            strangeArray: place.pokemon_encounters.map(pokemon =>
              [pokemon.pokemon.name, pokemon.version_details[0].encounter_details[0].chance, pokemon.version_details[0].encounter_details[0].method.name]
              ).sort((a, b) => (a[2] > b[2]) ? 1: -1)
          })
        )
    } else if (parseInt(number) === 10000) {
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
        <h1>Unova</h1>
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

            <h1>Native to Unova: </h1>
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

        <div className="unova-pokemon">
          <h1>Unova Pokemon: </h1>
          <br></br>

          <h3>Search By Name:</h3>
          <input onChange={(event) => this.startQuery(event)}></input>

          <br></br>

          <h3>Search By Location:</h3>
          <input onChange={(event) => this.startLocationQuery(event)}></input>

          <br></br>

          {this.state.unovaPokemon && this.state.pokemonLocations && this.state.moves ? this.checkQuery() : <LoadingPage/>}
        </div>
      </div>
    )
  }
}

export default Unova
