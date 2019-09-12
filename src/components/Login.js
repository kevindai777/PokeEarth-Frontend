import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from './FormInput'
import FormButton from './FormButton'

class Login extends React.Component {

  state = {
    username: "",
    password: "",
    cantFind: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("https://vast-citadel-58007.herokuapp.com/login", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          this.setState({
            cantFind: true
          })
        } else {
          this.props.setUser(response)
        }
      })

  }

  render() {
    return (
      <div className="container" style={{width: '800px', marginLeft: '29%'}}>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            description="Username"
            placeholder="Enter your username"
            type="text"
            name="username"
            changing={this.handleChange}
          />
          <FormInput
            description="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            changing={this.handleChange}
          />
          <FormButton title="Log in"/>
        </form>
        <br></br>
        {
          this.state.cantFind ?
          <div>
            Hmm, I can't find that user... Try <Link to="/signup">Signing</Link> up!
            <br></br>
            <img src='/images/bulbasaur.gif'></img>
          </div>
          :
          <img src='/images/world.gif'></img>
        }
      </div>
    )
  }
}

export default Login
