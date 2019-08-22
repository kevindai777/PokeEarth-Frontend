import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage.js'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'
import { ButtonToolbar, Button } from 'react-bootstrap'

class Sinnoh extends React.Component {

  state = {
    data: null,
    area: 'sinnoh-map',
    moves: null
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemon_locations/sinnoh')
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
    fetch('https://pokeapi.co/api/v2/pokedex/5/')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons.pokemon_entries
        })
      })
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          sinnohPokemon: pokemons.results
        })
      })
  }

  updateCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d')
    const image = new Image()
    image.src = './images/sinnoh/sinnoh.png'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 650, 550);
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
        console.log("--------------------")
        if ((event.pageX - curleft) < 88 && (event.pageX - curleft) > 70 && (event.pageY - curtop) < 516 && (event.pageY - curtop) > 494) {
          this.setState({
            area: 'twinleaf-town-area'
          })
          this.fetchMe(177)
        } else if ((event.pageX - curleft) < 108 && (event.pageX - curleft) > 69 && (event.pageY - curtop) < 495 && (event.pageY - curtop) > 472) {
          this.setState({
            area: 'sinnoh-route-201-area'
          })
          this.fetchMe(141)
        } else if ((event.pageX - curleft) < 133 && (event.pageX - curleft) > 110 && (event.pageY - curtop) < 517 && (event.pageY - curtop) > 496) {
          this.setState({
            area: 'sinnoh-route-219-area'
          })
          this.fetchMe(169)
        } else if ((event.pageX - curleft) < 151 && (event.pageX - curleft) > 110 && (event.pageY - curtop) < 542 && (event.pageY - curtop) > 517) {
          this.setState({
            area: 'sinnoh-sea-route-220-area'
          })
          this.fetchMe(180)
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 151 && (event.pageY - curtop) < 542 && (event.pageY - curtop) > 517) {
          this.setState({
            area: 'sinnoh-route-221-area'
          })
          this.fetchMe(170)
        } else if ((event.pageX - curleft) < 215 && (event.pageX - curleft) > 195 && (event.pageY - curtop) < 542 && (event.pageY - curtop) > 517) {
          this.setState({
            area: 'pal-park-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 133 && (event.pageX - curleft) > 110 && (event.pageY - curtop) < 495 && (event.pageY - curtop) > 472) {
          this.setState({
            area: 'sandgem-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 67 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 496 && (event.pageY - curtop) > 450) {
          this.setState({
            area: 'lake-verity-before-galactic-intervention'
          })
          this.fetchMe(135)
        } else if ((event.pageX - curleft) < 132 && (event.pageX - curleft) > 111 && (event.pageY - curtop) < 472 && (event.pageY - curtop) > 450) {
          this.setState({
            area: 'sinnoh-route-202-area'
          })
          this.fetchMe(142)
        } else if ((event.pageX - curleft) < 46 && (event.pageX - curleft) > 25 && (event.pageY - curtop) < 425 && (event.pageY - curtop) > 378) {
          this.setState({
            area: 'canalave-city-area'
          })
          this.fetchMe(1)
        } else if ((event.pageX - curleft) < 156 && (event.pageX - curleft) > 133 && (event.pageY - curtop) < 426 && (event.pageY - curtop) > 403) {
          this.setState({
            area: 'sinnoh-route-203-area'
          })
          this.fetchMe(143)
        } else if ((event.pageX - curleft) < 172 && (event.pageX - curleft) > 156 && (event.pageY - curtop) < 426 && (event.pageY - curtop) > 403) {
          this.setState({
            area: 'oreburgh-gate-1f'
          })
          this.fetchMe(55)
        } else if ((event.pageX - curleft) < 133 && (event.pageX - curleft) > 90 && (event.pageY - curtop) < 450 && (event.pageY - curtop) > 403) {
          this.setState({
            area: 'jubilife-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 132 && (event.pageX - curleft) > 111 && (event.pageY - curtop) < 401 && (event.pageY - curtop) > 356) {
          this.setState({
            area: 'sinnoh-route-204-south-towards-jubilife-city'
          })
          this.fetchMe(144)
        } else if ((event.pageX - curleft) < 132 && (event.pageX - curleft) > 111 && (event.pageY - curtop) < 356 && (event.pageY - curtop) > 312) {
          this.setState({
            area: 'floaroma-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 132 && (event.pageX - curleft) > 111 && (event.pageY - curtop) < 312 && (event.pageY - curtop) > 285) {
          this.setState({
            area: 'fuego-ironworks-area'
          })
          this.fetchMe(10)
        } else if ((event.pageX - curleft) < 176 && (event.pageX - curleft) > 152 && (event.pageY - curtop) < 359 && (event.pageY - curtop) > 332) {
          this.setState({
            area: 'valley-windworks-area'
          })
          this.fetchMe(8)
        } else if ((event.pageX - curleft) < 154 && (event.pageX - curleft) > 132 && (event.pageY - curtop) < 358 && (event.pageY - curtop) > 288) {
          this.setState({
            area: 'sinnoh-route-205-south-towards-floaroma-town'
          })
          this.fetchMe(146)
        } else if ((event.pageX - curleft) < 175 && (event.pageX - curleft) > 130 && (event.pageY - curtop) < 288 && (event.pageY - curtop) > 241) {
          this.setState({
            area: 'eterna-forest-area'
          })
          this.fetchMe(9)
        } else if ((event.pageX - curleft) < 236 && (event.pageX - curleft) > 195 && (event.pageY - curtop) < 288 && (event.pageY - curtop) > 241) {
          this.setState({
            area: 'eterna-city-area'
          })
          this.fetchMe(9)
        } else if ((event.pageX - curleft) < 194 && (event.pageX - curleft) > 175 && (event.pageY - curtop) < 267 && (event.pageY - curtop) > 242) {
          this.setState({
            area: 'sinnoh-route-205-east-towards-eterna-city'
          })
          this.fetchMe(147)
        } else if ((event.pageX - curleft) < 218 && (event.pageX - curleft) > 172 && (event.pageY - curtop) < 449 && (event.pageY - curtop) > 401) {
          this.setState({
            area: 'oreburgh-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 236 && (event.pageX - curleft) > 193 && (event.pageY - curtop) < 404 && (event.pageY - curtop) > 377) {
          this.setState({
            area: 'sinnoh-route-207-area'
          })
          this.fetchMe(149)
        } else if ((event.pageX - curleft) < 218 && (event.pageX - curleft) > 193 && (event.pageY - curtop) < 377 && (event.pageY - curtop) > 289) {
          this.setState({
            area: 'sinnoh-route-206-area'
          })
          this.fetchMe(148)
        } else if ((event.pageX - curleft) < 260 && (event.pageX - curleft) > 236 && (event.pageY - curtop) < 405 && (event.pageY - curtop) > 310) {
          this.setState({
            area: 'mt-coronet-cave'
          })
          this.fetchMe(20)
        } else if ((event.pageX - curleft) < 281 && (event.pageX - curleft) > 256 && (event.pageY - curtop) < 336 && (event.pageY - curtop) > 149) {
          this.setState({
            area: 'mt-coronet-cave'
          })
          this.fetchMe(20)
        } else if ((event.pageX - curleft) < 256 && (event.pageX - curleft) > 238 && (event.pageY - curtop) < 268 && (event.pageY - curtop) > 241) {
          this.setState({
            area: 'sinnoh-route-211-west-towards-eterna-city'
          })
          this.fetchMe(159)
        } else if ((event.pageX - curleft) < 303 && (event.pageX - curleft) > 282 && (event.pageY - curtop) < 268 && (event.pageY - curtop) > 241) {
          this.setState({
            area: 'sinnoh-route-211-east-towards-celestic-town'
          })
          this.fetchMe(160)
        } else if ((event.pageX - curleft) < 325 && (event.pageX - curleft) > 303 && (event.pageY - curtop) < 268 && (event.pageY - curtop) > 241) {
          this.setState({
            area: 'celestic-town-area'
          })
          this.fetchMe(178)
        } else if ((event.pageX - curleft) < 386 && (event.pageX - curleft) > 325 && (event.pageY - curtop) < 268 && (event.pageY - curtop) > 241) {
          this.setState({
            area: 'sinnoh-route-210-west-towards-celestic-town'
          })
          this.fetchMe(158)
        } else if ((event.pageX - curleft) < 386 && (event.pageX - curleft) > 361 && (event.pageY - curtop) < 335 && (event.pageY - curtop) > 265) {
          this.setState({
            area: 'sinnoh-route-210-south-towards-solaceon-town'
          })
          this.fetchMe(157)
        } else if ((event.pageX - curleft) < 386 && (event.pageX - curleft) > 361 && (event.pageY - curtop) < 405 && (event.pageY - curtop) > 357) {
          this.setState({
            area: 'sinnoh-route-209-area'
          })
          this.fetchMe(151)
        } else if ((event.pageX - curleft) < 361 && (event.pageX - curleft) > 344 && (event.pageY - curtop) < 405 && (event.pageY - curtop) > 378) {
          this.setState({
            area: 'sinnoh-route-209-area'
          })
          this.fetchMe(151)
        } else if ((event.pageX - curleft) < 297 && (event.pageX - curleft) > 258 && (event.pageY - curtop) < 405 && (event.pageY - curtop) > 378) {
          this.setState({
            area: 'sinnoh-route-208-area'
          })
          this.fetchMe(150)
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 299 && (event.pageY - curtop) < 403 && (event.pageY - curtop) > 357) {
          this.setState({
            area: 'hearthome-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 408 && (event.pageX - curleft) > 363 && (event.pageY - curtop) < 357 && (event.pageY - curtop) > 334) {
          this.setState({
            area: 'solaceon-town-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 254 && (event.pageX - curleft) > 193 && (event.pageY - curtop) < 177 && (event.pageY - curtop) > 148) {
          this.setState({
            area: 'sinnoh-route-216-area'
          })
          this.fetchMe(166)
        } else if ((event.pageX - curleft) < 218 && (event.pageX - curleft) > 193 && (event.pageY - curtop) < 148 && (event.pageY - curtop) > 61) {
          this.setState({
            area: 'sinnoh-route-217-area'
          })
          this.fetchMe(167)
        } else if ((event.pageX - curleft) < 237 && (event.pageX - curleft) > 193 && (event.pageY - curtop) < 61 && (event.pageY - curtop) > 12) {
          this.setState({
            area: 'lake-acuity-area'
          })
          this.fetchMe(138)
        } else if ((event.pageX - curleft) < 260 && (event.pageX - curleft) > 237 && (event.pageY - curtop) < 61 && (event.pageY - curtop) > 12) {
          this.setState({
            area: 'snowpoint-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 446 && (event.pageX - curleft) > 386 && (event.pageY - curtop) < 315 && (event.pageY - curtop) > 287) {
          this.setState({
            area: 'sinnoh-route-215-area'
          })
          this.fetchMe(165)
        } else if ((event.pageX - curleft) < 492 && (event.pageX - curleft) > 446 && (event.pageY - curtop) < 335 && (event.pageY - curtop) > 288) {
          this.setState({
            area: 'veilstone-city-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 492 && (event.pageX - curleft) > 467 && (event.pageY - curtop) < 400 && (event.pageY - curtop) > 335) {
          this.setState({
            area: 'sinnoh-route-214-area'
          })
          this.fetchMe(164)
        } else if ((event.pageX - curleft) < 536 && (event.pageX - curleft) > 492 && (event.pageY - curtop) < 405 && (event.pageY - curtop) > 356) {
          this.setState({
            area: 'spring-path-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 492 && (event.pageX - curleft) > 446 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 401) {
          this.setState({
            area: 'lake-valor-area'
          })
          this.fetchMe(137)
        } else if ((event.pageX - curleft) < 492 && (event.pageX - curleft) > 428 && (event.pageY - curtop) < 496 && (event.pageY - curtop) > 446) {
          this.setState({
            area: 'sinnoh-route-213-area'
          })
          this.fetchMe(163)
        } else if ((event.pageX - curleft) < 428 && (event.pageX - curleft) > 385 && (event.pageY - curtop) < 496 && (event.pageY - curtop) > 446) {
          this.setState({
            area: 'pastoria-city-area'
          })
          this.fetchMe(3)
        } else if ((event.pageX - curleft) < 324 && (event.pageX - curleft) > 299 && (event.pageY - curtop) < 496 && (event.pageY - curtop) > 404) {
          this.setState({
            area: 'sinnoh-route-212-north-towards-hearthome-city'
          })
          this.fetchMe(161)
        } else if ((event.pageX - curleft) < 384 && (event.pageX - curleft) > 323 && (event.pageY - curtop) < 498 && (event.pageY - curtop) > 469) {
          this.setState({
            area: 'sinnoh-route-212-east-towards-pastoria-city'
          })
          this.fetchMe(162)
        } else if ((event.pageX - curleft) < 552 && (event.pageX - curleft) > 492 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 424) {
          this.setState({
            area: 'sinnoh-route-222-area'
          })
          this.fetchMe(171)
        } else if ((event.pageX - curleft) < 596 && (event.pageX - curleft) > 551 && (event.pageY - curtop) < 450 && (event.pageY - curtop) > 402) {
          this.setState({
            area: 'sunyshore-city-area'
          })
          this.fetchMe(4)
        } else if ((event.pageX - curleft) < 576 && (event.pageX - curleft) > 551 && (event.pageY - curtop) < 402 && (event.pageY - curtop) > 309) {
          this.setState({
            area: 'sinnoh-sea-route-223-area'
          })
          this.fetchMe(181)
        } else if ((event.pageX - curleft) < 576 && (event.pageX - curleft) > 551 && (event.pageY - curtop) < 309 && (event.pageY - curtop) > 264) {
          this.setState({
            area: 'sinnoh-pokemon-league-area'
          })
          this.fetchMe(5)
        } else if ((event.pageX - curleft) < 596 && (event.pageX - curleft) > 576 && (event.pageY - curtop) < 291 && (event.pageY - curtop) > 242) {
          this.setState({
            area: 'sinnoh-route-224-area'
          })
          this.fetchMe(172)
        } else if ((event.pageX - curleft) < 619 && (event.pageX - curleft) > 593 && (event.pageY - curtop) < 265 && (event.pageY - curtop) > 219) {
          this.setState({
            area: 'sinnoh-route-224-area'
          })
          this.fetchMe(172)
        } else if ((event.pageX - curleft) < 90 && (event.pageX - curleft) > 69 && (event.pageY - curtop) < 245 && (event.pageY - curtop) > 220) {
          this.setState({
            area: 'iron-island-area'
          })
          this.fetchMe(119)
        } else if ((event.pageX - curleft) < 217 && (event.pageX - curleft) > 193 && (event.pageY - curtop) < 467 && (event.pageY - curtop) > 450) {
          this.setState({
            area: 'oreburgh-mine-1f'
          })
          this.fetchMe(6)
        } else if ((event.pageX - curleft) < 619 && (event.pageX - curleft) > 593 && (event.pageY - curtop) < 219 && (event.pageY - curtop) > 28) {
          this.setState({
            area: 'seabreak-path-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 619 && (event.pageX - curleft) > 593 && (event.pageY - curtop) < 28 && (event.pageY - curtop) > 8) {
          this.setState({
            area: 'flower-paradise-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 427 && (event.pageX - curleft) > 404 && (event.pageY - curtop) < 172 && (event.pageY - curtop) > 103) {
          this.setState({
            area: 'sinnoh-route-225-area'
          })
          this.fetchMe(173)
        } else if ((event.pageX - curleft) < 448 && (event.pageX - curleft) > 427 && (event.pageY - curtop) < 130 && (event.pageY - curtop) > 103) {
          this.setState({
            area: 'survival-area-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 511 && (event.pageX - curleft) > 448 && (event.pageY - curtop) < 130 && (event.pageY - curtop) > 103) {
          this.setState({
            area: 'sinnoh-sea-route-226-area'
          })
          this.fetchMe(182)
        } else if ((event.pageX - curleft) < 513 && (event.pageX - curleft) > 488 && (event.pageY - curtop) < 103 && (event.pageY - curtop) > 56) {
          this.setState({
            area: 'sinnoh-route-227-area'
          })
          this.fetchMe(174)
        } else if ((event.pageX - curleft) < 513 && (event.pageX - curleft) > 488 && (event.pageY - curtop) < 56 && (event.pageY - curtop) > 34) {
          this.setState({
            area: 'stark-mountain-area'
          })
          this.fetchMe(57)
        } else if ((event.pageX - curleft) < 533 && (event.pageX - curleft) > 509 && (event.pageY - curtop) < 174 && (event.pageY - curtop) > 104) {
          this.setState({
            area: 'sinnoh-route-228-area'
          })
          this.fetchMe(175)
        } else if ((event.pageX - curleft) < 555 && (event.pageX - curleft) > 509 && (event.pageY - curtop) < 199 && (event.pageY - curtop) > 174) {
          this.setState({
            area: 'sinnoh-route-229-area'
          })
          this.fetchMe(176)
        } else if ((event.pageX - curleft) < 552 && (event.pageX - curleft) > 532 && (event.pageY - curtop) < 221 && (event.pageY - curtop) > 199) {
          this.setState({
            area: 'resort-area-area'
          })
          this.fetchMe(179)
        } else if ((event.pageX - curleft) < 509 && (event.pageX - curleft) > 448 && (event.pageY - curtop) < 199 && (event.pageY - curtop) > 174) {
          this.setState({
            area: 'sinnoh-sea-route-230-area'
          })
          this.fetchMe(183)
        } else if ((event.pageX - curleft) < 448 && (event.pageX - curleft) > 404 && (event.pageY - curtop) < 199 && (event.pageY - curtop) > 174) {
          this.setState({
            area: 'fight-area-area'
          })
          this.fetchMe(10000)
        } else if ((event.pageX - curleft) < 88 && (event.pageX - curleft) > 47 && (event.pageY - curtop) < 426 && (event.pageY - curtop) > 403) {
          this.setState({
            area: 'sinnoh-route-218-area'
          })
          this.fetchMe(168)
        }
      }
    }
    return undefined
  }

  determineImage = () => {
    return <img src={`/images/sinnoh/${this.state.area}.png`}/>
  }

  getNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let sinnohPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nativePokemonLocations = foundPokemonLocations.filter(instance => sinnohPokemonNames.includes(instance.pokemon.name))
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
    let sinnohPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !sinnohPokemonNames.includes(instance.pokemon.name))
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

      console.log(this.state.strangeArray)
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
      if (this.state.sinnohPokemon) {
        return this.state.sinnohPokemon.map((pokemon, index) =>
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
    if (this.state.sinnohPokemon) {
      let filteredPokemon = this.state.sinnohPokemon.filter(pokemon => pokemon.name.includes(this.state.query))
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

      let sinnohPokemonNames = this.state.sinnohPokemon.map(pokemon => pokemon.name)

      let evenMoreFiltered = superFilteredPokemon.filter(instance => sinnohPokemonNames.includes(instance.pokemon.name))

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
      case 'sinnoh-map':
        return <p style={{marginLeft: '5px'}}>The fourth region. Famous for the large canyon Mt. Coronet that runs through the middle.</p>
      case 'twinleaf-town-area':
        return <p>A small town with the fresh scent <br></br> of new leaves in the air.</p>
      case 'sinnoh-route-201-area':
        return <p>A small path through a lush, green, wooded area. <br></br> The densely grown trees give off a thick aroma.</p>
      case 'lake-verity-before-galactic-intervention':
        return <p>One of the lakes that is symbolic of the water-rich <br></br> Sinnoh Region. There is an odd legend associated with it.</p>
      case 'sinnoh-route-202-area':
        return <p>A winding path that twists through grassy fields. <br></br> Young Trainers like to test their battle skills here.</p>
      case 'sandgem-town-area':
        return <p>A sandy town that is located right next to a beach. <br></br> It is redolent with the salty scent of the sea.</p>
      case 'rustboro-city-area':
        return <p>This city is the main hub of industry in the Hoenn region, <br></br> with the Devon Corporation as its beating heart.</p>
      case 'sinnoh-route-219-area':
        return <p>A beautiful white-sand beach only five seconds on foot <br></br> from Sandgem Town. A pleasant breeze flows from the sea.</p>
      case 'sinnoh-sea-route-220-area':
        return <p>The sea here is perfect for swimming, with gentle winds <br></br> and tides. There are sandbars for resting too.</p>
      case 'sinnoh-route-221-area':
        return <p>A straight path hemmed by green grass and sparse stands of trees.</p>
      case 'pal-park-area':
        return <p>This used to be the location of the <br></br> Safari Zone, but is now the Pal Park.</p>
      case 'jubilife-city-area':
        return <p>The most modernized city in the Sinnoh <br></br> region. It is bustling with people on the go.</p>
      case 'sinnoh-route-204-south-towards-jubilife-city':
        return <p>A charming natural path that wanders <br></br> past many ponds and groves of trees.</p>
      case 'sinnoh-route-218-area':
        return <p>Despite its shortness, this road is revered by fishing <br></br> enthusiasts as a great, yet little known, fishing spot.</p>
      case 'sinnoh-route-205-south-towards-floaroma-town':
        return <p>A quietly following stream and hilly terrain with <br></br> one-way ledges make this a fun area for adventure.</p>
      case 'eterna-forest-area':
        return <p>A forest enveloped in chilly air. Thick stands <br></br> of trees turn the forest into a natural maze.</p>
      case 'fuego-ironworks-area':
        return <p>The ironworks refines iron ore mined from <br></br> Mt. Coronet to make iron and to manufacture mechanical parts.</p>
      case 'canalave-city-area':
        return <p>A port city that is bisected by a canal. <br></br> It has a distinctly exotic air of foreign culture.</p>
      case 'eterna-city-area':
        return <p>An old city that shows fading and <br></br> almost-forgotten vestiges of ancient history.</p>
      case 'sinnoh-route-206-area':
        return <p>Smoothly paved in asphalt, the Cycling Road is heavenly for bicycle lovers.</p>
      case 'floaroma-town-area':
        return <p>A town of flower lovers, Floaroma Town is <br></br> always perfumed with the sweet scent of flowers.</p>
      case 'sinnoh-route-207-area':
        return <p>Located at the foot of Mt. Coronet, <br></br> this road is carved into the rugged, rocky terrain.</p>
      case 'oreburgh-gate-area':
        return <p>Once one gets through the tunnel, <br></br> the city of Oreburgh is just a stone's throw away.</p>
      case 'oreburgh-city-area':
        return <p>A vibrant and energetic mining town that <br></br> is blessed with a precious natural resource.</p>
      case 'oreburgh-mine-1f':
        return <p>A mine south of the oreburgh city, <br></br> providing its leading energy source.</p>
      case 'sinnoh-route-203-area':
        return <p>Despite being so close to a big town, <br></br> this path retains its relaxed, natural atmosphere.</p>
      case 'sinnoh-route-208-area':
        return <p>A lush field of grass spreads from Mt. Coronets <br></br> sheer rock face, creating a vista of contrasts.</p>
      case 'mt-coronet-cave':
        return <p>A sacred mountain that is capped the year round <br></br> with snow. A gigantic maze sprawls inside it.</p>
      case 'hearthome-city-area':
        return <p>This friendly city started as a place where <br></br> people and Pokémon gathered, then grew into a center of commerce.</p>
      case 'sinnoh-route-209-area':
        return <p>The streams forded by this path wind past copses <br></br> and grassy patches in a serene and soothing manner.</p>
      case 'solaceon-town-area':
        return <p>The temperate climate makes this town a relaxed and casual place <br></br> for people and Pokémon to live in.</p>
      case 'sinnoh-route-210-south-towards-solaceon-town':
        return <p>This narrow route is lined with deep, tall grass <br></br> that tickles the noses of people straying off the path.</p>
      case 'sinnoh-route-210-west-towards-celestic-town':
        return <p>This narrow route is lined with deep, tall grass <br></br> that tickles the noses of people straying off the path.</p>
      case 'celestic-town-area':
        return <p>A tiny town that preserves the history <br></br> of Sinnoh and the old ways of life.</p>
      case 'sinnoh-route-212-east-towards-pastoria-city':
        return <p>A tall, sturdy wall surrounds an expansive estate <br></br> that takes up nearly half of the road space.</p>
      case 'sinnoh-route-212-north-towards-hearthome-city':
        return <p>A tall, sturdy wall surrounds an expansive estate <br></br> that takes up nearly half of the road space.</p>
      case 'pastoria-city-area':
        return <p>This city was originally founded to protect the Great Marsh. <br></br> It has grown naturally over the years.</p>
      case 'sinnoh-route-213-area':
        return <p>Offshore boulders form a jetty that becalms waves reaching <br></br> the beach. A resort hotel overlooks the water.</p>
      case 'lake-valor-area':
        return <p>One of the lakes that is symbolic of the water-rich Sinnoh <br></br> Region. There is an odd legend associated with it.</p>
      case 'sinnoh-route-214-area':
        return <p>The road joining Veilstone City and a lake is <br></br> described as either "wildly natural" or simply "a mess."</p>
      case 'sinnoh-route-215-area':
        return <p>This area is always inundated by heavy rainfall. <br></br> Only hardy Trainers that can take the rain gather here.</p>
      case 'spring-path-area':
        return <p>The fourth lake of Sinnoh that was kept secret. <br></br> Beneath the lake's surface is a cave where dimensions are distorted.</p>
      case 'veilstone-city-area':
        return <p>This city was made by carving out steep, rocky mountains. <br></br> Its isolation limits its contact with other cities.</p>
      case 'sinnoh-route-216-area':
        return <p>This mountainous road leads from Mt. Coronet. <br></br> Its constant snowfall and deep snowdrifts impede travelers.</p>
      case 'sinnoh-route-217-area':
        return <p>Snow blows down from Mt. Coronet and grows into a <br></br> harsh, ceaseless blizzard. Be prepared for the worst.</p>
      case 'lake-acuity-area':
        return <p>One of the lakes that is symbolic of the water-rich Sinnoh <br></br> Region. There is an odd legend associated with it. </p>
      case 'snowpoint-city-area':
        return <p>A winter wonderland of a city where stout <br></br> trees and buildings are blanketed in thick snow.</p>
      case 'sinnoh-route-222-area':
        return <p>A sandy beach extends from the road. The beach <br></br> is busy with avid Fishermen happily casting at the water's edge.</p>
      case 'sinnoh-sea-route-223-area':
        return <p>A marine route that requires travelers to <br></br> navigate around jutting rocks and sandbars.</p>
      case 'sunyshore-city-area':
        return <p>A port city that was built around the bay portion <br></br> of the cape. It is criss-crossed by elevated walkways.</p>
      case 'sinnoh-pokemon-league-area':
        return <p>Trainers seeking to become the best arrive <br></br> here after enduring a long and grueling journey.</p>
      case 'sinnoh-route-224-area':
        return <p>With grass fields, rocky outcroppings, the sea, <br></br> and sandbars, this area is like a miniature of the Sinnoh Region.</p>
      case 'seabreak-path-area':
        return <p>A straight path bounded by the sea on both <br></br> sides. It leads to the Flower Paradise.</p>
      case 'flower-paradise-area':
        return <p>A speck of an island far from any civilization. <br></br> It is covered in an abundance of flowers.</p>
      case 'survival-area-area':
        return <p>A city where hot-blooded Trainers gather <br></br> to work out and hone their battling skills.</p>
      case 'sinnoh-route-225-area':
        return <p>The path makes its way up and down among <br></br> rocky outcroppings. It is physically challenging.</p>
      case 'fight-area-area':
        return <p>A tiny port town where Trainers who <br></br> love battling more than eating gather.</p>
      case 'sinnoh-sea-route-226-area':
        return <p>A path that winds precariously along sheer cliffs that <br></br> go right to the edge of the sea's pounding waves.</p>
      case 'sinnoh-route-227-area':
        return <p>A rugged and steep mountain path where vision <br></br> is limited by steadily falling volcanic ash.</p>
      case 'stark-mountain-area':
        return <p>A rugged, seemingly indestructible rock mountain that <br></br> is thickly blanketed by the volcanic ash it spews.</p>
      case 'sinnoh-route-228-area':
        return <p>This rough path is harshly raked by a horizontally <br></br> blowing sandstorm driven by strong winds off the sea.</p>
      case 'sinnoh-route-229-area':
        return <p>A seaside path that makes its way <br></br> through wildly growing trees and plants.</p>
      case 'sinnoh-sea-route-230-area':
        return <p>A sea route that stretches from west to east. <br></br> There is an island that is rich with plant life along the way.</p>
      case 'resort-area-area':
        return <p>A city that attracts Trainers who know there <br></br> are other ways of enjoying Pokémon than battling.</p>

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
        <h1 id="top">Sinnoh</h1>
        <br></br>
        <div style={{float: 'left', marginLeft: '64px'}}>
          <FadeIn>
            <canvas
              className="map"
              ref="canvas"
              width={650}
              height={550}
              onClick={(event) => this.getInfo(event)}
            />
          </FadeIn>
          <div className="graph" id="graph">
            <h2 style={{fontSize: '140%'}}>Graphs for {this.state.area}</h2>
            {this.state.strangeArray ? this.createBars() :
              <div>
                <i>Nothing here!</i>
                <br></br>
                <img src="images/charmander.gif"/>
              </div>
            }
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
          <div className="city-card" style={{width: '48%', marginTop: '-10px'}}>
            <h1>{this.state.area}</h1>
            <br></br>
            <h2 style={{float: 'left', marginLeft: '40px'}}><i>{this.description()}</i></h2>
            <br></br>
            {this.determineImage()}
            <br></br>
            <h1>Native to Sinnoh: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNativePokemonLocations() : <LoadingPage/>}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data && this.state.moves ? this.getNonNativePokemonLocations() : <LoadingPage/>}
          </div>
        </FadeIn>

        <div className="sinnoh-pokemon" id="pokedex">
          <h1>Sinnoh Pokemon: </h1>
            <br></br>

            <h3>Search By Name:</h3>
            <input onChange={(event) => this.startQuery(event)}></input>

            <br></br>

            <h3>Search By Location:</h3>
            <input onChange={(event) => this.startLocationQuery(event)}></input>

            <br></br>

            {this.state.sinnohPokemon && this.state.pokemonLocations && this.state.moves ? this.checkQuery() : <LoadingPage/>}
        </div>
      </div>
    )
  }
}

export default Sinnoh
