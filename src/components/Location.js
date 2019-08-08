import React from 'react'

class Location extends React.Component {

  getLocation = () => {
    return this.props.name
  }

  render() {
    return(
      <div>
        <li>{this.getLocation()}</li>
      </div>
    )
  }
}

export default Location
