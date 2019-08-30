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
        } else if ((event.pageX - curleft) < 431 && (event.pageX - curleft) > 384 && (event.pageY - curtop) < 255 && (event.pageY - curtop) > 219) {
          this.setState({
            area: 'unova-route-14-area'
          })
          this.fetchMe(648)
        } else if ((event.pageX - curleft) < 381 && (event.pageX - curleft) > 361 && (event.pageY - curtop) < 289 && (event.pageY - curtop) > 257) {
          this.setState({
            area: 'black-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 361 && (event.pageX - curleft) > 331 && (event.pageY - curtop) < 285 && (event.pageY - curtop) > 264) {
          this.setState({
            area: 'unova-route-15-area'
          })
          this.fetchMe(650)
        } else if ((event.pageX - curleft) < 292 && (event.pageX - curleft) > 270 && (event.pageY - curtop) < 285 && (event.pageY - curtop) > 264) {
          this.setState({
            area: 'unova-route-16-area'
          })
          this.fetchMe(651)
        } else if ((event.pageX - curleft) < 331 && (event.pageX - curleft) > 292 && (event.pageY - curtop) < 285 && (event.pageY - curtop) > 264) {
          this.setState({
            area: 'marvelous-bridge-area'
          })
          this.fetchMe(622)
        } else if ((event.pageX - curleft) < 292 && (event.pageX - curleft) > 282 && (event.pageY - curtop) < 261 && (event.pageY - curtop) > 245) {
          this.setState({
            area: 'lostlorn-forest-area'
          })
          this.fetchMe(652)
        } else if ((event.pageX - curleft) < 53 && (event.pageX - curleft) > 18 && (event.pageY - curtop) < 437 && (event.pageY - curtop) > 381) {
          this.setState({
            area: 'unova-route-19-area'
          })
          this.fetchMe(703)
        } else if ((event.pageX - curleft) < 75 && (event.pageX - curleft) > 53 && (event.pageY - curtop) < 398 && (event.pageY - curtop) > 363) {
          this.setState({
            area: 'floccesy-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 124 && (event.pageX - curleft) > 75 && (event.pageY - curtop) < 398 && (event.pageY - curtop) > 363) {
          this.setState({
            area: 'unova-route-20-area'
          })
          this.fetchMe(704)
        } else if ((event.pageX - curleft) < 145 && (event.pageX - curleft) > 124 && (event.pageY - curtop) < 398 && (event.pageY - curtop) > 363) {
          this.setState({
            area: 'virbank-city-area'
          })
          this.fetchMe(658)
        } else if ((event.pageX - curleft) < 87 && (event.pageX - curleft) > 75 && (event.pageY - curtop) < 361 && (event.pageY - curtop) > 346) {
          this.setState({
            area: 'floccesy-ranch-inner'
          })
          this.fetchMe(658)
        } else if ((event.pageX - curleft) < 131 && (event.pageX - curleft) > 121 && (event.pageY - curtop) < 421 && (event.pageY - curtop) > 406) {
          this.setState({
            area: 'virbank-complex-inner'
          })
          this.fetchMe(676)
        } else if ((event.pageX - curleft) < 443 && (event.pageX - curleft) > 422 && (event.pageY - curtop) < 490 && (event.pageY - curtop) > 460) {
          this.setState({
            area: 'unova-route-17-area'
          })
          this.fetchMe(655)
        } else if ((event.pageX - curleft) < 422 && (event.pageX - curleft) > 397 && (event.pageY - curtop) < 490 && (event.pageY - curtop) > 460) {
          this.setState({
            area: 'unova-route-18-area'
          })
          this.fetchMe(653)
        } else if ((event.pageX - curleft) < 460 && (event.pageX - curleft) > 446 && (event.pageY - curtop) < 191 && (event.pageY - curtop) > 172) {
          this.setState({
            area: 'undella-bay-area'
          })
          this.fetchMe(619)
        } else if ((event.pageX - curleft) < 467 && (event.pageX - curleft) > 456 && (event.pageY - curtop) < 166 && (event.pageY - curtop) > 153) {
          this.setState({
            area: 'seaside-cave-1f'
          })
          this.fetchMe(700)
        } else if ((event.pageX - curleft) < 467 && (event.pageX - curleft) > 456 && (event.pageY - curtop) < 153 && (event.pageY - curtop) > 124) {
          this.setState({
            area: 'unova-route-21-area'
          })
          this.fetchMe(707)
        } else if ((event.pageX - curleft) < 470 && (event.pageX - curleft) > 448 && (event.pageY - curtop) < 125 && (event.pageY - curtop) > 93) {
          this.setState({
            area: 'humilau-city-area'
          })
          this.fetchMe(659)
        } else if ((event.pageX - curleft) < 448 && (event.pageX - curleft) > 413 && (event.pageY - curtop) < 125 && (event.pageY - curtop) > 93) {
          this.setState({
            area: 'unova-route-22-area'
          })
          this.fetchMe(705)
        } else if ((event.pageX - curleft) < 413 && (event.pageX - curleft) > 402 && (event.pageY - curtop) < 125 && (event.pageY - curtop) > 93) {
          this.setState({
            area: 'giant-chasm-area'
          })
          this.fetchMe(615)
        } else if ((event.pageX - curleft) < 402 && (event.pageX - curleft) > 368 && (event.pageY - curtop) < 111 && (event.pageY - curtop) > 48) {
          this.setState({
            area: 'unova-route-23-area'
          })
          this.fetchMe(706)
        } else if ((event.pageX - curleft) < 366 && (event.pageX - curleft) > 343 && (event.pageY - curtop) < 61 && (event.pageY - curtop) > 39) {
          this.setState({
            area: 'unova-victory-road-unknown-area-53'
          })
          this.fetchMe(599)
        } else if ((event.pageX - curleft) < 342 && (event.pageX - curleft) > 322 && (event.pageY - curtop) < 63 && (event.pageY - curtop) > 29) {
          this.setState({
            area: 'unova-pokemon-league-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 312 && (event.pageX - curleft) > 272 && (event.pageY - curtop) < 98 && (event.pageY - curtop) > 78) {
          this.setState({
            area: 'unova-route-10-area'
          })
          this.fetchMe(643)
        } else if ((event.pageX - curleft) < 493 && (event.pageX - curleft) > 470 && (event.pageY - curtop) < 212 && (event.pageY - curtop) > 114) {
          this.setState({
            area: 'marine-tube-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 133 && (event.pageX - curleft) > 120 && (event.pageY - curtop) < 354 && (event.pageY - curtop) > 335) {
          this.setState({
            area: 'pokestar-studios-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 474 && (event.pageX - curleft) > 439 && (event.pageY - curtop) < 40 && (event.pageY - curtop) > 18) {
          this.setState({
            area: 'aspertia-city-area'
          })
          this.fetchMe(657)
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
    let unovaPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !unovaPokemonNames.includes(instance.pokemon.name))
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
      let filteredPokemon = this.state.unovaPokemon.filter(pokemon => pokemon.name.includes(this.state.query))
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

      let unovaPokemonNames = this.state.unovaPokemon.map(pokemon => pokemon.name)

      let evenMoreFiltered = superFilteredPokemon.filter(instance => unovaPokemonNames.includes(instance.pokemon.name))

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
      case 'unova-map':
        return <p style={{marginLeft: '263px'}}>The fifth region. A Dream World exists parallel to it.</p>
      case 'nuvema-town-area':
        return <p>A rural town whose sea breezes <br></br> give the sense of something coming.</p>
      case 'unova-route-1-area':
        return <p>A small road by the shore, where <br></br> you can enjoy the seascape in peace.</p>
      case 'accumula-town-area':
        return <p>This town offers great views <br></br> due to its many hills.</p>
      case 'unova-route-2-area':
        return <p>A pastoral road where novice <br></br> Trainers challenge one another.</p>
      case 'striaton-city-area':
        return <p>Entry stairs built in memory of a <br></br> former home in a snowier climate.</p>
      case 'unova-route-3-area':
        return <p>A long winding road with <br></br> lots of ponds and tall grass.</p>
      case 'nacrene-city-area':
        return <p>A city established in restored <br></br> storehouses built 100 years ago.</p>
      case 'pinwheel-forest-inside':
        return <p>You can go through hollows <br></br> of fallen trees, too.</p>
      case 'skyarrow-bridge-area':
        return <p>The biggest, longest bridge in <br></br> Unova has four supporting towers.</p>
      case 'castelia-city-area':
        return <p>A big city with skyscrapers <br></br> piercing the clouds.</p>
      case 'castelia-sewers-area':
        return <p>Iron bars around the exits were <br></br> dismantled, drawing curious Trainers.</p>
      case 'unova-route-4-area':
        return <p>A sandstorm delayed the road <br></br> construction to connect two cities.</p>
      case 'join-avenue-area':
        return <p>A big avenue that keeps developing <br></br> as you communicate with more people.</p>
      case 'nimbasa-city-area':
        return <p>A bustling city of entertainment, <br></br> with many theme parks.</p>
      case 'desert-resort-area':
        return <p>It is a popular place for tourists, <br></br> but too harsh to be a resort.</p>
      case 'relic-castle-a':
        return <p>Ancient ruins with a glorious history, <br></br> buried in the sand as time went by.</p>
      case 'unova-route-5-area':
        return <p>A busy road where performers gather.</p>
      case 'driftveil-drawbridge-area':
        return <p>A drawbridge raises and lowers, <br></br> depending on the ship schedules.</p>
      case 'driftveil-city-area':
        return <p>A port town distributing many goods, <br></br> and a gateway to the Unova region.</p>
      case 'cold-storage-area':
        return <p>Once an area of warehouses, it has <br></br> been transformed to the Pokemon World Tournament.</p>
      case 'clay-tunnel-area':
        return <p>A tunnel created by Clay's constant <br></br> mining. It leads to Twist Mountain.</p>
      case 'twist-mountain-1f':
        return <p>It has a reputation as a mine <br></br> littered with valuable ore.</p>
      case 'iccirus-city-area':
        return <p>In winter, the city is covered <br></br> with snow as far as the eye can see.</p>
      case 'unova-route-6-area':
        return <p>A road with many trees for nature lovers.</p>
      case 'chargestone-cave-1f':
        return <p>A cave where electrically charged stones float.</p>
      case 'mistralton-city-area':
        return <p>Vegetables are grown by the <br></br> runway and transported by cargo plane.</p>
      case 'unova-route-7-area':
        return <p>Raised walkways help you <br></br> avoid the tall grass.</p>
      case 'celestial-tower-2f':
        return <p>A tall tower with a large bell whose <br></br> tones are said to purify the spirit.</p>
      case 'unova-route-8-area':
        return <p>It rains a lot here, and the <br></br> marshy swamp holds many Pokémon.</p>
      case 'unova-route-11-area':
        return <p>Limpid streams carved beautiful <br></br> scenery on this road.</p>
      case 'moor-of-icirrus-area':
        return <p>They say water collecting in hollows <br></br> on the flat land created the moor.</p>
      case 'tubeline-bridge-area':
        return <p>A sturdy steel bridge that won't <br></br> budge an inch when trains cross it.</p>
      case 'unova-route-9-area':
        return <p>This paved road attracts <br></br> those who love bikes.</p>
      case 'opelucid-city-area':
        return <p>A convenient city of rapid change, <br></br> showing no traces of the past.</p>
      case 'village-bridge-area':
        return <p>An old bridge that settlers of the <br></br> Unova region built and now live on.</p>
      case 'unova-route-12-area':
        return <p>A place of fun, where it's enjoyable <br></br> just walking over its gentle hills.</p>
      case 'lacunosa-town-area':
        return <p>A town where all honor old customs, <br></br> living as methodically as clockwork.</p>
      case 'unova-route-13-area':
        return <p>This seaside route is famous for <br></br> sandbars that cross the ocean.</p>
      case 'undella-town-area':
        return <p>A summer retreat with a beach full <br></br> of people who enjoy summer vacations.</p>
      case 'unova-route-14-area':
        return <p>A road covered with mist <br></br> from the waterfalls.</p>
      case 'black-city-area':
        return <p>A modern city of ongoing <br></br> development that draws people to it.</p>
      case 'unova-route-15-area':
        return <p>A road whose sharp cliffs <br></br> may scare some people off.</p>
      case 'unova-route-16-area':
        return <p>Many who visit Nimbasa City <br></br> drop by to take a break.</p>
      case 'marvelous-bridge-area':
        return <p>The most advanced bridge in Unova, <br></br> designed to soften any impact.</p>
      case 'lostlorn-forest-area':
        return <p>It was once known as a place <br></br> where people got lost for no reason.</p>
      case 'unova-route-19-area':
        return <p>A path formed at the foot of <br></br> mountains. It has a gradual slope.</p>
      case 'floccesy-town-area':
        return <p>The town is famous for a clock tower <br></br> that tells of the town's beginnings.</p>
      case 'unova-route-20-area':
        return <p>In autumn, fallen leaves accumulate <br></br> and hide the ground beneath.</p>
      case 'virbank-city-area':
        return <p>A city often covered by clouds and <br></br> smoke, with very active residents.</p>
      case 'floccesy-ranch-inner':
        return <p>Before long, the area became a <br></br> ranch as Pokémon and people gathered.</p>
      case 'virbank-complex-inner':
        return <p>A complex that is designed so <br></br> Pokémon can work there easily.</p>
      case 'unova-route-17-area':
        return <p>The fast current here <br></br> makes it difficult to surf.</p>
      case 'unova-route-18-area':
        return <p>Some researchers believe it was <br></br> once contiguous with Desert Resort.</p>
      case 'undella-bay-area':
        return <p>A world-famous sea <br></br> of shining waves.</p>
      case 'seaside-cave-1f':
        return <p>A rock that became passable <br></br> due to wind, waves, and Pokémon.</p>
      case 'unova-route-21-area':
        return <p>Many rocks make swimming difficult. <br></br> Proud swimmers come to show off.</p>
      case 'humilau-city-area':
        return <p>A resort city where buildings float <br></br> in the waves and look like islands.</p>
      case 'unova-route-22-area':
        return <p>A lot of ups and downs and ledges <br></br> make the route a natural maze.</p>
      case 'giant-chasm-area':
        return <p>Legend says that if you approach <br></br> this big chasm, disasters surely follow.</p>
      case 'unova-route-23-area':
        return <p>A mountain path of no <br></br> return with overwhelming cliffs.</p>
      case 'unova-victory-road-unknown-area-53':
        return <p>These forking paths are the last <br></br> obstacle before the Pokémon League!</p>
      case 'unova-pokemon-league-area':
        return <p>Only Trainers who win at all <br></br> the Pokémon Gyms may challenge it.</p>
      case 'unova-route-10-area':
        return <p>A road leading to the Badge Check <br></br> Gates, chock full of showoffs.</p>
      case 'marine-tube-area':
        return <p>An undersea tunnel built <br></br> using cutting-edge technology.</p>
      case 'pokestar-studios-area':
        return <p>Pokéstar Studios, where <br></br> great movies are produced.</p>
      case 'aspertia-city-area':
        return <p>A city at the foot of high mountains <br></br> where you can see all of Unova.</p>

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
    fetch('http://localhost:3000/favorite_locations', {
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
        <h1 id="top">Unova</h1>
        <br></br>
        <div style={{float: 'left', marginLeft: '64px'}}>
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
          <div className="city-card" style={{width: '58%', marginTop: '-10px'}}>
            <h1>{this.state.area}</h1>
            <br></br>
            <h2 style={{float: 'left', marginLeft: '-180px'}}><i>{this.description()}</i></h2>
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

            <h1>Native to Unova: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNativePokemonLocations() : <LoadingPage/>}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNonNativePokemonLocations() : <LoadingPage/>}
          </div>
        </FadeIn>

        <br></br>

        <div className="unova-pokemon" id="pokedex">
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
