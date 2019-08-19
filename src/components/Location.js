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
    fetch('https://pokeapi.co/api/v2/region/6/')
      .then(res => res.json())
      .then(region =>
        this.setState({
          kalos: region.locations
        })
      )
    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(data => {
        let foundLocationId = data.filter(location => location.name === this.props.name)[0].id
        let foundRegionId = data.filter(location => location.name === this.props.name)[0].region_id
        this.setState({
          foundId: foundLocationId,
          regionId: foundRegionId
        })
      })
    fetch('http://localhost:3000/favorite_locations')
      .then(res => res.json())
      .then(data => {
        this.setState({
          favoriteLocations: data
        })
      })
  }

  getLocation = () => {
    return this.props.name
  }

  getImage = () => {
    let foundKantoImage = this.state.kanto.filter(location => this.props.name === location.name)
    let foundJohtoImage = this.state.johto.filter(location => this.props.name === location.name)
    let foundHoennImage = this.state.hoenn.filter(location => this.props.name === location.name)
    let foundSinnohImage = this.state.sinnoh.filter(location => this.props.name === location.name)
    let foundUnovaImage = this.state.unova.filter(location => this.props.name === location.name)
    let foundKalosImage = this.state.kalos.filter(location => this.props.name === location.name)

    if (this.props.name.includes('kanto') || foundKantoImage.length > 0 || this.state.regionId === 1) {
      return <div>
        <img src={`/images/kanto/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
      </div>
    } else if (this.props.name.includes('johto') || foundJohtoImage.length > 0 || this.state.regionId === 2) {
      return <div>
        <img src={`/images/johto/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
      </div>
    } else if (this.props.name.includes('hoenn') || foundHoennImage.length > 0 || this.state.regionId === 3) {
      return <div>
        <img src={`/images/hoenn/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
      </div>
    } else if (this.props.name.includes('sinnoh') || foundSinnohImage.length > 0 || this.state.regionId === 4) {
      return <div>
        <img src={`/images/sinnoh/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
      </div>
    } else if (this.props.name.includes('unova') || foundUnovaImage.length > 0 || this.state.regionId === 5) {
      return <div>
        <img src={`/images/unova/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
      </div>
    } else if (this.props.name.includes('kalos') || foundKalosImage.length > 0 || this.state.regionId === 6) {
      return <div>
        <img src={`/images/kalos/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
      </div>
    } else {
      return <div>
        <img src={`/images/unknown/${this.props.name}.png`} style={{width: '211px', height: '143px'}}/>
      </div>
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

  post = () => {
    if (!localStorage.user_id) {
      alert("Login first!")
    } else {
      fetch('http://localhost:3000/favorite_locations', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          user_id: localStorage.user_id,
          location_id: this.state.foundId
        })
      })
        .then(res => res.json())
        .then(console.log)
    }
  }

  determineButton = () => {
    if (this.state.favoriteLocations) {
      let ids = this.state.favoriteLocations.map(location => location.location.id)
      if (ids.includes(this.state.foundId)) {
        return <p>Favorited!</p>
      } else if (!ids.includes(this.state.foundId)) {
        return <button onClick={this.state.foundId ? this.post : null}>Favorite!</button>
      }
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
        <div>
          {this.determineButton()}
        </div>
      </div>
    )
  }
}

export default Location
