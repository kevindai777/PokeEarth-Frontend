import React from 'react'
import Encounter from './Encounter'
import { BarChart } from 'react-chartkick'
import Chart from 'chart.js';

class PokemonDetails extends React.Component {


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

  render() {
    return (
      <div>
        <h1>{this.props.location.state.name}</h1>
        <img src={this.props.location.state.spriteUrl}/>
        <h1>Ability: {this.props.location.state.abilities[0]}</h1>
        <h1>Types:
          <img src={this.getType1Image()} />
          <img src={this.getType2Image()} />
        </h1>
        <BarChart
          data={[
                ["Speed", this.props.location.state.speed],
                ["Special Defense", this.props.location.state.specialDefense],
                ["Special Attack", this.props.location.state.specialAttack],
                ["Defense", this.props.location.state.defense],
                ["Attack", this.props.location.state.attack],
                ["Hp", this.props.location.state.hp]
               ]}
          title="Stats"
          color={["red", "green", "blue", "black", "red", "blue"]}
        />
        <Encounter locationUrl={this.props.location.state.locationUrl}/>
      </div>
    )
  }
}

export default PokemonDetails
