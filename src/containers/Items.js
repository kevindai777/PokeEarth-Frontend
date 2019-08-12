import React from 'react'
import ItemCard from '../components/ItemCard'

class Items extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    this.renderItems()
  }

  renderItems = () => {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(items =>
        this.setState({
          data: items
        })
      )
  }

  render() {
    return (
      <div>
        <h1>Items</h1>
        {
          this.state.data ?
          this.state.data.map(item => <ItemCard item={item}/>)
          :
          null
        }
      </div>
    )
  }
}

export default Items
