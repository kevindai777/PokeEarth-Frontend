import React from 'react'
import LoadingPage from './LoadingPage'
import { Link } from 'react-router-dom'
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

class PokemonCard extends React.Component {

  state = {
    spriteUrl: null,
    abilities: [],
    stats: {},
    type1: null,
    type2: 'null',
    locationUrl: null,
    moves: null,
    items: null,
    favoritedPokemon: null
  }

  componentDidMount() {
    this.renderThisData()
    fetch('http://localhost:3000/favorite_pokemons')
      .then(res => res.json())
      .then(instances =>
        this.setState({
          favoritedPokemon: instances
        })
      )
  }

  renderThisData = () => {
    fetch(`${this.props.url}`)
      .then(res => res.json())
      .then(data => {
        if (data.types[1]) {
          this.setState((prevState) => ({
            spriteUrl: data.sprites['front_default'],
            abilities: [...prevState.abilities, data.abilities],
            stats: {
              speed: data.stats[0].base_stat,
              specialDefense: data.stats[1].base_stat,
              specialAttack: data.stats[2].base_stat,
              defense: data.stats[3].base_stat,
              attack: data.stats[4].base_stat,
              hp: data.stats[5].base_stat
            },
            type1: data.types[0].type.name,
            type2: data.types[1].type.name,
            locationUrl: data.location_area_encounters,
            moves: data.moves,
            items: data.held_items
          }))
        } else {
          this.setState((prevState) => ({
            spriteUrl: data.sprites['front_default'],
            abilities: [...prevState.abilities, data.abilities],
            stats: {
              speed: data.stats[0].base_stat,
              specialDefense: data.stats[1].base_stat,
              specialAttack: data.stats[2].base_stat,
              defense: data.stats[3].base_stat,
              attack: data.stats[4].base_stat,
              hp: data.stats[5].base_stat
            },
            type1: data.types[0].type.name,
            locationUrl: data.location_area_encounters,
            moves: data.moves,
            items: data.held_items
          }))
        }
      })
  }

  post = () => {
    fetch('http://localhost:3000/favorite_pokemons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: localStorage.user_id,
        pokemon_id: this.props.id
      })
    })
      .then(res => res.json())
  }

  inTeam = () => {
    if (this.state.favoritedPokemon) {
      let filteredPokemon = this.state.favoritedPokemon.filter(instance => parseInt(instance.user.id) === parseInt(localStorage.user_id))
      let pokemonNames = filteredPokemon.map(instance => instance.pokemon.name)
      if (pokemonNames.includes(this.props.name)) {
        return true
      } else {
        return false
      }
    }
  }

  delete = () => {
    if (this.state.favoritedPokemon) {
      let id = this.state.favoritedPokemon.filter(instance => parseInt(instance.user.id) === parseInt(localStorage.user_id) && parseInt(instance.pokemon.id) === parseInt(this.props.id))[0].id
      fetch(`http://localhost:3000/favorite_pokemons/${id}`, {
        method: 'DELETE'
      })
    }
  }

  render() {
    return (
      <div className="card">
        <Link to={{
            pathname: '/pokemons' + '/' + this.props.id,
            state: {
              id: this.props.id,
              name: this.props.name,
              spriteUrl: this.state.spriteUrl,
              abilities: this.state.abilities,
              speed: this.state.stats.speed,
              specialDefense: this.state.stats.specialDefense,
              specialAttack: this.state.stats.specialAttack,
              defense: this.state.stats.defense,
              attack: this.state.stats.attack,
              hp: this.state.stats.hp,
              type1: this.state.type1,
              type2: this.state.type2,
              locationUrl: this.state.locationUrl,
              moves: this.state.moves,
              items: this.state.items,
              allMoves: this.props.allMoves,
              actualUrl: this.props.url
            }
          }}
        >
          <div className="container" onClick={this.showDetails}>
            <h1>{this.props.name}</h1>
            {this.state.spriteUrl ? <img src={this.state.spriteUrl}/> : <LoadingPage />}
          </div>
        </Link>
          {
            this.inTeam() ?
            <AwesomeButtonProgress
              type="secondary"
              size="medium"
              action={(element, next) =>
                {this.delete(next);
                  setTimeout(() => {
                    next()
                  }, 600)
                }
              }
            >
            Delete!
            </AwesomeButtonProgress>
             :
             <AwesomeButtonProgress
               type="secondary"
               size="medium"
               action={(element, next) =>
                 {this.post(next);
                   setTimeout(() => {
                     next()
                   }, 600)
                 }
               }
             >
             Add to team!
             </AwesomeButtonProgress>
          }
      </div>
    )
  }
}

export default PokemonCard
