import React from 'react'
import FadeIn from 'react-fade-in'
import { Link, Redirect, withRouter } from 'react-router-dom'

class PokemonMap extends React.Component {

  state = {
    funFacts: null,
    region: null
  }

  componentDidMount() {
    this.updateCanvas()
    this.getFacts()
  }

  updateCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d')

    const image = new Image()
    image.src = './images/pokemonWorldMap.png'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 940, 810);
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
        console.log("--------------------------")
        if ((event.pageX - curleft) < 562 && (event.pageX - curleft) > 388 && (event.pageY - curtop) < 413 && (event.pageY - curtop) > 285) {
          this.setState({
            region: 'kanto'
          })
        } else if ((event.pageX - curleft) < 82 && (event.pageX - curleft) > 0 && (event.pageY - curtop) < 809 && (event.pageY - curtop) > 396) {
          this.setState({
            region: 'sevii'
          })
        } else if ((event.pageX - curleft) < 389 && (event.pageX - curleft) > 215 && (event.pageY - curtop) < 413 && (event.pageY - curtop) > 286) {
          this.setState({
            region: 'johto'
          })
        } else if ((event.pageX - curleft) < 494 && (event.pageX - curleft) > 244 && (event.pageY - curtop) < 562 && (event.pageY - curtop) > 414) {
          this.setState({
            region: 'hoenn'
          })
        } else if ((event.pageX - curleft) < 374 && (event.pageX - curleft) > 82 && (event.pageY - curtop) < 788 && (event.pageY - curtop) > 562) {
          this.setState({
            region: 'sinnoh'
          })
        } else if ((event.pageX - curleft) < 890 && (event.pageX - curleft) > 687 && (event.pageY - curtop) < 526 && (event.pageY - curtop) > 382) {
          this.setState({
            region: 'unova'
          })
        } else if ((event.pageX - curleft) < 468 && (event.pageX - curleft) > 253 && (event.pageY - curtop) < 285 && (event.pageY - curtop) > 150) {
          this.setState({
            region: 'kalos'
          })
        }
      }
    }
    return undefined
  }

  getFacts = () => {
    fetch('http://localhost:3000/facts')
      .then(res => res.json())
      .then(facts =>
        this.setState({
          funFacts: facts
        })
      )
  }

  render() {
    return (
      <div>

        <h1>Pokemon Earth</h1>
        <br></br>

        <FadeIn>
          {
            this.state.region ?
            this.props.history.push("/" + this.state.region)
            :
            <canvas
              className="map"
              ref="canvas"
              width={940}
              height={810}
              onClick={(event) => this.getInfo(event)}
            />
          }
        </FadeIn>

        {
          this.state.funFacts ?
          <h1>{this.state.funFacts[Math.floor((Math.random() * this.state.funFacts.length))].description}</h1>
          :
          null
        }

      </div>
    )
  }

}

export default withRouter(PokemonMap)
