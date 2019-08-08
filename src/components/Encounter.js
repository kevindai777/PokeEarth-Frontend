import React from 'react'
import Location from './Location'

class Encounter extends React.Component {

  state = {
    encounters: null
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
  }

  renderEncounters = () => {
    if (this.state.encounters !== null) {
      return this.state.encounters.map(location => <Location name={location.location_area.name}/>)
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <h1>Encounters: </h1>
        <div>
          <h1>
            {this.renderEncounters()}
          </h1>
        </div>
      </div>
    )
  }
}

export default Encounter