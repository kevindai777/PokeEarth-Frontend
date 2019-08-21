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

  fetchKanto = () => {
    fetch('http://localhost:3000/pokemons/kanto')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          kantoPokemon: pokemons
        })
      )
  }

  fetchJohto = () => {
    fetch('http://localhost:3000/pokemons/johto')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          johtoPokemon: pokemons
        })
      )
  }

  fetchHoenn = () => {
    fetch('http://localhost:3000/pokemons/hoenn')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          hoennPokemon: pokemons
        })
      )
  }

  fetchSinnoh = () => {
    fetch('http://localhost:3000/pokemons/sinnoh')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          sinnohPokemon: pokemons
        })
      )
  }

  fetchUnova = () => {
    fetch('http://localhost:3000/pokemons/unova')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          unovaPokemon: pokemons
        })
      )
  }

  fetchKalos = () => {
    fetch('http://localhost:3000/pokemons/kalos')
      .then(res => res.json())
      .then(pokemons =>
        this.setState({
          kalosPokemon: pokemons
        })
      )
  }

  fetchAlola = () => {
    fetch('http://localhost:3000/pokemons/alola')
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
    console.log(this.props.pokemons)
    return (
      <div>
        {this.state.moves ? this.renderCards() : null}
      </div>
    )
  }
}

export default PokemonContainer
