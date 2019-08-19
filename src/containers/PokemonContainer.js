import React from 'react'
import PokemonCard from '../components/PokemonCard.js'
import { Link } from 'react-router-dom'

class PokemonContainer extends React.Component {

  state = {
    moves: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/moves')
      .then(res => res.json())
      .then(moves =>
        this.setState({
          moves: moves
        })
      )
  }

  renderCards = () => {
    let pokemons = [...this.props.pokemons]

    switch (this.props.generation) {
      case 'all':
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    allMoves={this.state.moves}
                  />
        })
      case '1':
        pokemons = pokemons.slice(0, 151)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    allMoves={this.state.moves}
                  />
        })
      case '2':
        pokemons = pokemons.slice(151, 251)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    allMoves={this.state.moves}
                  />
        })
      case '3':
        pokemons = pokemons.slice(251, 386)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    allMoves={this.state.moves}
                  />
        })
      case '4':
        pokemons = pokemons.slice(386, 493)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    allMoves={this.state.moves}
                  />
        })
      case '5':
        pokemons = pokemons.slice(493, 649)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    allMoves={this.state.moves}
                  />
        })
      case '6':
        pokemons = pokemons.slice(649, 721)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    allMoves={this.state.moves}
                  />
        })
      case '7':
        pokemons = pokemons.slice(721, 807)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                    allMoves={this.state.moves}
                  />
        })
      default:
    }

    if (this.props.query) {
      pokemons = pokemons.filter(pokemon => pokemon.name.includes(this.props.query))
      return pokemons.map((pokemon, index) => {
        return <PokemonCard
                  key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                  name={pokemon.name}
                  url={pokemon.url}
                  id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
               />
      })
    } else {
      return this.props.pokemons.results.map(
        (pokemon, index) =>
          <PokemonCard
            key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
            name={pokemon.name}
            url={pokemon.url}
            id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
          />
      )
    }

  }

  render() {
    console.log(this.props.pokemons)
    return (
      <div>
        {this.state.moves ? this.renderCards() : null}
      </div>
    )
  }
}

export default PokemonContainer
