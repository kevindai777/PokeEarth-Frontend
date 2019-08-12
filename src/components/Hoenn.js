import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage.js'

class Hoenn extends React.Component {

  state = {
    data: null,
    hoennPokemon: null,
    area: 'Hoenn',
    pokemonLocations: null
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemon_locations')
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
            area: 'littleroot-town'
          })
        } else if ((event.pageX - curleft) < 150 && (event.pageX - curleft) > 132 && (event.pageY - curtop) < 431 && (event.pageY - curtop) > 378) {
          this.setState({
            area: 'hoenn-route-101-area'
          })
        } else if ((event.pageX - curleft) < 150 && (event.pageX - curleft) > 132 && (event.pageY - curtop) < 378 && (event.pageY - curtop) > 358) {
          this.setState({
            area: 'oldale-town'
          })
        } else if ((event.pageX - curleft) < 133 && (event.pageX - curleft) > 103 && (event.pageY - curtop) < 380 && (event.pageY - curtop) > 357) {
          this.setState({
            area: 'hoenn-route-102-area'
          })
        } else if ((event.pageX - curleft) < 103 && (event.pageX - curleft) > 70 && (event.pageY - curtop) < 380 && (event.pageY - curtop) > 357) {
          this.setState({
            area: 'petalburg-city'
          })
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 132 && (event.pageY - curtop) < 358 && (event.pageY - curtop) > 337) {
          this.setState({
            area: 'hoenn-route-103-area'
          })
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 354 && (event.pageY - curtop) > 301) {
          this.setState({
            area: 'hoenn-route-104-area'
          })
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 301 && (event.pageY - curtop) > 281) {
          this.setState({
            area: 'petalburg-woods'
          })
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 513 && (event.pageY - curtop) > 378) {
          this.setState({
            area: 'hoenn-route-105-area'
          })
        } else if ((event.pageX - curleft) < 105 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 539 && (event.pageY - curtop) > 515) {
          this.setState({
            area: 'hoenn-route-106-area'
          })
        } else if ((event.pageX - curleft) < 105 && (event.pageX - curleft) > 87 && (event.pageY - curtop) < 559 && (event.pageY - curtop) > 539) {
          this.setState({
            area: 'dewford-town-area'
          })
        } else if ((event.pageX - curleft) < 160 && (event.pageX - curleft) > 105 && (event.pageY - curtop) < 559 && (event.pageY - curtop) > 539) {
          this.setState({
            area: 'hoenn-route-107-area'
          })
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 160 && (event.pageY - curtop) < 559 && (event.pageY - curtop) > 539) {
          this.setState({
            area: 'hoenn-route-108-area'
          })
        } else if ((event.pageX - curleft) < 213 && (event.pageX - curleft) > 195 && (event.pageY - curtop) < 560 && (event.pageY - curtop) > 450) {
          this.setState({
            area: 'hoenn-route-109-area'
          })
        } else if ((event.pageX - curleft) < 213 && (event.pageX - curleft) > 195 && (event.pageY - curtop) < 409 && (event.pageY - curtop) > 302) {
          this.setState({
            area: 'hoenn-route-110-area'
          })
        } else if ((event.pageX - curleft) < 229 && (event.pageX - curleft) > 195 && (event.pageY - curtop) < 448 && (event.pageY - curtop) > 408) {
          this.setState({
            area: 'slateport-city'
          })
        } else if ((event.pageX - curleft) < 285 && (event.pageX - curleft) > 229 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-134-area'
          })
        } else if ((event.pageX - curleft) < 334 && (event.pageX - curleft) > 285 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-133-area'
          })
        } else if ((event.pageX - curleft) < 395 && (event.pageX - curleft) > 334 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-132-area'
          })
        } else if ((event.pageX - curleft) < 412 && (event.pageX - curleft) > 395 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'pacifidlog-town'
          })
        } else if ((event.pageX - curleft) < 470 && (event.pageX - curleft) > 412 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-131-area'
          })
        } else if ((event.pageX - curleft) < 523 && (event.pageX - curleft) > 470 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-130-area'
          })
        } else if ((event.pageX - curleft) < 554 && (event.pageX - curleft) > 523 && (event.pageY - curtop) < 451 && (event.pageY - curtop) > 430) {
          this.setState({
            area: 'hoenn-route-129-area'
          })
        } else if ((event.pageX - curleft) < 611 && (event.pageX - curleft) > 512 && (event.pageY - curtop) < 421 && (event.pageY - curtop) > 393) {
          this.setState({
            area: 'hoenn-route-128-area'
          })
        } else if ((event.pageX - curleft) < 631 && (event.pageX - curleft) > 615 && (event.pageY - curtop) < 417 && (event.pageY - curtop) > 405) {
          this.setState({
            area: 'ever-grande-city'
          })
        } else if ((event.pageX - curleft) < 631 && (event.pageX - curleft) > 615 && (event.pageY - curtop) < 399 && (event.pageY - curtop) > 380) {
          this.setState({
            area: 'victory-road'
          })
        } else if ((event.pageX - curleft) < 554 && (event.pageX - curleft) > 487 && (event.pageY - curtop) < 389 && (event.pageY - curtop) > 251) {
          this.setState({
            area: 'hoenn-route-127-area'
          })
        } else if ((event.pageX - curleft) < 458 && (event.pageX - curleft) > 419 && (event.pageY - curtop) < 391 && (event.pageY - curtop) > 319) {
          this.setState({
            area: 'hoenn-route-126-area'
          })
        } else if ((event.pageX - curleft) < 458 && (event.pageX - curleft) > 419 && (event.pageY - curtop) < 319 && (event.pageY - curtop) > 251) {
          this.setState({
            area: 'hoenn-route-126-area'
          })
        } else if ((event.pageX - curleft) < 487 && (event.pageX - curleft) > 458 && (event.pageY - curtop) < 390 && (event.pageY - curtop) > 339) {
          this.setState({
            area: 'hoenn-route-126-area'
          })
        } else if ((event.pageX - curleft) < 487 && (event.pageX - curleft) > 474 && (event.pageY - curtop) < 339 && (event.pageY - curtop) > 253) {
          this.setState({
            area: 'hoenn-route-126-area'
          })
        } else if ((event.pageX - curleft) < 521 && (event.pageX - curleft) > 420 && (event.pageY - curtop) < 253 && (event.pageY - curtop) > 179) {
          this.setState({
            area: 'hoenn-route-124-area'
          })
        } else if ((event.pageX - curleft) < 554 && (event.pageX - curleft) > 520 && (event.pageY - curtop) < 232 && (event.pageY - curtop) > 179) {
          this.setState({
            area: 'hoenn-route-125-area'
          })
        } else if ((event.pageX - curleft) < 554 && (event.pageX - curleft) > 522 && (event.pageY - curtop) < 251 && (event.pageY - curtop) > 232) {
          this.setState({
            area: 'mossdeep-city'
          })
        } else if ((event.pageX - curleft) < 473 && (event.pageX - curleft) > 458 && (event.pageY - curtop) < 339 && (event.pageY - curtop) > 321) {
          this.setState({
            area: 'sootopolis-city'
          })
        } else if ((event.pageX - curleft) < 420 && (event.pageX - curleft) > 359 && (event.pageY - curtop) < 219 && (event.pageY - curtop) > 179) {
          this.setState({
            area: 'lilycove-city'
          })
        } else if ((event.pageX - curleft) < 359 && (event.pageX - curleft) > 289 && (event.pageY - curtop) < 204 && (event.pageY - curtop) > 181) {
          this.setState({
            area: 'hoenn-route-121-area'
          })
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 327 && (event.pageY - curtop) < 230 && (event.pageY - curtop) > 204) {
          this.setState({
            area: 'hoenn-route-122-area'
          })
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 327 && (event.pageY - curtop) < 254 && (event.pageY - curtop) > 230) {
          this.setState({
            area: 'mt-pyre'
          })
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 327 && (event.pageY - curtop) < 261 && (event.pageY - curtop) > 254) {
          this.setState({
            area: 'hoenn-route-122-area'
          })
        } else if ((event.pageX - curleft) < 344 && (event.pageX - curleft) > 247 && (event.pageY - curtop) < 284 && (event.pageY - curtop) > 260) {
          this.setState({
            area: 'hoenn-route-123-area'
          })
        } else if ((event.pageX - curleft) < 245 && (event.pageX - curleft) > 228 && (event.pageY - curtop) < 284 && (event.pageY - curtop) > 260) {
          this.setState({
            area: 'hoenn-route-118-area'
          })
        } else if ((event.pageX - curleft) < 244 && (event.pageX - curleft) > 230 && (event.pageY - curtop) < 260 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'hoenn-route-119-area'
          })
        } else if ((event.pageX - curleft) < 271 && (event.pageX - curleft) > 248 && (event.pageY - curtop) < 148 && (event.pageY - curtop) > 128) {
          this.setState({
            area: 'fortree-city'
          })
        } else if ((event.pageX - curleft) < 288 && (event.pageX - curleft) > 271 && (event.pageY - curtop) < 204 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'hoenn-route-120-area'
          })
        } else if ((event.pageX - curleft) < 228 && (event.pageX - curleft) > 196 && (event.pageY - curtop) < 301 && (event.pageY - curtop) > 262) {
          this.setState({
            area: 'mauville-city'
          })
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 147 && (event.pageY - curtop) < 282 && (event.pageY - curtop) > 261) {
          this.setState({
            area: 'hoenn-route-117-area'
          })
        } else if ((event.pageX - curleft) < 147 && (event.pageX - curleft) > 133 && (event.pageY - curtop) < 282 && (event.pageY - curtop) > 261) {
          this.setState({
            area: 'verdanturf-town'
          })
        } else if ((event.pageX - curleft) < 105 && (event.pageX - curleft) > 59 && (event.pageY - curtop) < 262 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'hoenn-route-116-area'
          })
        } else if ((event.pageX - curleft) < 135 && (event.pageX - curleft) > 107 && (event.pageY - curtop) < 262 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'rusturf-tunnel'
          })
        } else if ((event.pageX - curleft) < 149 && (event.pageX - curleft) > 135 && (event.pageY - curtop) < 262 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'hoenn-route-116-area'
          })
        } else if ((event.pageX - curleft) < 213 && (event.pageX - curleft) > 196 && (event.pageY - curtop) < 259 && (event.pageY - curtop) > 126) {
          this.setState({
            area: 'hoenn-route-111-area'
          })
        } else if ((event.pageX - curleft) < 195 && (event.pageX - curleft) > 164 && (event.pageY - curtop) < 210 && (event.pageY - curtop) > 189) {
          this.setState({
            area: 'hoenn-route-112-area'
          })
        } else if ((event.pageX - curleft) < 164 && (event.pageX - curleft) > 149 && (event.pageY - curtop) < 210 && (event.pageY - curtop) > 189) {
          this.setState({
            area: 'lavaridge-town'
          })
        } else if ((event.pageX - curleft) < 196 && (event.pageX - curleft) > 135 && (event.pageY - curtop) < 150 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'hoenn-route-113-area'
          })
        } else if ((event.pageX - curleft) < 133 && (event.pageX - curleft) > 103 && (event.pageY - curtop) < 150 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'fallarbor-town'
          })
        } else if ((event.pageX - curleft) < 103 && (event.pageX - curleft) > 62 && (event.pageY - curtop) < 150 && (event.pageY - curtop) > 127) {
          this.setState({
            area: 'hoenn-route-114-area'
          })
        } else if ((event.pageX - curleft) < 80 && (event.pageX - curleft) > 60 && (event.pageY - curtop) < 184 && (event.pageY - curtop) > 148) {
          this.setState({
            area: 'hoenn-route-114-area'
          })
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 239 && (event.pageY - curtop) > 184) {
          this.setState({
            area: 'hoenn-route-115-area'
          })
        } else if ((event.pageX - curleft) < 44 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 184 && (event.pageY - curtop) > 162) {
          this.setState({
            area: 'meteor-falls'
          })
        } else if ((event.pageX - curleft) < 59 && (event.pageX - curleft) > 27 && (event.pageY - curtop) < 281 && (event.pageY - curtop) > 240) {
          this.setState({
            area: 'rustboro-city'
          })
        }  else if ((event.pageX - curleft) < 70 && (event.pageX - curleft) > 26 && (event.pageY - curtop) < 377 && (event.pageY - curtop) > 352) {
          this.setState({
            area: 'hoenn-route-104-area'
          })
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
    return nativePokemonLocations.map((instance, index) => <PokemonCard key={index + 1} name={instance.pokemon.name} url={instance.pokemon.url} id={index + 1}/>)
  }

  getNonNativePokemonLocations = () => {
    let foundPokemonLocations =  this.state.pokemonLocations.filter(instance => instance.location.name === this.state.area)
    let johtoPokemonNames = this.state.data.map(pokemon => pokemon.pokemon_species.name)
    let nonNativePokemonLocations = foundPokemonLocations.filter(instance => !johtoPokemonNames.includes(instance.pokemon.name))
    return nonNativePokemonLocations.map((instance, index) => <PokemonCard key={index + 1} name={instance.pokemon.name} url={instance.pokemon.url} id={index + 1}/>)
  }

  render () {
    return (
      <div>
        <h1>Hoenn</h1>
        <br></br>
        <canvas
          style={{float: 'left', marginLeft: '64px'}}
          className="map"
          ref="canvas"
          width={700}
          height={640}
          onClick={(event) => this.getInfo(event)}
        />

        <FadeIn>
          <div className="city-card">
            {this.state.area}
            <br></br>
            {this.determineImage()}
            <br></br>

            <h1>Native to Hoenn: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data ? this.getNativePokemonLocations() : <LoadingPage/>}

            <h1>Other Regions: </h1>
            <br></br>
            {this.state.pokemonLocations && this.state.data ? this.getNonNativePokemonLocations() : <LoadingPage/>}

          </div>
        </FadeIn>

        <div className="hoenn-pokemon">
          <h1>Hoenn Pokemon: </h1>
          {
            this.state.hoennPokemon ?
            this.state.hoennPokemon.map((pokemon, index) =>
                <PokemonCard
                  key={index + 1}
                  name={pokemon.name}
                  url={pokemon.url}
                  id={index + 1}
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

export default Hoenn
