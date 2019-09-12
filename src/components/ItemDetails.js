import React from 'react'
import PokemonCard from './PokemonCard'
import LoadingPage from './LoadingPage'

class ItemDetails extends React.Component {

  state = {
    data: null,
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

  componentWillMount() {
    if (!this.props.location.state) {
      this.props.location.state = {}
    }

    if (!this.props.location.state.name) {
      this.props.location.state.name = localStorage.itemName
    }
    if (!localStorage.itemName || localStorage.getItem("itemName") !== this.props.location.state.name) {
      localStorage.setItem("itemName", this.props.location.state.name)
    }

    if (!this.props.location.state.description) {
      this.props.location.state.description = localStorage.itemDescription
    }
    if (!localStorage.itemDescription || localStorage.getItem("itemDescription") !== this.props.location.state.description) {
      localStorage.setItem("itemDescription", this.props.location.state.description)
    }
  }

  componentDidMount() {
    fetch('https://vast-citadel-58007.herokuapp.com/pokemon_items')
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
        key={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
        name={instance.pokemon.name}
        url={instance.pokemon.url}
        id={instance.pokemon.url.split('/')[instance.pokemon.url.split('/').length - 2]}
        allMoves={this.state.moves}
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
          this.state.data && this.state.moves ?
          this.getAllPokemon()
          :
          <img src="/images/loading.gif" height="20%" width="20%"/>
        }
      </div>
    )
  }
}

export default ItemDetails
