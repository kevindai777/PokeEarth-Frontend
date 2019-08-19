import React from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from './LoadingPage'

class ItemCard extends React.Component {

  state = {
    item: null,
    favorites: null
  }

  componentDidMount() {
    this.renderItem()
  }

  renderItem = () => {
    fetch(this.props.item.url)
      .then(res => res.json())
      .then(item =>
        this.setState({
          item: item
        })
      )
    fetch('http://localhost:3000/favorite_items')
      .then(res => res.json())
      .then(items =>
        this.setState({
          favorites: items
        })
      )
  }

  post = () => {
    fetch('http://localhost:3000/favorite_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: localStorage.user_id,
        item_id: this.props.item.id
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  decideButton = () => {
    if (this.state.favorites) {
      let ids = this.state.favorites.map(item => item.item.id)
      if (ids.includes(this.props.item.id)) {
        return false
      } else {
        return true
      }
    }
  }

  render() {
    return (
      <div className="card">
        {
          this.state.item ?
          <div>
            <Link to={{
                pathname: '/items' + '/' + this.props.item.id,
                state: {
                  name: this.props.item.name,
                  description: this.state.item.effect_entries[0].effect
                }
              }}
            >
              <div className="container">
                <h1>{this.state.item.name}</h1>
                <img src={this.state.item.sprites.default} style={{width: '100px', height: '100px'}}/>
              </div>
            </Link>
            {this.decideButton() ? <button style={{zIndex: '1'}} onClick={this.post}>Favorite!</button> : null }
          </div>
          :
          <LoadingPage/>
        }
      </div>
    )
  }
}

export default ItemCard
