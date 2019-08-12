import React from 'react'
import { Link } from 'react-router-dom'

class Location extends React.Component {

  state = {
    kanto: null,
    johto: null,
    hoenn: null,
    sinnoh: null,
    unova: null,
    kalos: null,
    region: null
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/region/1/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          kanto: region.locations
        })
      )
    fetch('https://pokeapi.co/api/v2/region/2/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          johto: region.locations
        })
      )
    fetch('https://pokeapi.co/api/v2/region/3/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          hoenn: region.locations
        })
      )
    fetch('https://pokeapi.co/api/v2/region/4/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          sinnoh: region.locations
        })
      )
    fetch('https://pokeapi.co/api/v2/region/5/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          unova: region.locations
        })
      )
    fetch('https://pokeapi.co/api/v2/region/1/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          kalos: region.locations
        })
      )
  }

  getLocation = () => {
    return this.props.name
  }

  getImage = () => {
    let foundKantoImage = this.state.kanto.filter(location => this.props.name.includes(location.name))
    let foundJohtoImage = this.state.johto.filter(location => this.props.name.includes(location.name))
    let foundHoennImage = this.state.hoenn.filter(location => this.props.name.includes(location.name))
    let foundSinnohImage = this.state.sinnoh.filter(location => this.props.name.includes(location.name))
    let foundUnovaImage = this.state.unova.filter(location => this.props.name.includes(location.name))
    let foundKalosImage = this.state.kalos.filter(location => this.props.name.includes(location.name))

    if (this.props.name.includes('kanto') || foundKantoImage.length > 0) {
      return <img src={`/images/kanto/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
    } else if (this.props.name.includes('johto') || foundJohtoImage.length > 0) {
      return <img src={`/images/johto/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
    } else if (this.props.name.includes('hoenn' || foundHoennImage.length > 0)) {
      return <img src={`/images/hoenn/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
    } else if (this.props.name.includes('sinnoh') || foundSinnohImage.length > 0) {
      return <img src={`/images/sinnoh/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
    } else if (this.props.name.includes('unova') || foundUnovaImage.length > 0) {
      return <img src={`/images/unova/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
    } else if (this.props.name.includes('kalos') || foundKalosImage.length > 0) {
      return <img src={`/images/kalos/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
    } else {
      return <img src={`/images/${this.props.name}.png`}/>
    }
  }

  getRegion = () => {
    let foundKantoImage = this.state.kanto.filter(location => this.props.name.includes(location.name))
    let foundJohtoImage = this.state.johto.filter(location => this.props.name.includes(location.name))
    let foundHoennImage = this.state.hoenn.filter(location => this.props.name.includes(location.name))
    let foundSinnohImage = this.state.sinnoh.filter(location => this.props.name.includes(location.name))
    let foundUnovaImage = this.state.unova.filter(location => this.props.name.includes(location.name))
    let foundKalosImage = this.state.kalos.filter(location => this.props.name.includes(location.name))

    if (this.props.name.includes('kanto') || foundKantoImage.length > 0) {
      return '/kanto'
    } else if (this.props.name.includes('johto') || foundJohtoImage.length > 0) {
      return '/johto'
    } else if (this.props.name.includes('hoenn' || foundHoennImage.length > 0)) {
      return '/hoenn'
    } else if (this.props.name.includes('sinnoh') || foundSinnohImage.length > 0) {
      return '/sinnoh'
    } else if (this.props.name.includes('unova') || foundUnovaImage.length > 0) {
      return '/unova'
    } else if (this.props.name.includes('kalos') || foundKalosImage.length > 0) {
      return '/kalos'
    } else {
      return '/'
    }
  }

  render() {
    return(
      <div className="card">
        <Link to={
            this.state.kanto && this.state.johto && this.state.hoenn && this.state.sinnoh && this.state.unova && this.state.kalos ?
            this.getRegion()
            :
            null
          }
        >
          <div>
            { this.state.kanto && this.state.johto && this.state.hoenn && this.state.sinnoh && this.state.unova && this.state.kalos ?
              this.getLocation()
              :
              null
            }
            <br></br>
            { this.state.kanto && this.state.johto && this.state.hoenn && this.state.sinnoh && this.state.unova && this.state.kalos ?
              this.getImage()
              :
              null
            }
          </div>
        </Link>
      </div>
    )
  }
}

export default Location
