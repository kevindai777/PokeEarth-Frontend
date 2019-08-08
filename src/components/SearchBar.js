import React from 'react'

class SearchBar extends React.Component {
  render(){
    return (
      <div>
        <input onChange={(event) => this.props.startQuery(event)}></input>
      </div>
    )
  }
}

export default SearchBar
