import React from 'react'
import PokemonCard from './PokemonCard.js'
import LoadingPage from './LoadingPage.js'

class Hoenn extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    this.renderThisData()
    this.updateCanvas()
  }

  renderThisData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons.results
        })
      })
  }

  updateCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d')

    const image = new Image()
    image.src = './images/hoenn.png'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 1120, 800);
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
        console.log(event.pageX - curleft)
        if ((event.pageX - curleft) < 562 && (event.pageX - curleft) > 388 && (event.pageY - curtop) < 413 && (event.pageY - curtop) > 285) {
          alert('Kanto!')
        } else if ((event.pageX - curleft) < 389 && (event.pageX - curleft) > 215 && (event.pageY - curtop) < 413 && (event.pageY - curtop) > 286) {
          alert('Johto!')
        } else if ((event.pageX - curleft) < 494 && (event.pageX - curleft) > 244 && (event.pageY - curtop) < 562 && (event.pageY - curtop) > 414) {
          alert('Hoenn!')
        } else if ((event.pageX - curleft) < 374 && (event.pageX - curleft) > 82 && (event.pageY - curtop) < 788 && (event.pageY - curtop) > 562) {
          alert('Sinnoh!')
        } else if ((event.pageX - curleft) < 890 && (event.pageX - curleft) > 687 && (event.pageY - curtop) < 526 && (event.pageY - curtop) > 382) {
          alert('Unova!')
        } else if ((event.pageX - curleft) < 468 && (event.pageX - curleft) > 253 && (event.pageY - curtop) < 285 && (event.pageY - curtop) > 150) {
          alert('Kalos!')
        }
      }
    }
    return undefined
  }


  render () {
    return (
      <div>
        Hoenn
        <br></br>
        <canvas
          className="map"
          ref="canvas"
          width={1120}
          height={800}
          onClick={(event) => this.getInfo(event)}
        />
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
    )
  }
}

export default Hoenn
