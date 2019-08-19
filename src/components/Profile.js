import React from 'react'
import Location from './Location'
import ItemCard from './ItemCard'

class Profile extends React.Component {

  state = {
    user: null,
    favorites: null,
    itemFavorites: null
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

  render() {
    return (
      <div>
        <h1>Hello, {this.state.user ? this.state.user.username : null}</h1>

        <br></br>

        Here's your favorited locations:
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

        Here's your favorited items:
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
