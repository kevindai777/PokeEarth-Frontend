import React from 'react'
import PokemonContainer from './PokemonContainer'
import LoadingPage from '../components/LoadingPage'
import { InfiniteScroll } from 'react-simple-infinite-scroll'

class MainContainer extends React.Component {

  state = {
    data: null,
    next: null,
    isLoading: false
  }

  componentWillMount() {
    this.renderThisData()
  }

  renderThisData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons.results,
          next: pokemons.next
        })
      })
  }

  loadMore = () => {
    fetch(this.state.next)
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: [...this.state.data, pokemons.results].flat(),
          next: pokemons.next,
          isLoading: false
        })
      })
  }

  render(){
    return (
      <div>
        <InfiniteScroll
          throttle={100}
          threshold={300}
          isLoading={this.state.isLoading}
          hasMore={true}
          onLoadMore={this.state.next ? this.loadMore : null}
        >
          {this.state.data ? <PokemonContainer pokemons={this.state.data} query={this.props.query} generation={this.props.generation}/> : <LoadingPage />}
        </InfiniteScroll>
      </div>
    )
  }
}

export default MainContainer
