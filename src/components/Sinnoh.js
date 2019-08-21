import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage.js'
import { BarChart, PieChart } from 'react-chartkick'
import 'chart.js'

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
        <h1>Sinnoh</h1>
        <br></br>
        <FadeIn>
          <canvas
            style={{float: 'left', marginLeft: '64px'}}
            className="map"
            ref="canvas"
            width={650}
            height={550}
            onClick={(event) => this.getInfo(event)}
          />
        </FadeIn>

        <FadeIn>
          <div className="city-card">
            {this.state.area}
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

        <div className="graph">
          {this.state.strangeArray ? this.createBars() : null}
        </div>

        <div className="sinnoh-pokemon">
          <h1>Sinnoh Pokemon: </h1>
          {
            this.state.sinnohPokemon ?
            this.state.sinnohPokemon.map((pokemon, index) =>
                <PokemonCard
                  key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                  name={pokemon.name}
                  url={pokemon.url}
                  id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                  allMoves={this.state.moves}
                />
            )
            :
            <LoadingPage/>
          }
        </div>
      </div>
    )
  }
}

export default Sinnoh
