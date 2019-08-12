import React from 'react'

class AbilityDetails extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(move =>
        this.setState({
          data: move
        })
      )
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <i>
          {this.state.data ? this.state.data.effect_entries[0].short_effect : null}
        </i>
      </div>
    )
  }
}

export default AbilityDetails
