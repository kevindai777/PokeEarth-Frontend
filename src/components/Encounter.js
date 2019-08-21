import React from 'react'
import Location from './Location'

class Encounter extends React.Component {

  state = {
    encounters: null,
    region: null,
    locations: null
  }

  componentDidMount() {
    this.renderData()
  }

  renderData = () => {
    fetch(`${this.props.locationUrl}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          encounters: data
        })
      )
    fetch("http://localhost:3000/locations")
      .then(res => res.json())
      .then(data =>
        this.setState({
          locations: data
        })
      )
  }

  renderEncounters = () => {
    if (this.state.encounters !== null) {
      return this.state.encounters.map(location => <Location name={location.location_area.name} id={this.props.id}/>)
    } else if (this.state.encounters === [] || this.state.encounters === null) {
      console.log('hey')
      return "None to be found."
    }
  }

  filterRegion = (event) => {
    let value
    if (event.target.value === "Kanto") {
      value = 1
    } else if (event.target.value === "Johto") {
      value = 2
    } else if (event.target.value === "Hoenn") {
      value = 3
    } else if (event.target.value === "Sinnoh") {
      value = 4
    } else if (event.target.value === "Unova") {
      value = 5
    } else if (event.target.value === "Kalos") {
      value = 6
    }
    this.setState({
      region: value
    })
  }

  filterEncounters = () => {
    if (this.state.locations !== null) {
      let encounterNames = this.state.encounters.map(location => location.location_area.name)
      let filteredLocations = this.state.locations.filter(location => encounterNames.includes(location.name))
      let superFilteredLocations = filteredLocations.filter(location => this.state.region === location.region_id)
      let superFilteredLocationNames = superFilteredLocations.map(location => location.name)
      let filteredEncounters = this.state.encounters.filter(location => superFilteredLocationNames.includes(location.location_area.name))
      if (filteredEncounters.length > 0) {
        return filteredEncounters.map(location => <Location name={location.location_area.name} id={this.props.id}/>)
      } else {
        return "None to be found."
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Encounters: </h1>
          <select onChange={this.filterRegion}>
            <option name="1">Kanto</option>
            <option name="2">Johto</option>
            <option name="3">Hoenn</option>
            <option name="4">Sinnoh</option>
            <option name="5">Unova</option>
            <option name="6">Kalos</option>
          </select>
        <div className="location-container">
          {this.state.region ? this.filterEncounters() : this.renderEncounters()}
        </div>
      </div>
    )
  }
}

export default Encounter
