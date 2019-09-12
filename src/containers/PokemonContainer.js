import React from 'react'
import PokemonCard from '../components/PokemonCard.js'
import { Link } from 'react-router-dom'

class PokemonContainer extends React.Component {

  state = {
    moves: null
  }

  componentDidMount() {
    fetch('https://vast-citadel-58007.herokuapp.com/moves')
      .then(res => res.json())
      .then(moves =>
        this.setState({
          moves: moves
        })
      )
  }

  fetchKanto = () => {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemons/kanto')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          kantoPokemon: pokemons
        })
      )
  }

  fetchJohto = () => {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemons/johto')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          johtoPokemon: pokemons
        })
      )
  }

  fetchHoenn = () => {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemons/hoenn')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          hoennPokemon: pokemons
        })
      )
  }

  fetchSinnoh = () => {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemons/sinnoh')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          sinnohPokemon: pokemons
        })
      )
  }

  fetchUnova = () => {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemons/unova')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          unovaPokemon: pokemons
        })
      )
  }

  fetchKalos = () => {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemons/kalos')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          kalosPokemon: pokemons
        })
      )
  }

  fetchAlola = () => {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemons/alola')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          alolaPokemon: pokemons
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
        this.fetchKanto()
        if (this.state.kantoPokemon) {
          return this.state.kantoPokemon.map((pokemon, index) => {
            return <PokemonCard
                      key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      name={pokemon.name}
                      url={pokemon.url}
                      id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      allMoves={this.state.moves}
                    />
          })
        }
      case '2':
        this.fetchJohto()
        if (this.state.johtoPokemon) {
          return this.state.johtoPokemon.map((pokemon, index) => {
            return <PokemonCard
                      key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      name={pokemon.name}
                      url={pokemon.url}
                      id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      allMoves={this.state.moves}
                    />
          })
        }
      case '3':
        this.fetchHoenn()
        if (this.state.hoennPokemon) {
          return this.state.hoennPokemon.map((pokemon, index) => {
            return <PokemonCard
                      key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      name={pokemon.name}
                      url={pokemon.url}
                      id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      allMoves={this.state.moves}
                    />
          })
        }
      case '4':
        this.fetchSinnoh()
        if (this.state.sinnohPokemon) {
          return this.state.sinnohPokemon.map((pokemon, index) => {
            return <PokemonCard
                      key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      name={pokemon.name}
                      url={pokemon.url}
                      id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      allMoves={this.state.moves}
                    />
          })
        }
      case '5':
        this.fetchUnova()
        if (this.state.unovaPokemon) {
          return this.state.unovaPokemon.map((pokemon, index) => {
            return <PokemonCard
                      key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      name={pokemon.name}
                      url={pokemon.url}
                      id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      allMoves={this.state.moves}
                    />
          })
        }
      case '6':
        this.fetchKalos()
        if (this.state.kalosPokemon) {
          return this.state.kalosPokemon.map((pokemon, index) => {
            return <PokemonCard
                      key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      name={pokemon.name}
                      url={pokemon.url}
                      id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      allMoves={this.state.moves}
                    />
          })
        }
      case '7':
        this.fetchAlola()
        if (this.state.alolaPokemon) {
          return this.state.alolaPokemon.map((pokemon, index) => {
            return <PokemonCard
                      key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      name={pokemon.name}
                      url={pokemon.url}
                      id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                      allMoves={this.state.moves}
                    />
          })
        }
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
      return this.props.pokemons.map(
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
    return (
      <div>
        {this.state.moves ? this.renderCards() : null}
      </div>
    )
  }
}

export default PokemonContainer
