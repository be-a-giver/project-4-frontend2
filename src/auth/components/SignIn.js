import React, { Component } from 'react'
import { withRouter ,Link } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="contact">
      <form className="feedback" onSubmit={this.onSignIn}>
      
        <h3 className="contitle">Sign In</h3>
        
        <label htmlFor="email">Email</label>
        <input className="form"  
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input className="form" 
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button type="submit" className='btnn'><span>Sign In</span></button>
        {/* <button className="btnn"><Link to="/change-password"><span>Change Password</span></Link></button> */}
      </form>

      </div>
    )
  }
}

export default withRouter(SignIn)
