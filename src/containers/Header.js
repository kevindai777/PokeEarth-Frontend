import React from 'react'
import SearchBar from '../components/SearchBar.js'
import FilterButtons from '../components/FilterButtons.js'

class Header extends React.Component {
  render(){
    return (
      <div>
        <SearchBar startQuery={this.props.startQuery}/>
        <FilterButtons selectGeneration={this.props.selectGeneration}/>
      </div>
    )
  }
}

export default Header
