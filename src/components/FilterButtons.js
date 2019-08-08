import React from 'react'

class FilterButtons extends React.Component {
  render() {
    return (
      <div>
        <button className="all" onClick={(event) =>this.props.selectGeneration(event)}>All</button>
        <button className="1" onClick={(event) =>this.props.selectGeneration(event)}>Kanto</button>
        <button className="2" onClick={(event) =>this.props.selectGeneration(event)}>Johto</button>
        <button className="3" onClick={(event) =>this.props.selectGeneration(event)}>Hoenn</button>
        <button className="4" onClick={(event) =>this.props.selectGeneration(event)}>Sinnoh</button>
        <button className="5" onClick={(event) =>this.props.selectGeneration(event)}>Unova</button>
        <button className="6" onClick={(event) =>this.props.selectGeneration(event)}>Kalos</button>
        <button className="7" onClick={(event) =>this.props.selectGeneration(event)}>Alola</button>
      </div>
    )
  }
}

export default FilterButtons
