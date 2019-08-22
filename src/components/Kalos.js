import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'
import { Search } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ButtonToolbar, Button } from 'react-bootstrap'

class Kalos extends React.Component {

  state = {
    data: null,
    kalosPokemon: null,
    locations: null,
    area: 'Kalos',
    pokemonLocations: null,
    query: null,
    locationQuery: null,
    moves: null
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemon_locations/kalos')
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

    fetch('https://pokeapi.co/api/v2/pokedex/12/')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons.pokemon_entries
        }, () => this.getMorePokedex())
      })

    fetch('https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          kalosPokemon: pokemons.results
        })
      })

    fetch('https://pokeapi.co/api/v2/region/6/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          locations: region.locations
        })
      )
  }

  getMorePokedex = () => {
    fetch('https://pokeapi.co/api/v2/pokedex/13/')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: [...this.state.data, pokemons.pokemon_entries].flat()
        }, () => this.getEvenMorePokedex())
      })
  }

  getEvenMorePokedex = () => {
    fetch('https://pokeapi.co/api/v2/pokedex/14/')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: [...this.state.data, pokemons.pokemon_entries].flat()
        })
      })
  }

  updateCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d')

    const image = new Image()
    image.src = './images/kalos/kalos.png'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 520, 500);
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
        console.log("-----------------------")
        if ((event.pageX - curleft) < 358 && (event.pageX - curleft) > 333 && (event.pageY - curtop) < 450 && (event.pageY - curtop) > 414) {
          this.setState({
            area: 'vaniville-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 358 && (event.pageX - curleft) > 333 && (event.pageY - curtop) < 414 && (event.pageY - curtop) > 389) {
          this.setState({
            area: 'kalos-route-1-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 358 && (event.pageX - curleft) > 333 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 356) {
          this.setState({
            area: 'aquacorde-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 358 && (event.pageX - curleft) > 333 && (event.pageY - curtop) < 356 && (event.pageY - curtop) > 333) {
          this.setState({
            area: 'kalos-route-2-area'
          })
          this.fetchMe(713)
        } else if ((event.pageX - curleft) < 358 && (event.pageX - curleft) > 333 && (event.pageY - curtop) < 333 && (event.pageY - curtop) > 313) {
          this.setState({
            area: 'santalune-forest-area'
          })
          this.fetchMe(734)
        } else if ((event.pageX - curleft) < 338 && (event.pageX - curleft) > 326 && (event.pageY - curtop) < 312 && (event.pageY - curtop) > 298) {
          this.setState({
            area: 'kalos-route-3-area'
          })
          this.fetchMe(714)
        } else if ((event.pageX - curleft) < 329 && (event.pageX - curleft) > 309 && (event.pageY - curtop) < 299 && (event.pageY - curtop) > 270) {
          this.setState({
            area: 'santalune-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 373 && (event.pageX - curleft) > 331 && (event.pageY - curtop) < 289 && (event.pageY - curtop) > 268) {
          this.setState({
            area: 'kalos-route-22-area'
          })
          this.fetchMe(655)
        } else if ((event.pageX - curleft) < 369 && (event.pageX - curleft) > 354 && (event.pageY - curtop) < 314 && (event.pageY - curtop) > 290) {
          this.setState({
            area: 'chamber-of-emptiness-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 391 && (event.pageX - curleft) > 375 && (event.pageY - curtop) < 288 && (event.pageY - curtop) > 263) {
          this.setState({
            area: 'kalos-victory-road-unknown-area-322'
          })
          this.fetchMe(748)
        } else if ((event.pageX - curleft) < 430 && (event.pageX - curleft) > 391 && (event.pageY - curtop) < 288 && (event.pageY - curtop) > 263) {
          this.setState({
            area: 'kalos-route-21-area'
          })
          this.fetchMe(732)
        } else if ((event.pageX - curleft) < 451 && (event.pageX - curleft) > 430 && (event.pageY - curtop) < 288 && (event.pageY - curtop) > 263) {
          this.setState({
            area: 'snowbelle-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 438 && (event.pageX - curleft) > 420 && (event.pageY - curtop) < 362 && (event.pageY - curtop) > 297) {
          this.setState({
            area: 'kalos-route-20-area'
          })
          this.fetchMe(731)
        } else if ((event.pageX - curleft) < 430 && (event.pageX - curleft) > 412 && (event.pageY - curtop) < 394 && (event.pageY - curtop) > 367) {
          this.setState({
            area: 'pokemon-village-area'
          })
          this.fetchMe(747)
        } else if ((event.pageX - curleft) < 475 && (event.pageX - curleft) > 454 && (event.pageY - curtop) < 277 && (event.pageY - curtop) > 242) {
          this.setState({
            area: 'kalos-route-19-area'
          })
          this.fetchMe(730)
        } else if ((event.pageX - curleft) < 497 && (event.pageX - curleft) > 476 && (event.pageY - curtop) < 246 && (event.pageY - curtop) > 216) {
          this.setState({
            area: 'couriway-town-area'
          })
          this.fetchMe(708)
        } else if ((event.pageX - curleft) < 476 && (event.pageX - curleft) > 466 && (event.pageY - curtop) < 217 && (event.pageY - curtop) > 203) {
          this.setState({
            area: 'kalos-route-18-area'
          })
          this.fetchMe(729)
        } else if ((event.pageX - curleft) < 510 && (event.pageX - curleft) > 491 && (event.pageY - curtop) < 203 && (event.pageY - curtop) > 177) {
          this.setState({
            area: 'terminus-cave-unknown-area-343'
          })
          this.fetchMe(754)
        } else if ((event.pageX - curleft) < 466 && (event.pageX - curleft) > 448 && (event.pageY - curtop) < 207 && (event.pageY - curtop) > 174) {
          this.setState({
            area: 'anistar-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 445 && (event.pageX - curleft) > 367 && (event.pageY - curtop) < 185 && (event.pageY - curtop) > 150) {
          this.setState({
            area: 'kalos-route-17-area'
          })
          this.fetchMe(728)
        } else if ((event.pageX - curleft) < 365 && (event.pageX - curleft) > 346 && (event.pageY - curtop) < 166 && (event.pageY - curtop) > 137) {
          this.setState({
            area: 'dendemille-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 387 && (event.pageX - curleft) > 369 && (event.pageY - curtop) < 129 && (event.pageY - curtop) > 103) {
          this.setState({
            area: 'frost-cavern-unknown-area-313'
          })
          this.fetchMe(742)
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 323 && (event.pageY - curtop) < 138 && (event.pageY - curtop) > 113) {
          this.setState({
            area: 'kalos-route-15-area'
          })
          this.fetchMe(726)
        } else if ((event.pageX - curleft) < 302 && (event.pageX - curleft) > 279 && (event.pageY - curtop) < 91 && (event.pageY - curtop) > 66) {
          this.setState({
            area: 'kalos-route-15-area'
          })
          this.fetchMe(726)
        } else if ((event.pageX - curleft) < 323 && (event.pageX - curleft) > 302 && (event.pageY - curtop) < 119 && (event.pageY - curtop) > 86) {
          this.setState({
            area: 'kalos-route-15-area'
          })
          this.fetchMe(726)
        } else if ((event.pageX - curleft) < 319 && (event.pageX - curleft) > 302 && (event.pageY - curtop) < 145 && (event.pageY - curtop) > 119) {
          this.setState({
            area: 'lost-hotel-area'
          })
          this.fetchMe(759)
        } else if ((event.pageX - curleft) < 279 && (event.pageX - curleft) > 258 && (event.pageY - curtop) < 72 && (event.pageY - curtop) > 45) {
          this.setState({
            area: 'laverre-city-area'
          })
          this.fetchMe(712)
        } else if ((event.pageX - curleft) < 279 && (event.pageX - curleft) > 258 && (event.pageY - curtop) < 45 && (event.pageY - curtop) > 18) {
          this.setState({
            area: 'poke-ball-factory-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 279 && (event.pageX - curleft) > 258 && (event.pageY - curtop) < 149 && (event.pageY - curtop) > 45) {
          this.setState({
            area: 'kalos-route-14-area'
          })
          this.fetchMe(725)
        } else if ((event.pageX - curleft) < 345 && (event.pageX - curleft) > 293 && (event.pageY - curtop) < 177 && (event.pageY - curtop) > 156) {
          this.setState({
            area: 'kalos-route-16-area'
          })
          this.fetchMe(727)
        } else if ((event.pageX - curleft) < 293 && (event.pageX - curleft) > 245 && (event.pageY - curtop) < 223 && (event.pageY - curtop) > 150) {
          this.setState({
            area: 'lumiose-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 311 && (event.pageX - curleft) > 284 && (event.pageY - curtop) < 268 && (event.pageY - curtop) > 214) {
          this.setState({
            area: 'kalos-route-4-area'
          })
          this.fetchMe(715)
        } else if ((event.pageX - curleft) < 254 && (event.pageX - curleft) > 220 && (event.pageY - curtop) < 274 && (event.pageY - curtop) > 216) {
          this.setState({
            area: 'kalos-route-5-area'
          })
          this.fetchMe(716)
        } else if ((event.pageX - curleft) < 224 && (event.pageX - curleft) > 202 && (event.pageY - curtop) < 306 && (event.pageY - curtop) > 275) {
          this.setState({
            area: 'camphrier-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 202 && (event.pageX - curleft) > 124 && (event.pageY - curtop) < 306 && (event.pageY - curtop) > 275) {
          this.setState({
            area: 'kalos-route-7-area'
          })
          this.fetchMe(718)
        } else if ((event.pageX - curleft) < 203 && (event.pageX - curleft) > 161 && (event.pageY - curtop) < 275 && (event.pageY - curtop) > 231) {
          this.setState({
            area: 'kalos-route-6-area'
          })
          this.fetchMe(717)
        } else if ((event.pageX - curleft) < 163 && (event.pageX - curleft) > 145 && (event.pageY - curtop) < 237 && (event.pageY - curtop) > 209) {
          this.setState({
            area: 'parfum-palace-area'
          })
          this.fetchMe(735)
        } else if ((event.pageX - curleft) < 123 && (event.pageX - curleft) > 108 && (event.pageY - curtop) < 301 && (event.pageY - curtop) > 274) {
          this.setState({
            area: 'connecting-cave-area'
          })
          this.fetchMe(753)
        } else if ((event.pageX - curleft) < 108 && (event.pageX - curleft) > 101 && (event.pageY - curtop) < 301 && (event.pageY - curtop) > 274) {
          this.setState({
            area: 'kalos-route-7-area'
          })
          this.fetchMe(718)
        } else if ((event.pageX - curleft) < 101 && (event.pageX - curleft) > 82 && (event.pageY - curtop) < 301 && (event.pageY - curtop) > 274) {
          this.setState({
            area: 'cyllage-city-area'
          })
          this.fetchMe(710)
        } else if ((event.pageX - curleft) < 111 && (event.pageX - curleft) > 95 && (event.pageY - curtop) < 362 && (event.pageY - curtop) > 302) {
          this.setState({
            area: 'kalos-route-8-area'
          })
          this.fetchMe(719)
        } else if ((event.pageX - curleft) < 128 && (event.pageX - curleft) > 106 && (event.pageY - curtop) < 396 && (event.pageY - curtop) > 365) {
          this.setState({
            area: 'ambrette-town-area'
          })
          this.fetchMe(709)
        } else if ((event.pageX - curleft) < 179 && (event.pageX - curleft) > 128 && (event.pageY - curtop) < 396 && (event.pageY - curtop) > 365) {
          this.setState({
            area: 'kalos-route-9-area'
          })
          this.fetchMe(720)
        } else if ((event.pageX - curleft) < 199 && (event.pageX - curleft) > 179 && (event.pageY - curtop) < 396 && (event.pageY - curtop) > 365) {
          this.setState({
            area: 'glittering-cave-unknown-area-303'
          })
          this.fetchMe(736)
        } else if ((event.pageX - curleft) < 81 && (event.pageX - curleft) > 56 && (event.pageY - curtop) < 275 && (event.pageY - curtop) > 248) {
          this.setState({
            area: 'kalos-route-10-area'
          })
          this.fetchMe(721)
        } else if ((event.pageX - curleft) < 59 && (event.pageX - curleft) > 37 && (event.pageY - curtop) < 254 && (event.pageY - curtop) > 225) {
          this.setState({
            area: 'geosenge-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 59 && (event.pageX - curleft) > 51 && (event.pageY - curtop) < 224 && (event.pageY - curtop) > 211) {
          this.setState({
            area: 'kalos-route-11-area'
          })
          this.fetchMe(722)
        } else if ((event.pageX - curleft) < 73 && (event.pageX - curleft) > 57 && (event.pageY - curtop) < 212 && (event.pageY - curtop) > 190) {
          this.setState({
            area: 'reflection-cave-unknown-area-305'
          })
          this.fetchMe(738)
        } else if ((event.pageX - curleft) < 88 && (event.pageX - curleft) > 69 && (event.pageY - curtop) < 197 && (event.pageY - curtop) > 166) {
          this.setState({
            area: 'shalour-city-area'
          })
          this.fetchMe(711)
        } else if ((event.pageX - curleft) < 168 && (event.pageX - curleft) > 87 && (event.pageY - curtop) < 175 && (event.pageY - curtop) > 152) {
          this.setState({
            area: 'kalos-route-12-area'
          })
          this.fetchMe(723)
        } else if ((event.pageX - curleft) < 168 && (event.pageX - curleft) > 141 && (event.pageY - curtop) < 135 && (event.pageY - curtop) > 101) {
          this.setState({
            area: 'azure-bay-area'
          })
          this.fetchMe(760)
        } else if ((event.pageX - curleft) < 140 && (event.pageX - curleft) > 121 && (event.pageY - curtop) < 107 && (event.pageY - curtop) > 80) {
          this.setState({
            area: 'sea-spirits-den-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 189 && (event.pageX - curleft) > 169 && (event.pageY - curtop) < 166 && (event.pageY - curtop) > 135) {
          this.setState({
            area: 'coumarine-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 243 && (event.pageX - curleft) > 189 && (event.pageY - curtop) < 176 && (event.pageY - curtop) > 153) {
          this.setState({
            area: 'kalos-route-13-area'
          })
          this.fetchMe(724)
        }
      }
    }
    return undefined
  }

  determineImage = () => {
    return <img src={`/images/kalos/${this.state.area}.png`}/>
  }

  getNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let kalosPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nativePokemonLocations = foundPokemonLocations.filter(instance => kalosPokemonNames.includes(instance.pokemon.name))
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
    let kalosPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !kalosPokemonNames.includes(instance.pokemon.name))
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
      if (this.state.kalosPokemon) {
        return this.state.kalosPokemon.map((pokemon, index) =>
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
      let filteredPokemon = this.state.kalosPokemon.filter(pokemon => pokemon.name.includes(this.state.query))
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

      let kalosPokemonNames = this.state.kalosPokemon.map(pokemon => pokemon.name)

      let evenMoreFiltered = superFilteredPokemon.filter(instance => kalosPokemonNames.includes(instance.pokemon.name))

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
      case 'Kalos':
        return <p style={{marginLeft: '-10px'}}>The Sixth Region. Famous for it's high buildings and advanced technology.</p>
      case 'vaniville-town-area':
        return <p>Blooming buds covered in morning dew <br></br> exude hope for the future in this small town.</p>
      case 'kalos-route-1-area':
        return <p>A small and quiet country lane that <br></br> connects Vaniville Town and Aquacorde Town.</p>
      case 'aquacorde-town-area':
        return <p>A town that naturally sprang up as <br></br> people flocked to this pristine riverside.</p>
      case 'kalos-route-2-area':
        return <p>You'll find many Pokémon hiding among the tall <br></br> grass that grows in tufts along this trail.</p>
      case 'santalune-forest-area':
        return <p>The gentle light filtering through this sun-dappled forest <br></br> makes it a popular spot for nature walks.</p>
      case 'kalos-route-3-area':
        return <p>The little rises and hollows of this lush forest are a <br></br> favorite place for many kinds of Pokémon to play.</p>
      case 'santalune-city-area':
        return <p>Many beginning Trainers gather in this <br></br> friendly city to start a Pokémon journey.</p>
      case 'kalos-route-22-area':
        return <p>This lively path bustles with many Trainers and their <br></br> Pokémon, all gathered here to train themselves.</p>
      case 'chamber-of-emptiness-area':
        return <p>A mysterious void. It is said <br></br> that nothing can exist within it.</p>
      case 'kalos-victory-road-unknown-area-322':
        return <p>This treacherous path to the Pokémon League will <br></br> break the hearts of even the toughest Trainers.</p>
      case 'kalos-route-21-area':
        return <p>This is the path of the chosen, designed to hone the <br></br> stalwart Trainers who dare face the Pokémon League.</p>
      case 'snowbelle-city-area':
        return <p>They say the cold air flowing from the Pokémon Gym <br></br> is responsible for this city's frozen state.</p>
      case 'kalos-route-20-area':
        return <p>This path was designed to disturb the woods as little as possible, so it twists and turns among the trees.</p>
      case 'pokemon-village-area':
        return <p>Legends say a place exists where Pokémon live <br></br> in hiding, but no one has ever found it.</p>
      case 'kalos-route-19-area':
        return <p>This great valley can now be crossed thanks to its <br></br> long bridge, built with the help of many Pokémon.</p>
      case 'couriway-town-area':
        return <p>The railway brings people from great <br></br> distances to see the huge, majestic falls.</p>
      case 'kalos-route-18-area':
        return <p>This path is best known for its trolley, once <br></br> used for the coal mine, and the curious Inverse Battle house.</p>
      case 'terminus-cave-unknown-area-343':
        return <p>A coal mine that was closed a few years ago due <br></br> to rumors of a monster living deep within it.</p>
      case 'anistar-city-area':
        return <p>Some say the enigmatic device used <br></br> as a sundial came from outer space.</p>
      case 'kalos-route-17-area':
        return <p>Due to constant snowstorms and heavy snowfall, <br></br> humans have no hope of traversing this road on foot.</p>
      case 'dendemille-town-area':
        return <p>A rural town where Pokémon and windmills work <br></br> together to farm the land in a chilly latitude.</p>
      case 'frost-cavern-unknown-area-313':
        return <p>The drifting snow and impenetrable fog make this <br></br> cavern a place of fantastical illusions.</p>
      case 'kalos-route-15-area':
        return <p>This path has become a popular hangout for the <br></br> wild and directionless youths of Lumiose City.</p>
      case 'lost-hotel-area':
        return <p>This once-famous hotel clings to the shade of <br></br> its former glory after tragedy left it in ruins.</p>
      case 'laverre-city-area':
        return <p>An unearthly city created by those inspired by a <br></br> mysterious and ancient tree 1,500 years old.</p>
      case 'poke-ball-factory-area':
        return <p>An expansive factory where every Poké Ball <br></br> used in the Kalos region is produced.</p>
      case 'kalos-route-14-area':
        return <p>The lush trees and boggy swamps of this trail give <br></br> off an eerie vibe, even in broad daylight.</p>
      case 'kalos-route-16-area':
        return <p>This rustic path beside the glittering metropolis of <br></br> Lumiose City is a well-known fishing spot.</p>
      case 'lumiose-city-area':
        return <p>A dazzling metropolis of art and artifice, <br></br> located in the very heart of the Kalos region.</p>
      case 'kalos-route-4-area':
        return <p>This famed path's perfectly designed and executed gardens <br></br> are its highlight and a special point of pride.</p>
      case 'kalos-route-5-area':
        return <p>Roller Skaters from across the Kalos region gather <br></br> on this hilly path to demonstrate their best skills.</p>
      case 'camphrier-town-area':
        return <p>This ancient town was once famous for the <br></br> long-neglected manor home of a noble family.</p>
      case 'kalos-route-7-area':
        return <p>The longest single road in the Kalos region runs <br></br> straight alongside one of its greatest rivers.</p>
      case 'kalos-route-6-area':
        return <p>This tree-lined path was once covered with grass <br></br> as tall as a man, but it was cleared by the palace.</p>
      case 'parfum-palace-area':
        return <p>A luxurious palace constructed 300 years ago by a <br></br> king who wished to display his power to all.</p>
      case 'connecting-cave-area':
        return <p>This cave linking Route 7 and Cyllage City is <br></br> notable for its great hordes of Zubat.</p>
      case 'cyllage-city-area':
        return <p>A city nestled between the cliffs and the sea, <br></br> overlooked by steep Bicycle racecourses.</p>
      case 'kalos-route-8-area':
        return <p>This is a road of great contrasts, from <br></br> the harsh rock of the cliffs to the soft sands of the beach.</p>
      case 'ambrette-town-area':
        return <p>This town was known only for its aquarium until <br></br> the discovery of rare Fossils really put it on the map.</p>
      case 'kalos-route-9-area':
        return <p>This rocky passage was created by retired <br></br> Rhyhorn racers who forged a path where there was none.</p>
      case 'glittering-cave-unknown-area-303':
        return <p>Lose all sense of direction as you wander though <br></br> this cave, where Luminous Moss glows emerald green.</p>
      case 'kalos-route-10-area':
        return <p>Countless stones line this mysterious path in such <br></br> numbers and arrays that it seems overwhelming.</p>
      case 'geosenge-town-area':
        return <p>A town lined with mysterious stones <br></br> and encircled by strange ruins of old.</p>
      case 'kalos-route-11-area':
        return <p>One can feel the power of the earth's interior from <br></br> the crystals that sprout along this mountain path.</p>
      case 'reflection-cave-unknown-area-305':
        return <p>The sheer faces of these rock walls reflect the <br></br> images of people and Pokémon like nature's mirror.</p>
      case 'shalour-city-area':
        return <p>The seaside home of the Tower of Mastery, <br></br> where the legend of mysterious stones lives on.</p>
      case 'kalos-route-12-area':
        return <p>Frolicking Skiddo can be seen and ridden at <br></br> the Baa de Mer Ranch, located beside the breezy sea.</p>
      case 'azure-bay-area':
        return <p>The deep blue ocean off Kalos's coast, where <br></br> Pokémon from distant lands are said to visit.</p>
      case 'sea-spirits-den-area':
        return <p>A pit in the shallows of Azure Bay thought to have <br></br> been from an ancient outpouring of energy.</p>
      case 'coumarine-city-area':
        return <p>An exclusive resort area made popular thanks <br></br> to its clear skies and mild atmosphere.</p>
      case 'kalos-route-13-area':
        return <p>Since no plants can grow in the red clay of this <br></br> great plain, it hosts the Power Plant instead.</p>

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

  render () {
    return (
      <div>
        <h1 id="top">Kalos</h1>
        <br></br>
        <div style={{float: 'left', marginLeft: '64px'}}>
          <canvas
            className="map"
            ref="canvas"
            width={520}
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
          <div className="city-card" style={{width: '56.4%', marginTop: '-15px'}}>
            <h1>{this.state.area}</h1>
            <br></br>
            <h2 style={{float: 'left', marginLeft: '40px'}}><i>{this.description()}</i></h2>
            <br></br>
            {this.determineImage()}
            <br></br>

            <h1>Native to Kalos: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNativePokemonLocations() : <LoadingPage/>}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNonNativePokemonLocations() : <LoadingPage/>}
          </div>
        </FadeIn>

        <br></br>

        <div className="kalos-pokemon" id="pokedex">
          <h1>Kalos Pokemon: </h1>
          <br></br>

          <h3>Search By Name:</h3>
          <input onChange={(event) => this.startQuery(event)}></input>

          <br></br>

          <h3>Search By Location:</h3>
          <input onChange={(event) => this.startLocationQuery(event)}></input>

          <br></br>

          {this.state.kalosPokemon && this.state.pokemonLocations && this.state.moves ? this.checkQuery() : <LoadingPage/>}
        </div>
      </div>
    )
  }
}

export default Kalos
