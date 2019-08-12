import React from 'react'
import Encounter from './Encounter'
import ItemCard from './ItemCard'
import { BarChart } from 'react-chartkick'
import Chart from 'chart.js'
import { Timeline, Event } from "react-timeline-scribble"
import MoveDetails from './MoveDetails'
import AbilityDetails from './AbilityDetails'
import FadeIn from 'react-fade-in'

class PokemonDetails extends React.Component {

  state = {
    moves: null,
    abilityDescription: false,
    query: null,
    typeName: null
  }

  getType1Image = () => {
    if (this.props.location.state.type1 === 'bug') {
      return '/images/types/bug.png'
    } else if (this.props.location.state.type1 === 'dark') {
      return '/images/types/dark.png'
    } else if (this.props.location.state.type1 === 'dragon') {
      return '/images/types/dragon.png'
    } else if (this.props.location.state.type1 === 'electric') {
      return '/images/types/electric.png'
    } else if (this.props.location.state.type1 === 'fairy') {
      return '/images/types/fairy.png'
    } else if (this.props.location.state.type1 === 'fighting') {
      return '/images/types/fighting.png'
    } else if (this.props.location.state.type1 === 'fire') {
      return '/images/types/fire.png'
    } else if (this.props.location.state.type1 === 'flying') {
      return '/images/types/flying.png'
    } else if (this.props.location.state.type1 === 'ghost') {
      return '/images/types/ghost.png'
    } else if (this.props.location.state.type1 === 'grass') {
      return '/images/types/grass.png'
    } else if (this.props.location.state.type1 === 'ground') {
      return '/images/types/ground.png'
    } else if (this.props.location.state.type1 === 'ice') {
      return '/images/types/ice.png'
    } else if (this.props.location.state.type1 === 'normal') {
      return '/images/types/normal.png'
    } else if (this.props.location.state.type1 === 'poison') {
      return '/images/types/poison.png'
    } else if (this.props.location.state.type1 === 'psychic') {
      return '/images/types/psychic.png'
    } else if (this.props.location.state.type1 === 'rock') {
      return '/images/types/rock.png'
    } else if (this.props.location.state.type1 === 'steel') {
      return '/images/types/steel.png'
    } else if (this.props.location.state.type1 === 'water') {
      return '/images/types/water.png'
    }
  }

  getType2Image = () => {
    if (this.props.location.state.type2 === 'bug') {
      return '/images/types/bug.png'
    } else if (this.props.location.state.type2 === 'dark') {
      return '/images/types/dark.png'
    } else if (this.props.location.state.type2 === 'dragon') {
      return '/images/types/dragon.png'
    } else if (this.props.location.state.type2 === 'electric') {
      return '/images/types/electric.png'
    } else if (this.props.location.state.type2 === 'fairy') {
      return '/images/types/fairy.png'
    } else if (this.props.location.state.type2 === 'fighting') {
      return '/images/types/fighting.png'
    } else if (this.props.location.state.type2 === 'fire') {
      return '/images/types/fire.png'
    } else if (this.props.location.state.type2 === 'flying') {
      return '/images/types/flying.png'
    } else if (this.props.location.state.type2 === 'ghost') {
      return '/images/types/ghost.png'
    } else if (this.props.location.state.type2 === 'grass') {
      return '/images/types/grass.png'
    } else if (this.props.location.state.type2 === 'ground') {
      return '/images/types/ground.png'
    } else if (this.props.location.state.type2 === 'ice') {
      return '/images/types/ice.png'
    } else if (this.props.location.state.type2 === 'normal') {
      return '/images/types/normal.png'
    } else if (this.props.location.state.type2 === 'poison') {
      return '/images/types/poison.png'
    } else if (this.props.location.state.type2 === 'psychic') {
      return '/images/types/psychic.png'
    } else if (this.props.location.state.type2 === 'rock') {
      return '/images/types/rock.png'
    } else if (this.props.location.state.type2 === 'steel') {
      return '/images/types/steel.png'
    } else if (this.props.location.state.type2 === 'water') {
      return '/images/types/water.png'
    } else if (this.props.location.state.type2 === 'null') {
      return null
    }
  }

  createEvents = () => {

    let sortedMoves = this.props.location.state.moves.sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1: -1)

    let level = 0
    let array = []
    let wholeArray = []
    for (let i=0; i<sortedMoves.length; i++) {
      if (level === sortedMoves[i].version_group_details[0].level_learned_at) {
        array.push(sortedMoves[i])
      } else {
        let newArray = []
        level += sortedMoves[i].version_group_details[0].level_learned_at
        newArray.push(sortedMoves[i])
        wholeArray.push(newArray)
      }
    }
    wholeArray.push(array)

    let lastElement = wholeArray[wholeArray.length - 1]
    wholeArray.pop()
    wholeArray[0] = lastElement

    return wholeArray.map(array =>
      <Event interval={"Next Level"} title={`Level: ${array[0].version_group_details[0].level_learned_at}`}>
        {array.map(move =>
          <div className="card">
            <h1>
              Name: {move.move.name}
            </h1>
            <h1>
              Method: {move.version_group_details[0].move_learn_method.name}
            </h1>
            <MoveDetails url={move.move.url}/>
          </div>
        )}
      </Event>
    )
  }

  createEventsWithQuery = () => {

    let moves = this.props.location.state.moves.filter(move => move.version_group_details[0].move_learn_method.name.includes(this.state.query))

    let sortedMoves = moves.sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1: -1)

    let level = 0
    let array = []
    let wholeArray = []
    for (let i=0; i<sortedMoves.length; i++) {
      if (level === sortedMoves[i].version_group_details[0].level_learned_at) {
        array.push(sortedMoves[i])
      } else {
        let newArray = []
        level += sortedMoves[i].version_group_details[0].level_learned_at
        newArray.push(sortedMoves[i])
        wholeArray.push(newArray)
      }
    }
    wholeArray.push(array)

    let lastElement = wholeArray[wholeArray.length - 1]
    wholeArray.pop()
    wholeArray[0] = lastElement

    return wholeArray.map(array =>
      <Event interval={"Next Level"} title={`Level: ${array[0].version_group_details[0].level_learned_at}`}>
        {array.map(move =>
          <div className="card">
            <h1>
              Name: {move.move.name}
            </h1>
            <h1>
              Method: {move.version_group_details[0].move_learn_method.name}
            </h1>
            <MoveDetails url={move.move.url}/>
          </div>
        )}
      </Event>
    )
  }

  showAbilityDescription = () => {
    this.setState({
      abilityDescription: !this.state.abilityDescription
    })
  }

  getItems = () => {
    return this.props.location.state.items.map(item =>
      <ItemCard
        item={item.item}
      />
    )
  }

  filterMoves = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  determineColors = () => {
    let array = [this.props.location.state.speed, this.props.location.state.specialDefense, this.props.location.state.specialAttack, this.props.location.state.defense, this.props.location.state.attack, this.props.location.state.hp]
    console.log(array.length)
    let colorArray = []
    for (let i=0; i<array.length; i++) {
      if (array[i] >= 100) {
        colorArray.push('green')
      } else if (array[i] < 100 && array[i] >= 70) {
        colorArray.push('orange')
      } else {
        colorArray.push('red')
      }
    }
    console.log(colorArray)
    return [colorArray]
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.state.name}</h1>
        <img src={this.props.location.state.spriteUrl}/>
        <h1>
          Abilities:
        </h1>

        <b>
        {
          this.props.location.state.abilities[0].map(ability =>
            <div onClick={this.showAbilityDescription}>
              {ability.ability.name}
              {
                this.state.abilityDescription ?
                <FadeIn>
                  <AbilityDetails url={ability.ability.url}/>
                </FadeIn>
                :
                null
              }
            </div>
        )}
        </b>

        <h1>Types:
          <img src={this.getType1Image()} />
          <img src={this.getType2Image()} />
        </h1>

        <h1>Moves: </h1>

        Filter by Method:
        <input onChange={(event) => this.filterMoves(event)}></input>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Timeline>
          {this.state.query ? this.createEventsWithQuery() : this.createEvents()}
        </Timeline>

        <h1>Held Items: </h1>
        {this.getItems()}

        <h1>Stats: </h1>

        <BarChart
          data={[
                ["Speed", this.props.location.state.speed],
                ["Special Defense", this.props.location.state.specialDefense],
                ["Special Attack", this.props.location.state.specialAttack],
                ["Defense", this.props.location.state.defense],
                ["Attack", this.props.location.state.attack],
                ["Hp", this.props.location.state.hp]
               ]}
          colors={this.determineColors()}
        />

        <Encounter locationUrl={this.props.location.state.locationUrl}/>
      </div>
    )
  }
}

export default PokemonDetails
