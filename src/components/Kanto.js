import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'
import { Search } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Kanto extends React.Component {

  state = {
    data: null,
    locations: null,
    area: 'Kanto',
    pokemonLocations: null,
    query: null,
    locationQuery: null,
    formats: null,
    visible: false,
    moves: null
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemon_locations/kanto')
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
        console.log("X", event.pageX - curleft)
        console.log("Y", event.pageY-curtop)
        console.log("-------------------------")
        if ((event.pageX - curleft) < 140 && (event.pageX - curleft) > 120 && (event.pageY - curtop) < 436 && (event.pageY - curtop) > 413) {
          this.setState({
            area: 'cinnabar-island-area'
          })
          this.fetchMe(279)
        } else if ((event.pageX - curleft) < 140 && (event.pageX - curleft) > 120 && (event.pageY - curtop) < 445 && (event.pageY - curtop) > 436) {
          this.setState({
            area: 'pokemon-mansion-1f'
          })
          this.fetchMe(285)
        } else if ((event.pageX - curleft) < 136 && (event.pageX - curleft) > 121 && (event.pageY - curtop) < 359 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'pallet-town-area'
          })
          this.fetchMe(285)
        } else if ((event.pageX - curleft) < 140 && (event.pageX - curleft) > 120 && (event.pageY - curtop) < 296 && (event.pageY - curtop) > 250) {
          this.setState({
            area: 'viridian-city-area'
          })
          this.fetchMe(280)
        } else if ((event.pageX - curleft) < 138 && (event.pageX - curleft) > 118 && (event.pageY - curtop) < 413 && (event.pageY - curtop) > 360) {
          this.setState({
            area: 'kanto-sea-route-21-area'
          })
          this.fetchMe(277)
        } else if ((event.pageX - curleft) < 142 && (event.pageX - curleft) > 114 && (event.pageY - curtop) < 336 && (event.pageY - curtop) > 294) {
          this.setState({
            area: 'kanto-route-1-area'
          })
          this.fetchMe(295)
        } else if ((event.pageX - curleft) < 142 && (event.pageX - curleft) > 114 && (event.pageY - curtop) < 251 && (event.pageY - curtop) > 229) {
          this.setState({
            area: 'kanto-route-2-south-towards-viridian-city'
          })
          this.fetchMe(296)
        } else if ((event.pageX - curleft) < 140 && (event.pageX - curleft) > 120 && (event.pageY - curtop) < 230 && (event.pageY - curtop) > 207) {
          this.setState({
            area: 'viridian-forest-area'
          })
          this.fetchMe(321)
        } else if ((event.pageX - curleft) < 155 && (event.pageX - curleft) > 119 && (event.pageY - curtop) < 201 && (event.pageY - curtop) > 158) {
          this.setState({
            area: 'pewter-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 221 && (event.pageX - curleft) > 157 && (event.pageY - curtop) < 183 && (event.pageY - curtop) > 129) {
          this.setState({
            area: 'kanto-route-3-area'
          })
          this.fetchMe(297)
        } else if ((event.pageX - curleft) < 237 && (event.pageX - curleft) > 222 && (event.pageY - curtop) < 154 && (event.pageY - curtop) > 129) {
          this.setState({
            area: 'mt-moon-1f'
          })
          this.fetchMe(290)
        } else if ((event.pageX - curleft) < 322 && (event.pageX - curleft) > 239 && (event.pageY - curtop) < 154 && (event.pageY - curtop) > 129) {
          this.setState({
            area: 'kanto-route-4-area'
          })
          this.fetchMe(298)
        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 154 && (event.pageY - curtop) > 129) {
          this.setState({
            area: 'cerulean-city-area'
          })
          this.fetchMe(281)
        } else if ((event.pageX - curleft) < 320 && (event.pageX - curleft) > 302 && (event.pageY - curtop) < 203 && (event.pageY - curtop) > 183) {
          this.setState({
            area: 'cerulean-cave-1f'
          })
          this.fetchMe(323)
        } else if ((event.pageX - curleft) < 341 && (event.pageX - curleft) > 319 && (event.pageY - curtop) < 129 && (event.pageY - curtop) > 75) {
          this.setState({
            area: 'kanto-route-24-area'
          })
          this.fetchMe(314)
        } else if ((event.pageX - curleft) < 382 && (event.pageX - curleft) > 340 && (event.pageY - curtop) < 106 && (event.pageY - curtop) > 78) {
          this.setState({
            area: 'kanto-route-25-area'
          })
          this.fetchMe(315)
        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 201 && (event.pageY - curtop) > 155) {
          this.setState({
            area: 'kanto-route-5-area'
          })
          this.fetchMe(299)
        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 286 && (event.pageY - curtop) > 246) {
          this.setState({
            area: 'kanto-route-6-area'
          })
          this.fetchMe(300)
        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 308 && (event.pageY - curtop) > 286) {
          this.setState({
            area: 'vermilion-city-area'
          })
          this.fetchMe(282)
        } else if ((event.pageX - curleft) < 340 && (event.pageX - curleft) > 320 && (event.pageY - curtop) < 246 && (event.pageY - curtop) > 201) {
          this.setState({
            area: 'saffron-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 400 && (event.pageX - curleft) > 340 && (event.pageY - curtop) < 157 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'kanto-route-9-area'
          })
          this.fetchMe(303)
        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 152 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'rock-tunnel-1f'
          })
          this.fetchMe(292)
        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 186 && (event.pageY - curtop) > 152) {
          this.setState({
            area: 'power-plant-area'
          })
          this.fetchMe(330)
        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 212 && (event.pageY - curtop) > 186) {
          this.setState({
            area: 'kanto-route-10-area'
          })
          this.fetchMe(304)
        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 231 && (event.pageY - curtop) > 207) {
          this.setState({
            area: 'lavender-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 400 && (event.pageX - curleft) > 347 && (event.pageY - curtop) < 235 && (event.pageY - curtop) > 205) {
          this.setState({
            area: 'kanto-route-8-area'
          })
          this.fetchMe(302)
        } else if ((event.pageX - curleft) < 280 && (event.pageX - curleft) > 261 && (event.pageY - curtop) < 232 && (event.pageY - curtop) > 206) {
          this.setState({
            area: 'celadon-city-area'
          })
          this.fetchMe(283)
        } else if ((event.pageX - curleft) < 261 && (event.pageX - curleft) > 178 && (event.pageY - curtop) < 232 && (event.pageY - curtop) > 206) {
          this.setState({
            area: 'kanto-route-16-area'
          })
          this.fetchMe(309)
        } else if ((event.pageX - curleft) < 202 && (event.pageX - curleft) > 178 && (event.pageY - curtop) < 359 && (event.pageY - curtop) > 231) {
          this.setState({
            area: 'kanto-route-17-area'
          })
          this.fetchMe(310)
        } else if ((event.pageX - curleft) < 279 && (event.pageX - curleft) > 178 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 358) {
          this.setState({
            area: 'kanto-route-18-area'
          })
          this.fetchMe(311)
        } else if ((event.pageX - curleft) < 300 && (event.pageX - curleft) > 280 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 358) {
          this.setState({
            area: 'fuchsia-city-area'
          })
          this.fetchMe(284)
        } else if ((event.pageX - curleft) < 300 && (event.pageX - curleft) > 280 && (event.pageY - curtop) < 358 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'kanto-safari-zone-middle'
          })
          this.fetchMe(345)
        } else if ((event.pageX - curleft) < 339 && (event.pageX - curleft) > 300 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 358) {
          this.setState({
            area: 'kanto-route-15-area'
          })
          this.fetchMe(308)
        } else if ((event.pageX - curleft) < 362 && (event.pageX - curleft) > 339 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 333) {
          this.setState({
            area: 'kanto-route-14-area'
          })
          this.fetchMe(307)
        } else if ((event.pageX - curleft) < 422 && (event.pageX - curleft) > 362 && (event.pageY - curtop) < 363 && (event.pageY - curtop) > 333) {
          this.setState({
            area: 'kanto-route-13-area'
          })
          this.fetchMe(306)
        } else if ((event.pageX - curleft) < 423 && (event.pageX - curleft) > 400 && (event.pageY - curtop) < 333 && (event.pageY - curtop) > 232) {
          this.setState({
            area: 'kanto-route-12-area'
          })
          this.fetchMe(276)
        } else if ((event.pageX - curleft) < 401 && (event.pageX - curleft) > 359 && (event.pageY - curtop) < 308 && (event.pageY - curtop) > 286) {
          this.setState({
            area: 'kanto-route-11-area'
          })
          this.fetchMe(305)
        } else if ((event.pageX - curleft) < 358 && (event.pageX - curleft) > 340 && (event.pageY - curtop) < 380 && (event.pageY - curtop) > 286) {
          this.setState({
            area: 'digletts-cave-area'
          })
          this.fetchMe(317)
        } else if ((event.pageX - curleft) < 300 && (event.pageX - curleft) > 280 && (event.pageY - curtop) < 439 && (event.pageY - curtop) > 387) {
          this.setState({
            area: 'kanto-sea-route-19-area'
          })
          this.fetchMe(277)
        } else if ((event.pageX - curleft) < 219 && (event.pageX - curleft) > 184 && (event.pageY - curtop) < 439 && (event.pageY - curtop) > 410) {
          this.setState({
            area: 'seafoam-islands-1f'
          })
          this.fetchMe(258)
        } else if ((event.pageX - curleft) < 280 && (event.pageX - curleft) > 220 && (event.pageY - curtop) < 439 && (event.pageY - curtop) > 410) {
          this.setState({
            area: 'kanto-sea-route-20-area'
          })
          this.fetchMe(278)
        } else if ((event.pageX - curleft) < 186 && (event.pageX - curleft) > 138 && (event.pageY - curtop) < 439 && (event.pageY - curtop) > 410) {
          this.setState({
            area: 'kanto-sea-route-20-area'
          })
          this.fetchMe(278)
        } else if ((event.pageX - curleft) < 120 && (event.pageX - curleft) > 78 && (event.pageY - curtop) < 285 && (event.pageY - curtop) > 255) {
          this.setState({
            area: 'kanto-route-22-area'
          })
          this.fetchMe(313)
        } else if ((event.pageX - curleft) < 79 && (event.pageX - curleft) > 55 && (event.pageY - curtop) < 284 && (event.pageY - curtop) > 178) {
          this.setState({
            area: 'kanto-route-23-area'
          })
          this.fetchMe(329)
        } else if ((event.pageX - curleft) < 79 && (event.pageX - curleft) > 59 && (event.pageY - curtop) < 351 && (event.pageY - curtop) > 286) {
          this.setState({
            area: 'kanto-route-26-area'
          })
          this.fetchMe(287)
        } else if ((event.pageX - curleft) < 82 && (event.pageX - curleft) > 1 && (event.pageY - curtop) < 380 && (event.pageY - curtop) > 351) {
          this.setState({
            area: 'kanto-route-27-area'
          })
          this.fetchMe(288)
        } else if ((event.pageX - curleft) < 57 && (event.pageX - curleft) > 19 && (event.pageY - curtop) < 286 && (event.pageY - curtop) > 255) {
          this.setState({
            area: 'kanto-route-28-area'
          })
          this.fetchMe(289)
        } else if ((event.pageX - curleft) < 79 && (event.pageX - curleft) > 55 && (event.pageY - curtop) < 179 && (event.pageY - curtop) > 156) {
          this.setState({
            area: 'kanto-victory-road-2-1f'
          })
          this.fetchMe(294)
        } else if ((event.pageX - curleft) < 79 && (event.pageX - curleft) > 55 && (event.pageY - curtop) < 156 && (event.pageY - curtop) > 123) {
          this.setState({
            area: 'indigo-plateau'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 307 && (event.pageX - curleft) > 281 && (event.pageY - curtop) < 232 && (event.pageY - curtop) > 206) {
          this.setState({
            area: 'kanto-route-7-area'
          })
          this.fetchMe(301)
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

  getNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let kantoPokemonNames = this.state.data.map(pokemon => pokemon.name)
    let nativePokemonLocations = foundPokemonLocations.filter(instance => kantoPokemonNames.includes(instance.pokemon.name))
    if (nativePokemonLocations.length > 0) {
      return nativePokemonLocations.map((instance, index) =>
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

  getNonNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let kantoPokemonNames = this.state.data.map(pokemon => pokemon.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !kantoPokemonNames.includes(instance.pokemon.name))
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

  render () {
    return (
      <div className="kanto">
        <h1>Kanto</h1>
        <Link to="/sevii">Click here to go to the Sevii Islands</Link>
        <br></br>
        <FadeIn>
          <canvas
            style={{float: 'left', marginLeft: '65px'}}
            className="map"
            ref="canvas"
            width={500}
            height={500}
            onClick={(event) => {this.getInfo(event)}}
          />
        </FadeIn>

        <FadeIn>
          <div className="city-card" style={{width: '52%', marginTop: '-15px'}}>
            <h1>{this.state.area}</h1>
            <br></br>
            <h2 style={{float: 'left', marginLeft: '40px'}}><i>{this.description()}</i></h2>
            <br></br>
            {this.determineImage()}
            <br></br>

            <h1>Native to Kanto: </h1>
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

        <div className="kanto-pokemon">
          <h1>Kanto Pokemon: </h1>
          <br></br>

          <h3>Search By Name:</h3>

          <label class="search" for="inpt_search">
  			    <Search onSearchChange={(event) => this.startQuery(event)}/>
  		    </label>

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

export default Kanto
