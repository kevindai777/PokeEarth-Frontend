import React from 'react'
import Encounter from './Encounter'
import ItemCard from './ItemCard'
import { BarChart } from 'react-chartkick'
import Chart from 'chart.js'
import { Timeline, Event } from "react-timeline-scribble"
import MoveDetails from './MoveDetails'
import AbilityDetails from './AbilityDetails'
import FadeIn from 'react-fade-in'
import { ButtonToolbar, Button } from 'react-bootstrap'
import PokemonCard from './PokemonCard'
import { Overlay } from 'react-overlays'

class PokemonDetails extends React.Component {

  state = {
    pokemons: null,
    show: true
  }

  componentWillMount() {
    if (!this.props.location.state) {
      this.props.location.state = {}
    }

    if (!this.props.location.state.id) {
      this.props.location.state.id = localStorage.id
    }
    if (!localStorage.id || localStorage.getItem("id") !== this.props.location.state.id) {
      localStorage.setItem("id", this.props.location.state.id)
    }

    if (!this.props.location.state.actualUrl) {
      this.props.location.state.actualUrl = localStorage.actualUrl
    }
    if (!localStorage.actualUrl || localStorage.getItem("actualUrl") !== this.props.location.state.actualUrl) {
      localStorage.setItem("actualUrl", this.props.location.state.actualUrl)
    }

    if (!this.props.location.state.name) {
      this.props.location.state.name = localStorage.name
    }
    if (!localStorage.name || localStorage.getItem("name") !== this.props.location.state.name) {
      localStorage.setItem("name", this.props.location.state.name)
    }

    if (!this.props.location.state.spriteUrl) {
      this.props.location.state.spriteUrl = localStorage.spriteUrl
    }
    if (!localStorage.spriteUrl || localStorage.getItem("spriteUrl") !== this.props.location.state.spriteUrl) {
      localStorage.setItem("spriteUrl", this.props.location.state.spriteUrl)
    }

    if (!this.props.location.state.abilities) {
      this.props.location.state.abilities = JSON.parse(localStorage.getItem("abilities"))
    }
    if (!localStorage.abilities || localStorage.getItem("abilities") !== this.props.location.state.abilities) {
      localStorage.setItem("abilities", JSON.stringify(this.props.location.state.abilities))
    }

    if (!this.props.location.state.speed) {
      this.props.location.state.speed = localStorage.speed
    }
    if (!localStorage.speed || localStorage.speed !== this.props.location.state.speed) {
      localStorage.setItem("speed", this.props.location.state.speed)
    }

    if (!this.props.location.state.specialDefense) {
      this.props.location.state.specialDefense = localStorage.specialDefense
    }
    if (!localStorage.specialDefense || localStorage.specialDefense !== this.props.location.state.specialDefense) {
      localStorage.setItem("specialDefense", this.props.location.state.specialDefense)
    }

    if (!this.props.location.state.specialAttack) {
      this.props.location.state.specialAttack = localStorage.specialAttack
    }
    if (!localStorage.specialAttack || localStorage.specialAttack !== this.props.location.state.specialAttack) {
      localStorage.setItem("specialAttack", this.props.location.state.specialAttack)
    }

    if (!this.props.location.state.defense) {
      this.props.location.state.defense = localStorage.defense
    }
    if (!localStorage.defense || localStorage.defense !== this.props.location.state.defense) {
      localStorage.setItem("defense", this.props.location.state.defense)
    }

    if (!this.props.location.state.attack) {
      this.props.location.state.attack = localStorage.attack
    }
    if (!localStorage.attack || localStorage.attack !== this.props.location.state.attack) {
      localStorage.setItem("attack", this.props.location.state.attack)
    }

    if (!this.props.location.state.hp) {
      this.props.location.state.hp = localStorage.hp
    }
    if (!localStorage.hp || localStorage.hp !== this.props.location.state.hp) {
      localStorage.setItem("hp", this.props.location.state.hp)
    }

    if (!this.props.location.state.type1) {
      this.props.location.state.type1 = localStorage.type1
    }
    if (!localStorage.type1 || localStorage.type1 !== this.props.location.state.type1) {
      localStorage.setItem("type1", this.props.location.state.type1)
    }

    if (!this.props.location.state.type2) {
      this.props.location.state.type2 = localStorage.type2
    }
    if (!localStorage.type2 || localStorage.type2 !== this.props.location.state.type2) {
      localStorage.setItem("type2", this.props.location.state.type2)
    }

    if (!this.props.location.state.locationUrl) {
      this.props.location.state.locationUrl = localStorage.locationUrl
    }
    if (!localStorage.locationUrl || localStorage.locationUrl !== this.props.location.state.locationUrl) {
      localStorage.setItem("locationUrl", this.props.location.state.locationUrl)
    }

    if (!this.props.location.state.moves) {
      this.props.location.state.moves = JSON.parse(localStorage.getItem("moves"))
    }
    if (!localStorage.moves || JSON.parse(localStorage.getItem("moves")) !== this.props.location.state.moves) {
      localStorage.setItem("moves", JSON.stringify(this.props.location.state.moves))
    }

    if (!this.props.location.state.items) {
      this.props.location.state.items = JSON.parse(localStorage.getItem("items"))
    }
    if (!localStorage.items || JSON.parse(localStorage.getItem("items")) !== this.props.location.state.items) {
      localStorage.setItem("items", JSON.stringify(this.props.location.state.items))
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/moves')
      .then(res => res.json())
      .then(moves =>
        this.setState({
          moves: moves
        })
      )
    fetch('http://localhost:3000/pokemons')
      .then(res => res.json())
      .then(allPokemons =>
        this.setState({
          pokemons: allPokemons
        }, () => this.getEvolutionData())
      )
    fetch('https://pokeapi.co/api/v2/pokemon-species/' + this.props.location.state.id)
      .then(res => res.json())
      .then(response =>
        this.setState({
          genus: response.genera[2].genus
        })
      )
  }

  state = {
    moves: null,
    abilityDescription: false,
    query: null,
    typeName: null,
    typeQuery: null,
    moves: null,
    evolutionName: null,
    evolvedUrl: null
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
    if (!this.state.query && !this.state.typeQuery && !this.state.nameQuery) {
      let sortedMoves = [...this.props.location.state.moves].sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1: -1)

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

              <MoveDetails
                url={move.move.url}
              />
            </div>
          )}
        </Event>
      )
    } else if (this.state.query && !this.state.typeQuery && !this.state.nameQuery) {
      if (this.state.query === 'all') {
        let sortedMoves = [...this.props.location.state.moves].sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1: -1)

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

        if (array[0]) {
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

                  <MoveDetails
                    url={move.move.url}
                  />
                </div>
              )}
            </Event>
          )
        } else {
          return <Event>
            None found.
          </Event>
        }
      } else {
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

        if (array[0]) {
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

                  <MoveDetails
                    url={move.move.url} getFilteredType={this.getFilteredType}
                  />
                </div>
              )}
            </Event>
          )
        } else {
          return "None found."
        }

      }
    } else if (!this.state.query && this.state.typeQuery && !this.state.nameQuery) {

      let moveNames = this.props.location.state.moves.map(move => move.move.name)
      let filteredMoves = this.props.location.state.allMoves.filter(move => moveNames.includes(move.name))
      let superFiltered = filteredMoves.filter(move => move.typing.includes(this.state.typeQuery))
      let superFilteredNames = superFiltered.map(move => move.name)
      let finalMoves = this.props.location.state.moves.filter(move => superFilteredNames.includes(move.move.name))

      let sortedMoves = [...finalMoves].sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1: -1)

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

      if (array[0]) {
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

                <MoveDetails
                  key={move.move.url.split('/')[move.move.url.split('/').length - 2]}
                  url={move.move.url}
                />
              </div>
            )}
          </Event>
        )
      } else {
        return "None found."
      }

    } else if (!this.state.query && !this.state.typeQuery && this.state.nameQuery) {
      let gotMoves = this.props.location.state.moves.filter(move => move.move.name.includes(this.state.nameQuery))

      let sortedMoves = [...gotMoves].sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1: -1)

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

      if (array[0]) {
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

                <MoveDetails
                  key={move.move.url.split('/')[move.move.url.split('/').length - 2]}
                  url={move.move.url}
                />
              </div>
            )}
          </Event>
        )
      } else {
        return "None found."
      }

    }
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

  findMoveByName = (event) => {
    this.setState({
      nameQuery: event.target.value
    })
  }

  filterMoves = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  filterMovesByType = (event) => {
    this.setState({
      typeQuery: event.target.value
    })
  }

  determineColors = () => {
    let array = [this.props.location.state.hp, this.props.location.state.attack, this.props.location.state.defense, this.props.location.state.specialAttack, this.props.location.state.specialDefense, this.props.location.state.speed]
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
    return [colorArray]
  }

  scrollToAbilities = () => {
    var element = document.getElementById("superAbilities");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  scrollToTop = () => {
    var element = document.getElementById("top");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  scrollToMoves = () => {
    var element = document.getElementById("superMoves");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  scrollToStats = () => {
    var element = document.getElementById("superStats");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  scrollToEncounters = () => {
    var element = document.getElementById("superEncounters");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  }

  getEvolutionData = () => {
    fetch(this.props.location.state.actualUrl.replace('pokemon', 'pokemon-species'))
      .then(res => res.json())
      .then(response => {
        if (response.evolves_from_species) {
          this.setState({
            evolutionName: response.evolves_from_species.name
          }, () => this.createUrl())
        } else {
          this.setState({
            evolutionName: null
          })
        }
      })
  }

  createUrl = () => {
    if (this.state.pokemons && this.state.evolutionName) {
      let foundPokemon = this.state.pokemons.filter(pokemon => pokemon.name === this.state.evolutionName)[0]
      this.setState({
        evolvedUrl: foundPokemon.url
      })
    }
  }

  hoverType = () => {
    console.log('hey')
  }

  render() {
    return (
      <div>

        <div style={{position: 'fixed', marginLeft: '80%', zIndex: '1'}}>
          <ButtonToolbar>
            <Button
              style={{width: '80%'}}
              variant="primary"
              onClick={this.scrollToTop}
              block
            >
              Scroll to Top
            </Button>
            <Button
              style={{width: '80%'}}
              variant="success"
              onClick={this.scrollToAbilities}
              block
            >
              Scroll to Abilities
            </Button>
            <Button
              style={{width: '80%'}}
              variant="warning"
              onClick={this.scrollToMoves}
              block
            >
              Scroll to Moves
            </Button>
            <Button
              style={{width: '80%'}}
              variant="danger"
              onClick={this.scrollToStats}
              block
            >
              Scroll to Stats
            </Button>
            <Button
              style={{width: '80%'}}
              variant="info"
              onClick={this.scrollToEncounters}
              block
            >
              Scroll to Encounters
            </Button>
          </ButtonToolbar>
        </div>

        <h1 id="top">{this.props.location.state.name}</h1>
        <h3>
          <i>
          {
            this.state.genus
            ?
            "The" + " " + this.state.genus 
            : null
          }
          </i>
        </h3>
        <img src={this.props.location.state.spriteUrl}/>
        <h1 id="superAbilities">
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
          <img src={this.getType1Image()} onMouseEnter={this.hoverType}/>
          <img src={this.getType2Image()} onMouseEnter={this.hoverType}/>
        </h1>

        <h1>Evolves from:
          <br></br>
          {this.state.evolutionName && this.state.evolvedUrl ?
          <PokemonCard
            key={this.state.evolvedUrl.split('/')[this.state.evolvedUrl.split('/').length - 2]}
            name={this.state.evolutionName}
            url={this.state.evolvedUrl}
            id={this.state.evolvedUrl.split('/')[this.state.evolvedUrl.split('/').length - 2]}
            allMoves={this.state.moves}
          />
            :
            null
          }
        </h1>

        <h1 id="superMoves">Moves: </h1>

        Search By Name:
        <input onChange={(event) => this.findMoveByName(event)}></input>

        <br></br>

        Filter by Type:
        <input onChange={(event) => this.filterMovesByType(event)}></input>

        <br></br>

        Filter by Method:
        <select onChange={(event) => this.filterMoves(event)}>
          <option>all</option>
          <option>machine</option>
          <option>level-up</option>
          <option>egg</option>
          <option>tutor</option>
        </select>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Timeline>
          {this.createEvents()}
        </Timeline>

        <h1>Held Items: </h1>
        {this.getItems()}

        <h1 id="superStats">Stats: </h1>

        <BarChart
          data={[
                ["Hp", this.props.location.state.hp],
                ["Attack", this.props.location.state.attack],
                ["Defense", this.props.location.state.defense],
                ["Special Attack", this.props.location.state.specialAttack],
                ["Special Defense", this.props.location.state.specialDefense],
                ["Speed", this.props.location.state.speed]
               ]}
          colors={this.determineColors()}
        />
      <div id="superEncounters">
          <Encounter locationUrl={this.props.location.state.locationUrl} id={this.props.location.state.id}/>
        </div>
      </div>
    )
  }
}

export default PokemonDetails
