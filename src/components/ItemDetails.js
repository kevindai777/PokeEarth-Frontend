import React from 'react'
import PokemonCard from './PokemonCard'

class ItemDetails extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon_items')
      .then(res => res.json())
      .then(pokemonItems =>
        this.setState({
          data: pokemonItems
        })
      )
  }

  getAllPokemon = () => {
    let allPokemon = this.state.data.filter(instance => instance.item.name === this.props.location.state.name)
    return allPokemon.map((instance, index) =>
      <PokemonCard
        key={index + 1}
        name={instance.pokemon.name}
        url={instance.pokemon.url}
        id={index + 1}
      />
  )}

  render() {
    return (
      <div>
        <h1>{this.props.location.state.name}</h1>
        <h2><i>{this.props.location.state.description}</i></h2>
        Pokemon Holding this Item:
        <br></br>
        {
          this.state.data ?
          this.getAllPokemon()
          :
          null
        }
      </div>
    )
  }
}

export default ItemDetails
