import React from 'react'
import ItemCard from '../components/ItemCard'
import LoadingPage from '../components/LoadingPage'
import { InfiniteScroll } from 'react-simple-infinite-scroll'

class Items extends React.Component {

  state = {
    data: null,
    query: null,
    isLoading: false
  }

  componentDidMount() {
    this.renderItems()
  }

  renderItems = () => {
    fetch('https://pokeapi.co/api/v2/item/?limit=20')
      .then(res => res.json())
      .then(items =>
        this.setState({
          data: items.results,
          next: items.next
        })
      )
  }

  loadMore = () => {
    fetch(this.state.next)
      .then(res => res.json())
      .then(items => {
        this.setState({
          data: [...this.state.data, items.results].flat(),
          next: items.next,
          isLoading: false
        })
      })
  }

  query = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  findData = () => {
    return this.state.data.filter(item => item.name.includes(this.state.query)).map(item => <ItemCard item={item}/>)
  }

  render() {
    return (
      <div>
        <h1>Items</h1>
        Search by Name: <input onChange={(event) => this.query(event)}></input>
        <br></br>
        <InfiniteScroll
          throttle={100}
          threshold={300}
          isLoading={this.state.isLoading}
          hasMore={true}
          onLoadMore={this.state.next ? this.loadMore : null}
        >
          {
            this.state.data ?
            this.state.query ?
            this.findData()
            :
            this.state.data.map(item => <ItemCard item={item}/>)
            :
            null
          }
        </InfiniteScroll>
      </div>
    )
  }
}

export default Items
