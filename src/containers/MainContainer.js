import React from 'react'
import PokemonContainer from './PokemonContainer'
import LoadingPage from '../components/LoadingPage'

class MainContainer extends React.Component {

  state = {
    data: null,
    next: null
  }

  componentWillMount() {
    this.renderThisData()
    // this.scrollListener = window.addEventListener("scroll", e => {
    //   this.handleScroll(e);
    // })
  }

  // handleScroll = () => {
  //   var lastLi = document.getElementsByClassName("card")[document.getElementsByClassName("card").length - 1]
  //   var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
  //   var pageOffset = window.pageYOffset + window.innerHeight
  //   if (pageOffset > lastLiOffset) {
  //     this.loadMore()
  //   }
  // }

  renderThisData = () => {
    fetch('http://localhost:3000/pokemons')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons
          // next: pokemons.next
        })
      })
  }

  // loadMore = () => {
  //   fetch(this.state.next)
  //     .then(res => res.json())
  //     .then(pokemons => {
  //       this.setState({
  //         data: [...this.state.data, pokemons],
  //         next: pokemons.next
  //       })
  //     })
  // }

  render(){
    return (
      <div>
        {this.state.data ? <PokemonContainer pokemons={this.state.data} query={this.props.query} generation={this.props.generation}/> : <LoadingPage />}
      </div>
    )
  }
}

export default MainContainer
