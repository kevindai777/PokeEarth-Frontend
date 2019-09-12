import React from 'react'
import FormInput from './FormInput'
import FormButton from './FormButton'

class SignUp extends React.Component {

  state = {
    username: null,
    password: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("https://vast-citadel-58007.herokuapp.com/signup", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
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
          <FormButton title="Sign Up"/>
        </form>
        <img src='/images/world.gif'></img>
      </div>
    )
  }
}

export default SignUp
