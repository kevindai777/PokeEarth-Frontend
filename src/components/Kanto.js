import React from 'react'
import FadeIn from 'react-fade-in'
// import Modal from 'react-awesome-modal'
// import NewWindow from 'react-new-window'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage'

class Kanto extends React.Component {

  state = {
    data: null,
    locations: null,
    area: 'Kanto',
    pokemonLocations: null,
    query: null,
    locationQuery: null,
    formats: null,
    visible: false
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemon_locations')
      .then(res => res.json())
      .then(locations =>
        this.setState({
          pokemonLocations: locations
        })
      )

    // let smogonUsageFetch = require("smogon-usage-fetch")
    // var headers = new Headers();
    // var requestOptions = { method: 'GET',
    //            headers: headers,
    //            mode: 'cors'
    //             }
    // smogonUsageFetch.fetchTimeframes("https://cors-anywhere.herokuapp.com/")
    //   .then(timeframes => console.log("TIMEFRAMES", timeframes))
    //   .catch(console.error);
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
    image.src = './images/kanto/kanto.png'
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
        console.log("Y", event.pageY-curtop)
        console.log("-------------------------")
        if ((event.pageX - curleft) < 140 && (event.pageX - curleft) > 120 && (event.pageY - curtop) < 436 && (event.pageY - curtop) > 413) {
          this.setState({
            area: 'cinnabar-island-area'
          })

        } else if ((event.pageX - curleft) < 136 && (event.pageX - curleft) > 121 && (event.pageY - curtop) < 359 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'pallet-town-area'
          })

        } else if ((event.pageX - curleft) < 140 && (event.pageX - curleft) > 120 && (event.pageY - curtop) < 296 && (event.pageY - curtop) > 250) {
          this.setState({
            area: 'viridian-city-area'
          })

        } else if ((event.pageX - curleft) < 138 && (event.pageX - curleft) > 118 && (event.pageY - curtop) < 413 && (event.pageY - curtop) > 360) {
          this.setState({
            area: 'kanto-sea-route-21-area'
          })

        } else if ((event.pageX - curleft) < 142 && (event.pageX - curleft) > 114 && (event.pageY - curtop) < 336 && (event.pageY - curtop) > 294) {
          this.setState({
            area: 'kanto-route-1-area'
          })

        } else if ((event.pageX - curleft) < 142 && (event.pageX - curleft) > 114 && (event.pageY - curtop) < 251 && (event.pageY - curtop) > 229) {
          this.setState({
            area: 'kanto-route-2-south-towards-viridian-city'
          })

        } else if ((event.pageX - curleft) < 140 && (event.pageX - curleft) > 120 && (event.pageY - curtop) < 230 && (event.pageY - curtop) > 207) {
          this.setState({
            area: 'viridian-forest-area'
          })

        } else if ((event.pageX - curleft) < 155 && (event.pageX - curleft) > 119 && (event.pageY - curtop) < 201 && (event.pageY - curtop) > 158) {
          this.setState({
            area: 'pewter-city-area'
          })

        } else if ((event.pageX - curleft) < 221 && (event.pageX - curleft) > 157 && (event.pageY - curtop) < 183 && (event.pageY - curtop) > 129) {
          this.setState({
            area: 'kanto-route-3-area'
          })

        } else if ((event.pageX - curleft) < 237 && (event.pageX - curleft) > 222 && (event.pageY - curtop) < 154 && (event.pageY - curtop) > 129) {
          this.setState({
            area: 'mt-moon'
          })

        } else if ((event.pageX - curleft) < 322 && (event.pageX - curleft) > 239 && (event.pageY - curtop) < 154 && (event.pageY - curtop) > 129) {
          this.setState({
            area: 'kanto-route-4-area'
          })

        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 154 && (event.pageY - curtop) > 129) {
          this.setState({
            area: 'cerulean-city-area'
          })

        } else if ((event.pageX - curleft) < 341 && (event.pageX - curleft) > 319 && (event.pageY - curtop) < 129 && (event.pageY - curtop) > 75) {
          this.setState({
            area: 'kanto-route-24-area'
          })

        } else if ((event.pageX - curleft) < 382 && (event.pageX - curleft) > 340 && (event.pageY - curtop) < 106 && (event.pageY - curtop) > 78) {
          this.setState({
            area: 'kanto-route-25-area'
          })

        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 201 && (event.pageY - curtop) > 155) {
          this.setState({
            area: 'kanto-route-5-area'
          })

        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 286 && (event.pageY - curtop) > 246) {
          this.setState({
            area: 'kanto-route-6-area'
          })

        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 308 && (event.pageY - curtop) > 286) {
          this.setState({
            area: 'vermilion-city-area'
          })

        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 246 && (event.pageY - curtop) > 201) {
          this.setState({
            area: 'saffron-city-area'
          })

        } else if ((event.pageX - curleft) < 400 && (event.pageX - curleft) > 340 && (event.pageY - curtop) < 157 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'kanto-route-9-area'
          })

        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 152 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'rock-tunnel'
          })

        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 186 && (event.pageY - curtop) > 152) {
          this.setState({
            area: 'power-plant-area'
          })

        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 212 && (event.pageY - curtop) > 186) {
          this.setState({
            area: 'rock-tunnel'
          })

        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 231 && (event.pageY - curtop) > 207) {
          this.setState({
            area: 'lavender-town-area'
          })

        } else if ((event.pageX - curleft) < 400 && (event.pageX - curleft) > 347 && (event.pageY - curtop) < 235 && (event.pageY - curtop) > 205) {
          this.setState({
            area: 'kanto-route-8-area'
          })

        } else if ((event.pageX - curleft) < 280 && (event.pageX - curleft) > 261 && (event.pageY - curtop) < 232 && (event.pageY - curtop) > 206) {
          this.setState({
            area: 'celadon-city-area'
          })

        } else if ((event.pageX - curleft) < 261 && (event.pageX - curleft) > 178 && (event.pageY - curtop) < 232 && (event.pageY - curtop) > 206) {
          this.setState({
            area: 'kanto-route-16-area'
          })

        } else if ((event.pageX - curleft) < 202 && (event.pageX - curleft) > 178 && (event.pageY - curtop) < 359 && (event.pageY - curtop) > 231) {
          this.setState({
            area: 'kanto-route-17-area'
          })

        } else if ((event.pageX - curleft) < 279 && (event.pageX - curleft) > 178 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 358) {
          this.setState({
            area: 'kanto-route-18-area'
          })

        } else if ((event.pageX - curleft) < 300 && (event.pageX - curleft) > 280 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 358) {
          this.setState({
            area: 'fuchsia-city-area'
          })

        } else if ((event.pageX - curleft) < 339 && (event.pageX - curleft) > 300 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 358) {
          this.setState({
            area: 'kanto-route-15-area'
          })

        } else if ((event.pageX - curleft) < 362 && (event.pageX - curleft) > 339 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 333) {
          this.setState({
            area: 'kanto-route-14-area'
          })

        } else if ((event.pageX - curleft) < 422 && (event.pageX - curleft) > 362 && (event.pageY - curtop) < 363 && (event.pageY - curtop) > 333) {
          this.setState({
            area: 'kanto-route-13-area'
          })

        } else if ((event.pageX - curleft) < 423 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 333 && (event.pageY - curtop) > 232) {
          this.setState({
            area: 'kanto-route-12-area'
          })

        } else if ((event.pageX - curleft) < 401 && (event.pageX - curleft) > 359 && (event.pageY - curtop) < 308 && (event.pageY - curtop) > 286) {
          this.setState({
            area: 'kanto-route-11-area'
          })

        } else if ((event.pageX - curleft) < 358 && (event.pageX - curleft) > 340 && (event.pageY - curtop) < 380 && (event.pageY - curtop) > 286) {
          this.setState({
            area: 'digletts-cave'
          })

        } else if ((event.pageX - curleft) < 300 && (event.pageX - curleft) > 280 && (event.pageY - curtop) < 439 && (event.pageY - curtop) > 387) {
          this.setState({
            area: 'kanto-sea-route-19-area'
          })

        } else if ((event.pageX - curleft) < 219 && (event.pageX - curleft) > 184 && (event.pageY - curtop) < 439 && (event.pageY - curtop) > 410) {
          this.setState({
            area: 'seafoam-islands'
          })

        } else if ((event.pageX - curleft) < 280 && (event.pageX - curleft) > 220 && (event.pageY - curtop) < 439 && (event.pageY - curtop) > 410) {
          this.setState({
            area: 'kanto-sea-route-20-area'
          })

        } else if ((event.pageX - curleft) < 186 && (event.pageX - curleft) > 138 && (event.pageY - curtop) < 439 && (event.pageY - curtop) > 410) {
          this.setState({
            area: 'kanto-sea-route-20-area'
          })

        } else if ((event.pageX - curleft) < 120 && (event.pageX - curleft) > 78 && (event.pageY - curtop) < 285 && (event.pageY - curtop) > 255) {
          this.setState({
            area: 'kanto-route-22-area'
          })

        } else if ((event.pageX - curleft) < 79 && (event.pageX - curleft) > 55 && (event.pageY - curtop) < 284 && (event.pageY - curtop) > 178) {
          this.setState({
            area: 'kanto-route-23-area'
          })

        } else if ((event.pageX - curleft) < 79 && (event.pageX - curleft) > 55 && (event.pageY - curtop) < 179 && (event.pageY - curtop) > 156) {
          this.setState({
            area: 'victory-road'
          })

        } else if ((event.pageX - curleft) < 79 && (event.pageX - curleft) > 55 && (event.pageY - curtop) < 156 && (event.pageY - curtop) > 123) {
          this.setState({
            area: 'indigo-plateau'
          })

        } else if ((event.pageX - curleft) < 307 && (event.pageX - curleft) > 281 && (event.pageY - curtop) < 232 && (event.pageY - curtop) > 206) {
          this.setState({
            area: 'kanto-route-7-area'
          })
        }

      }
    }
    return undefined
  }

  determineImage = () => {
    return <img src={`/images/kanto/${this.state.area}.png`}/>
  }

  getNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let kantoPokemonNames = this.state.data.map(pokemon => pokemon.name)
    let nativePokemonLocations = foundPokemonLocations.filter(instance => kantoPokemonNames.includes(instance.pokemon.name))
    return nativePokemonLocations.map((instance, index) => <PokemonCard key={index + 1} name={instance.pokemon.name} url={instance.pokemon.url} id={index + 1}/>)
  }

  getNonNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let kantoPokemonNames = this.state.data.map(pokemon => pokemon.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !kantoPokemonNames.includes(instance.pokemon.name))
    return nonNativePokemonLocations.map((instance, index) => <PokemonCard key={index + 1} name={instance.pokemon.name} url={instance.pokemon.url} id={index + 1}/>)
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
              key={index + 1}
              name={pokemon.name}
              url={pokemon.url}
              id={index + 1}
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
            name={pokemon.name}
            url={pokemon.url}
            id={index + 1}
          />
      )
    }
  }

  filterByLocation = () => {
    if (this.state.pokemonLocations) {
      let superFilteredPokemon = this.state.pokemonLocations.filter(instance => instance.location.name.includes(this.state.locationQuery))
      return superFilteredPokemon.map((instance, index) =>
          <PokemonCard
            name={instance.pokemon.name}
            url={instance.pokemon.url}
            id={index + 1}
          />
      )
    }
  }

  openModal = () => {
    this.setState({
      visible: true
    })
  }

  closeModal = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <div className="kanto">
        <h1>Kanto</h1>
        <br></br>
        <FadeIn>
          <canvas
            style={{float: 'left', marginLeft: '64px'}}
            className="map"
            ref="canvas"
            width={500}
            height={500}
            onClick={(event) => {this.getInfo(event); this.openModal()}}
          />
        </FadeIn>

        {/* <Modal visible={this.state.visible}>
             {this.state.area}
           </Modal> */}

        <FadeIn>
          <div className="city-card">
            {this.state.area}
            <br></br>
            {this.determineImage()}
            <br></br>

            <h1>Native to Kanto: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data ? this.getNativePokemonLocations() : null}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data ? this.getNonNativePokemonLocations() : null}

          </div>
        </FadeIn>

        <div className="kanto-pokemon">
          <h1>Kanto Pokemon: </h1>
          <br></br>

          <h3>Search By Name:</h3>
          <input onChange={(event) => this.startQuery(event)}></input>

          <br></br>

          <h3>Search By Location:</h3>
          <input onChange={(event) => this.startLocationQuery(event)}></input>

          <br></br>

        {this.state.data && this.state.pokemonLocations ? this.checkQuery() : <LoadingPage/>}

        </div>
      </div>
    )
  }
}

export default Kanto
