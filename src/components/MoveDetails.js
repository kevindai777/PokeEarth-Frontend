import React from 'react'

class MoveDetails extends React.Component {

  state = {
    data: null,
    moreDetails: false
  }

  componentDidMount() {
    this.renderData()
  }

  renderData = () => {
    fetch(this.props.url)
      .then(res => res.json())
      .then(move =>
        this.setState({
          data: move
        })
      )
  }

  releaseDetails = () => {
    return (
      <h1>
        Type: <img src={this.getTypeImage()}/>
    </h1>
    )
  }

  allowMoreDetails = () => {
    this.setState({
      moreDetails: !this.state.moreDetails
    })
  }

  getDescription = () => {
    if (this.state.data.effect_entries[0].short_effect.includes("$effect_chance")) {
      let newDescription = this.state.data.effect_entries[0].short_effect.replace("$effect_chance", this.state.data.effect_chance)
      return newDescription
    } else {
      return this.state.data.effect_entries[0].short_effect
    }
  }

  showMoreDetails = () => {
    return (
      <div>
        <h1><i>{this.getDescription()}</i></h1>
        <br></br>
        <h1>Accuracy: {this.state.data.accuracy ? this.state.data.accuracy : "---"}</h1>
        <h1>Class: {this.state.data.damage_class.name}</h1>
        <h1>Power: {this.state.data.power ? this.state.data.power : "---"}</h1>
        <h1>PP: {this.state.data.pp ? this.state.data.pp : "---"}</h1>
      </div>
    )
  }

  getTypeImage = () => {
    if (this.state.data.type.name === 'bug') {
      return '/images/types/bug.png'
    } else if (this.state.data.type.name === 'dark') {
      return '/images/types/dark.png'
    } else if (this.state.data.type.name === 'dragon') {
      return '/images/types/dragon.png'
    } else if (this.state.data.type.name === 'electric') {
      return '/images/types/electric.png'
    } else if (this.state.data.type.name === 'fairy') {
      return '/images/types/fairy.png'
    } else if (this.state.data.type.name === 'fighting') {
      return '/images/types/fighting.png'
    } else if (this.state.data.type.name === 'fire') {
      return '/images/types/fire.png'
    } else if (this.state.data.type.name === 'flying') {
      return '/images/types/flying.png'
    } else if (this.state.data.type.name === 'ghost') {
      return '/images/types/ghost.png'
    } else if (this.state.data.type.name === 'grass') {
      return '/images/types/grass.png'
    } else if (this.state.data.type.name === 'ground') {
      return '/images/types/ground.png'
    } else if (this.state.data.type.name === 'ice') {
      return '/images/types/ice.png'
    } else if (this.state.data.type.name === 'normal') {
      return '/images/types/normal.png'
    } else if (this.state.data.type.name === 'poison') {
      return '/images/types/poison.png'
    } else if (this.state.data.type.name === 'psychic') {
      return '/images/types/psychic.png'
    } else if (this.state.data.type.name === 'rock') {
      return '/images/types/rock.png'
    } else if (this.state.data.type.name === 'steel') {
      return '/images/types/steel.png'
    } else if (this.state.data.type.name === 'water') {
      return '/images/types/water.png'
    }
  }

  render() {
    return (
      <div>
        {this.state.data ? this.releaseDetails() : null}
        <br></br>
        {this.state.moreDetails ? this.showMoreDetails() : null}
        <button onClick={this.allowMoreDetails}>Details</button>
      </div>
    )
  }
}

export default MoveDetails
