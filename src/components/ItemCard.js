import React from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

class ItemCard extends React.Component {

  state = {
    item: null,
    favorites: null,
    id: this.props.item.url.split('/')[this.props.item.url.split('/').length - 2]
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
        item_id: this.state.id
      })
    })
      .then(res => res.json())
  }

  decideButton = () => {
    if (this.state.favorites) {
      let ids = this.state.favorites.map(item => item.item.id)
      if (ids.includes(parseInt(this.state.id))) {
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
                pathname: '/items' + '/' + this.state.id,
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
            {this.decideButton() ?
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
                style={{zIndex: '1'}}
              >
                Favorite!
              </AwesomeButtonProgress>
                :
              <p>Favorited!</p>
            }
          </div>
          :
          <LoadingPage/>
        }
      </div>
    )
  }
}

export default ItemCard
