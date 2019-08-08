import React from 'react'
import PokemonCard from '../components/PokemonCard.js'
import { Link } from 'react-router-dom'

class PokemonContainer extends React.Component {

  renderCards = () => {
    let pokemons = [...this.props.pokemons]

    switch (this.props.generation) {
      case 'all':
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={index + 1}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={index + 1}
                  />
        })
      case '1':
        pokemons = pokemons.slice(0, 151)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={index + 1}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={index + 1}
                  />
        })
      case '2':
        pokemons = pokemons.slice(151, 251)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={index + 151}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={index + 151}
                  />
        })
      case '3':
        pokemons = pokemons.slice(251, 386)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={index + 251}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={index + 251}
                  />
        })
      case '4':
        pokemons = pokemons.slice(386, 493)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={index + 386}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={index + 386}
                  />
        })
      case '5':
        pokemons = pokemons.slice(493, 649)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={index + 493}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={index + 493}
                  />
        })
      case '6':
        pokemons = pokemons.slice(649, 721)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={index + 649}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={index + 649}
                  />
        })
      case '7':
        pokemons = pokemons.slice(721, 807)
        return pokemons.map((pokemon, index) => {
          return <PokemonCard
                    key={index + 721}
                    name={pokemon.name}
                    url={pokemon.url}
                    id={index + 721}
                  />
        })
      default:
    }

    if (this.props.query) {
      pokemons = pokemons.filter(pokemon => pokemon.name.includes(this.props.query))
      return pokemons.map((pokemon, index) => {
        return <PokemonCard
                  key={index + 1}
                  name={pokemon.name}
                  url={pokemon.url}
                  id={index + 1}
               />
      })
    } else {
      return this.props.pokemons.results.map(
        (pokemon, index) =>
          <PokemonCard
            key={index + 1}
            name={pokemon.name}
            url={pokemon.url}
            id={index + 1}
          />
      )
    }

  }

  render() {
    console.log(this.props.query)
    return (
      <div>
        {this.renderCards()}
      </div>
    )
  }
}

export default PokemonContainer
