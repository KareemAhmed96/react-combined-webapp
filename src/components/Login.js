import React from 'react'
import ApiHandler from '../api/ApiHandler';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }

  login = async () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    }

    let response = await ApiHandler.login(user)

    if(response.error) {
      this.setState({error:response.error})
      console.log(this.state.error)
    }
    else {
      console.log(response)
    }

  }

  changeInput = (e) => {
    let statePropName = e.target.name
    this.setState({[statePropName]: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        Email <input type="email" value={this.state.email} name="email" onChange={this.changeInput}/><br />
        Password <input type="password" value={this.state.password} name="password" onChange={this.changeInput}/><br />
        <button onClick={this.login} >Login</button>

      </div>
    )
  }
}

export default Login;