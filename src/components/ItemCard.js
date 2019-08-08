import React from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from './LoadingPage'

class ItemCard extends React.Component {

  state = {
    item: null
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
  }

  render() {
    return (
      <div className="card">
        {
          this.state.item ?
          <Link to={{
              pathname: '/items' + '/' + this.props.item.id,
              state: {
                name: this.props.item.name
              }
            }}
          >
            <div className="container">
              <h1>{this.props.item.name}</h1>
              <img src={this.state.item.sprites.default}/>
            </div>
          </Link>
          :
          <LoadingPage/>
        }
      </div>
    )
  }
}

export default ItemCard
