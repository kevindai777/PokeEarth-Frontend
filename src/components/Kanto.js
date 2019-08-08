import React from 'react'
import FadeIn from 'react-fade-in'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage'

class Kanto extends React.Component {

  state = {
    data: null,
    locations: null,
    area: 'Kanto',
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
      ctx.drawImage(image, 0, 0, 259, 800);
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
        // console.log(event.pageX - curleft)
        console.log(event.pageY - curtop)

        if ((event.pageX - curleft) < 73 && (event.pageX - curleft) > 64 && (event.pageY - curtop) < 177 && (event.pageY - curtop) > 168) {
          this.setState({
            area: 'cinnabar-island-area'
          })

        } else if ((event.pageX - curleft) < 72 && (event.pageX - curleft) > 64 && (event.pageY - curtop) < 147 && (event.pageY - curtop) > 140) {
          this.setState({
            area: 'pallet-town-area'
          })

        } else if ((event.pageX - curleft) < 72 && (event.pageX - curleft) > 64 && (event.pageY - curtop) < 121 && (event.pageY - curtop) > 102) {
          this.setState({
            area: 'viridian-city-area'
          })

        } else if ((event.pageX - curleft) < 72 && (event.pageX - curleft) > 64 && (event.pageY - curtop) < 163 && (event.pageY - curtop) > 146) {
          this.setState({
            area: 'kanto-sea-route-21-area'
          })

        } else if ((event.pageX - curleft) < 72 && (event.pageX - curleft) > 64 && (event.pageY - curtop) < 139 && (event.pageY - curtop) > 121) {
          this.setState({
            area: 'kanto-route-1-area'
          })

        } else if ((event.pageX - curleft) < 72 && (event.pageX - curleft) > 64 && (event.pageY - curtop) < 102 && (event.pageY - curtop) > 94) {
          this.setState({
            area: 'kanto-route-2-south-towards-viridian-city'
          })

        } else if ((event.pageX - curleft) < 72 && (event.pageX - curleft) > 64 && (event.pageY - curtop) < 94 && (event.pageY - curtop) > 87) {
          this.setState({
            area: 'viridian-forest'
          })

        } else if ((event.pageX - curleft) < 82 && (event.pageX - curleft) > 64 && (event.pageY - curtop) < 85 && (event.pageY - curtop) > 66) {
          this.setState({
            area: 'pewter-city-area'
          })

        } else if ((event.pageX - curleft) < 113 && (event.pageX - curleft) > 83 && (event.pageY - curtop) < 77 && (event.pageY - curtop) > 66) {
          this.setState({
            area: 'kanto-route-3-area'
          })

        } else if ((event.pageX - curleft) < 124 && (event.pageX - curleft) > 115 && (event.pageY - curtop) < 63 && (event.pageY - curtop) > 56) {
          this.setState({
            area: 'mt-moon'
          })

        } else if ((event.pageX - curleft) < 166 && (event.pageX - curleft) > 125 && (event.pageY - curtop) < 65 && (event.pageY - curtop) > 53) {
          this.setState({
            area: 'kanto-route-4-area'
          })

        } else if ((event.pageX - curleft) < 177 && (event.pageX - curleft) > 166 && (event.pageY - curtop) < 64 && (event.pageY - curtop) > 56) {
          this.setState({
            area: 'cerulean-city-area'
          })

        } else if ((event.pageX - curleft) < 177 && (event.pageX - curleft) > 166 && (event.pageY - curtop) < 55 && (event.pageY - curtop) > 44) {
          this.setState({
            area: 'kanto-route-24-area'
          })

        } else if ((event.pageX - curleft) < 198 && (event.pageX - curleft) > 166 && (event.pageY - curtop) < 44 && (event.pageY - curtop) > 32) {
          this.setState({
            area: 'kanto-route-25-area'
          })

        } else if ((event.pageX - curleft) < 177 && (event.pageX - curleft) > 166 && (event.pageY - curtop) < 84 && (event.pageY - curtop) > 64) {
          this.setState({
            area: 'kanto-route-5-area'
          })

        } else if ((event.pageX - curleft) < 177 && (event.pageX - curleft) > 166 && (event.pageY - curtop) < 117 && (event.pageY - curtop) > 102) {
          this.setState({
            area: 'kanto-route-6-area'
          })

        } else if ((event.pageX - curleft) < 177 && (event.pageX - curleft) > 166 && (event.pageY - curtop) < 125 && (event.pageY - curtop) > 118) {
          this.setState({
            area: 'vermillion-city-area'
          })

        } else if ((event.pageX - curleft) < 177 && (event.pageX - curleft) > 166 && (event.pageY - curtop) < 100 && (event.pageY - curtop) > 85) {
          this.setState({
            area: 'saffron-city-area'
          })

        } else if ((event.pageX - curleft) < 207 && (event.pageX - curleft) > 178 && (event.pageY - curtop) < 65 && (event.pageY - curtop) > 54) {
          this.setState({
            area: 'kanto-route-9-area'
          })

        } else if ((event.pageX - curleft) < 217 && (event.pageX - curleft) > 210 && (event.pageY - curtop) < 65 && (event.pageY - curtop) > 54) {
          this.setState({
            area: 'rock-tunnel'
          })

        } else if ((event.pageX - curleft) < 217 && (event.pageX - curleft) > 210 && (event.pageY - curtop) < 78 && (event.pageY - curtop) > 69) {
          this.setState({
            area: 'power-plant'
          })

        } else if ((event.pageX - curleft) < 217 && (event.pageX - curleft) > 210 && (event.pageY - curtop) < 86 && (event.pageY - curtop) > 78) {
          this.setState({
            area: 'rock-tunnel!'
          })

        } else if ((event.pageX - curleft) < 217 && (event.pageX - curleft) > 210 && (event.pageY - curtop) < 96 && (event.pageY - curtop) > 87) {
          this.setState({
            area: 'lavender Town!'
          })

        } else if ((event.pageX - curleft) < 162 && (event.pageX - curleft) > 145 && (event.pageY - curtop) < 96 && (event.pageY - curtop) > 87) {
          this.setState({
            area: 'kanto-route-8-area'
          })

        } else if ((event.pageX - curleft) < 145 && (event.pageX - curleft) > 137 && (event.pageY - curtop) < 96 && (event.pageY - curtop) > 87) {
          this.setState({
            area: 'celadon-city-area'
          })

        } else if ((event.pageX - curleft) < 136 && (event.pageX - curleft) > 95 && (event.pageY - curtop) < 96 && (event.pageY - curtop) > 87) {
          this.setState({
            area: 'kanto-route-16-area'
          })

        } else if ((event.pageX - curleft) < 106 && (event.pageX - curleft) > 93 && (event.pageY - curtop) < 159 && (event.pageY - curtop) > 97) {
          this.setState({
            area: 'Cycling Road!'
          })

        } else if ((event.pageX - curleft) < 146 && (event.pageX - curleft) > 107 && (event.pageY - curtop) < 158 && (event.pageY - curtop) > 146) {
          this.setState({
            area: 'kanto-route-18-area'
          })

        } else if ((event.pageX - curleft) < 155 && (event.pageX - curleft) > 146 && (event.pageY - curtop) < 158 && (event.pageY - curtop) > 146) {
          this.setState({
            area: 'fuchsia-city-area'
          })

        } else if ((event.pageX - curleft) < 189 && (event.pageX - curleft) > 156 && (event.pageY - curtop) < 158 && (event.pageY - curtop) > 146) {
          this.setState({
            area: 'kanto-route-15-area'
          })

        } else if ((event.pageX - curleft) < 219 && (event.pageX - curleft) > 176 && (event.pageY - curtop) < 149 && (event.pageY - curtop) > 135) {
          this.setState({
            area: 'kanto-route-14-area'
          })

        } else if ((event.pageX - curleft) < 220 && (event.pageX - curleft) > 207 && (event.pageY - curtop) < 135 && (event.pageY - curtop) > 115) {
          this.setState({
            area: 'kanto-route-13-area'
          })

        } else if ((event.pageX - curleft) < 220 && (event.pageX - curleft) > 207 && (event.pageY - curtop) < 115 && (event.pageY - curtop) > 96) {
          this.setState({
            area: 'kanto-route-12-area'
          })

        } else if ((event.pageX - curleft) < 208 && (event.pageX - curleft) > 187 && (event.pageY - curtop) < 126 && (event.pageY - curtop) > 115) {
          this.setState({
            area: 'kanto-route-11-area'
          })

        } else if ((event.pageX - curleft) < 187 && (event.pageX - curleft) > 178 && (event.pageY - curtop) < 126 && (event.pageY - curtop) > 115) {
          this.setState({
            area: 'digletts-cave!'
          })

        } else if ((event.pageX - curleft) < 156 && (event.pageX - curleft) > 114 && (event.pageY - curtop) < 180 && (event.pageY - curtop) > 159) {
          this.setState({
            area: 'kanto-sea-route-19-area'
          })

        } else if ((event.pageX - curleft) < 116 && (event.pageX - curleft) > 98 && (event.pageY - curtop) < 180 && (event.pageY - curtop) > 167) {
          this.setState({
            area: 'seafoam-islands!'
          })

        } else if ((event.pageX - curleft) < 95 && (event.pageX - curleft) > 76 && (event.pageY - curtop) < 180 && (event.pageY - curtop) > 167) {
          this.setState({
            area: 'kanto-sea-route-20-area'
          })

        } else if ((event.pageX - curleft) < 64 && (event.pageX - curleft) > 31 && (event.pageY - curtop) < 117 && (event.pageY - curtop) > 104) {
          this.setState({
            area: 'kanto-route-22-area'
          })

        } else if ((event.pageX - curleft) < 42 && (event.pageX - curleft) > 30 && (event.pageY - curtop) < 107 && (event.pageY - curtop) > 76) {
          this.setState({
            area: 'kanto-route-23-area'
          })

        } else if ((event.pageX - curleft) < 42 && (event.pageX - curleft) > 30 && (event.pageY - curtop) < 76 && (event.pageY - curtop) > 65) {
          this.setState({
            area: 'victory-road'
          })

        } else if ((event.pageX - curleft) < 42 && (event.pageX - curleft) > 30 && (event.pageY - curtop) < 62 && (event.pageY - curtop) > 53) {
          this.setState({
            area: 'Indigo League!'
          })

        } else if ((event.pageX - curleft) < 209 && (event.pageX - curleft) > 179 && (event.pageY - curtop) < 97 && (event.pageY - curtop) > 84) {
          this.setState({
            area: 'kanto-route-7-area'
          })
        }

      }
    }
    return undefined
  }

  determineImage = () => {
    if (this.state.area === "kanto-route-1-area") {
      return <img src="images/kanto/kanto-route-1-area.png"/>
    } else if (this.state.area === "kanto-route-2-area") {
      return <img src="images/kanto/kanto-route-2-area.png"/>
    }  else if (this.state.area === "Viridian-city-area") {
      return <img src="images/kanto/viridian-city-area.png"/>
    }
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
            width={259}
            height={800}
            onClick={(event) => this.getInfo(event)}
          />
        </FadeIn>

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
        {
          this.state.data ?
          this.state.data.map((pokemon, index) =>
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

export default Kanto
