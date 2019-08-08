import React from 'react'
import Header from '../containers/Header.js'
import MainContainer from '../containers/MainContainer.js'

class PokemonPage extends React.Component {

  state = {
    query: null,
    generation: 'all'
  }

  startQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  selectGeneration = (event) => {
    this.setState({
      generation: event.target.className
    })
  }

  render() {
    return (
      <div className="App">
        <Header startQuery={this.startQuery} selectGeneration={this.selectGeneration}/>
        <MainContainer query={this.state.query} generation={this.state.generation}/>
      </div>
    )
  }

}

export default PokemonPage
