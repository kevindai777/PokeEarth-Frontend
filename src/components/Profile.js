import React from 'react'
import Location from './Location'
import ItemCard from './ItemCard'
import PokemonCard from './PokemonCard'
import { Link } from 'react-router-dom'

class Profile extends React.Component {

  state = {
    user: null,
    favorites: null,
    itemFavorites: null,
    stopLoading: true
  }

  componentWillMount() {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => {
        let foundUser = users.filter(user => parseInt(user.id) === parseInt(this.props.userId))[0]
        this.setState({
          user: foundUser
        })
      })
  }

  componentDidMount() {
    fetch('http://localhost:3000/moves')
      .then(res => res.json())
      .then(moves =>
        this.setState({
          moves: moves
        })
      )
    fetch('http://localhost:3000/favorite_pokemons')
      .then(res => res.json())
      .then(pokemons => {
        let foundFavoritePokemon = pokemons.filter(instance => parseInt(instance.user.id) === parseInt(this.props.userId))
        let pokemonArray = foundFavoritePokemon.map(instance => instance.pokemon)
        this.setState({
          favoritePokemons: pokemonArray
        })
      })
  }

  fetchFavoriteLocations = () => {
    fetch("http://localhost:3000/favorite_locations")
      .then(res => res.json())
      .then(response => {
        let foundFavorites = response.filter(location => parseInt(location.user.id) === parseInt(this.props.userId))
        this.setState({
          favorites: foundFavorites
        })
      })
  }

  fetchFavoriteItems = () => {
    fetch("http://localhost:3000/favorite_items")
      .then(res => res.json())
      .then(response => {
        let foundFavorites = response.filter(item => parseInt(item.user.id) === parseInt(this.props.userId))
        this.setState({
          itemFavorites: foundFavorites
        })
      })
  }

  getMostRegion = () => {
    let regionArray = this.state.favorites.map(region => region.location.region_id)
    if (regionArray.length == 0)
      return null
    let modeMap = {}
    let maxEl = regionArray[0], maxCount = 1
    for (let i = 0; i < regionArray.length; i++){
      let el = regionArray[i]
      if(modeMap[el] == null)
        modeMap[el] = 1
      else
        modeMap[el]++
      if(modeMap[el] > maxCount){
        maxEl = el
        maxCount = modeMap[el]
      }
    }

    if (maxEl === 1) {
      this.setState({
        region: 'Kanto'
      })
      return 'Kanto'
    } else if (maxEl === 2) {
      this.setState({
        region: 'Johto'
      })
      return 'Johto'
    } else if (maxEl === 3) {
      this.setState({
        region: 'Hoenn'
      })
      return 'Hoenn'
    } else if (maxEl === 4) {
      this.setState({
        region: 'Sinnoh'
      })
      return 'Sinnoh'
    } else if (maxEl === 5) {
      this.setState({
        region: 'Unova'
      })
      return 'Unova'
    } else if (maxEl === 6) {
      this.setState({
        region: 'Kalos'
      })
      return 'Kalos'
    }
  }

  createPokemonState = () => {
    if (this.state.favorites && this.state.moves && this.state.region) {
      if (this.state.region === 'Kanto') {
        fetch('http://localhost:3000/pokemons/kanto')
          .then(res => res.json())
          .then(pokemons => {
            this.setState({
              foundPokemons: pokemons,
              stopLoading: false
            })
          })
      } else if (this.state.region === 'Johto') {
        fetch('http://localhost:3000/pokemons/johto')
          .then(res => res.json())
          .then(pokemons => {
            this.setState({
              foundPokemons: pokemons,
              stopLoading: false
            })
          })
      } else if (this.state.region === 'Hoenn') {
        fetch('http://localhost:3000/pokemons/hoenn')
          .then(res => res.json())
          .then(pokemons => {
            this.setState({
              foundPokemons: pokemons,
              stopLoading: false
            })
          })
      } else if (this.state.region === 'Sinnoh') {
        fetch('http://localhost:3000/pokemons/sinnoh')
          .then(res => res.json())
          .then(pokemons => {
            this.setState({
              foundPokemons: pokemons,
              stopLoading: false
            })
          })
      } else if (this.state.region === 'Unova') {
        fetch('http://localhost:3000/pokemons/unova')
          .then(res => res.json())
          .then(pokemons => {
            this.setState({
              foundPokemons: pokemons,
              stopLoading: false
            })
          })
      } else if (this.state.region === 'Kalos') {
        fetch('http://localhost:3000/pokemons/kalos')
          .then(res => res.json())
          .then(pokemons => {
            this.setState({
              foundPokemons: pokemons,
              stopLoading: false
            })
          })
      }
    }
  }

  createPokemonCards = () => {
    if (this.state.region) {
      if (this.state.region === 'Kanto') {
        let randomNumberOne = Math.floor(Math.random() * 151)
        let randomNumberTwo = Math.floor(Math.random() * 151)
        let randomNumberThree = Math.floor(Math.random() * 151)
        let randomNumberFour = Math.floor(Math.random() * 151)
        return <div>
          <PokemonCard
            key={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberOne].name}
            url={this.state.foundPokemons[randomNumberOne].url}
            id={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberTwo].name}
            url={this.state.foundPokemons[randomNumberTwo].url}
            id={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberThree].name}
            url={this.state.foundPokemons[randomNumberThree].url}
            id={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberFour].name}
            url={this.state.foundPokemons[randomNumberFour].url}
            id={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
        </div>
      } else if (this.state.region === 'Johto') {
        let randomNumberOne = Math.floor(Math.random() * 100)
        let randomNumberTwo = Math.floor(Math.random() * 100)
        let randomNumberThree = Math.floor(Math.random() * 100)
        let randomNumberFour = Math.floor(Math.random() * 100)
        return <div>
          <PokemonCard
            key={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberOne].name}
            url={this.state.foundPokemons[randomNumberOne].url}
            id={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberTwo].name}
            url={this.state.foundPokemons[randomNumberTwo].url}
            id={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberThree].name}
            url={this.state.foundPokemons[randomNumberThree].url}
            id={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberFour].name}
            url={this.state.foundPokemons[randomNumberFour].url}
            id={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
        </div>
      } else if (this.state.region === 'Hoenn') {
        let randomNumberOne = Math.floor(Math.random() * 135)
        let randomNumberTwo = Math.floor(Math.random() * 135)
        let randomNumberThree = Math.floor(Math.random() * 135)
        let randomNumberFour = Math.floor(Math.random() * 135)
        return <div>
          <PokemonCard
            key={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberOne].name}
            url={this.state.foundPokemons[randomNumberOne].url}
            id={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberTwo].name}
            url={this.state.foundPokemons[randomNumberTwo].url}
            id={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberThree].name}
            url={this.state.foundPokemons[randomNumberThree].url}
            id={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberFour].name}
            url={this.state.foundPokemons[randomNumberFour].url}
            id={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
        </div>
      } else if (this.state.region === 'Sinnoh') {
        let randomNumberOne = Math.floor(Math.random() * 107)
        let randomNumberTwo = Math.floor(Math.random() * 107)
        let randomNumberThree = Math.floor(Math.random() * 107)
        let randomNumberFour = Math.floor(Math.random() * 107)
        return <div>
          <PokemonCard
            key={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberOne].name}
            url={this.state.foundPokemons[randomNumberOne].url}
            id={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberTwo].name}
            url={this.state.foundPokemons[randomNumberTwo].url}
            id={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberThree].name}
            url={this.state.foundPokemons[randomNumberThree].url}
            id={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberFour].name}
            url={this.state.foundPokemons[randomNumberFour].url}
            id={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
        </div>
      } else if (this.state.region === 'Unova') {
        let randomNumberOne = Math.floor(Math.random() * 156)
        let randomNumberTwo = Math.floor(Math.random() * 156)
        let randomNumberThree = Math.floor(Math.random() * 156)
        let randomNumberFour = Math.floor(Math.random() * 156)
        return <div>
          <PokemonCard
            key={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberOne].name}
            url={this.state.foundPokemons[randomNumberOne].url}
            id={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberTwo].name}
            url={this.state.foundPokemons[randomNumberTwo].url}
            id={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberThree].name}
            url={this.state.foundPokemons[randomNumberThree].url}
            id={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberFour].name}
            url={this.state.foundPokemons[randomNumberFour].url}
            id={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
        </div>
      } else if (this.state.region === 'Kalos') {
        let randomNumberOne = Math.floor(Math.random() * 72)
        let randomNumberTwo = Math.floor(Math.random() * 72)
        let randomNumberThree = Math.floor(Math.random() * 72)
        let randomNumberFour = Math.floor(Math.random() * 72)
        return <div>
          <PokemonCard
            key={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberOne].name}
            url={this.state.foundPokemons[randomNumberOne].url}
            id={this.state.foundPokemons[randomNumberOne].url.split('/')[this.state.foundPokemons[randomNumberOne].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberTwo].name}
            url={this.state.foundPokemons[randomNumberTwo].url}
            id={this.state.foundPokemons[randomNumberTwo].url.split('/')[this.state.foundPokemons[randomNumberTwo].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberThree].name}
            url={this.state.foundPokemons[randomNumberThree].url}
            id={this.state.foundPokemons[randomNumberThree].url.split('/')[this.state.foundPokemons[randomNumberThree].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
          <PokemonCard
            key={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            name={this.state.foundPokemons[randomNumberFour].name}
            url={this.state.foundPokemons[randomNumberFour].url}
            id={this.state.foundPokemons[randomNumberFour].url.split('/')[this.state.foundPokemons[randomNumberFour].url.split('/').length - 2]}
            allMoves={this.state.moves}
          />
        </div>
      }
    }
  }

  createTeam = () => {
    return this.state.favoritePokemons.map(pokemon =>
      <PokemonCard
        key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
        name={pokemon.name}
        url={pokemon.url}
        id={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
        allMoves={this.state.moves}
      />
    )
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.user ? this.state.user.username : null}</h1>

        <br></br>

        <h3><i>Here's your favorited locations:</i></h3>
        <br></br>
        {this.state.favorites ? null : this.fetchFavoriteLocations()}
        {
          this.state.favorites ? this.state.favorites.map(location =>
          <Location
            name={location.location.name} id={location.location.id}
          />)
          :
          null
        }

        <br></br>

        <h3><i>Favorited Team: </i></h3>

        <br></br>

        {this.state.favoritePokemons ? this.createTeam() : null}

        <br></br>

        <h3>Looks like you've been hanging around <Link to={this.state.favorites && !this.state.region ? '/' + this.getMostRegion() : null}>
          {this.state.favorites && this.state.region ? this.state.region : null}
        </Link> alot... </h3>

        <br></br>

        Check out some of these Pokemon from the same region!

        <br></br>

        {this.state.stopLoading ? this.createPokemonState() : null}
        {this.state.foundPokemons ? this.createPokemonCards() : null}

        <br></br>
        <br></br>
        <br></br>

        <h3><i>Here's your favorited items:</i></h3>
        <br></br>
        {this.state.itemFavorites ? null : this.fetchFavoriteItems()}
        {
          this.state.itemFavorites ? this.state.itemFavorites.map(item =>
            <ItemCard
              item={item.item}
            />)
          :
          null
        }
      </div>
    )
  }
}

export default Profile
