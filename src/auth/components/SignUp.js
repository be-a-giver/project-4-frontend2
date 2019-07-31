import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../api'
import messages from '../messages'
class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      name :'',
      ID:'',
      mobileNumber:'',
      password: '',
      password_confirmation: ''
    }
  }
  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })
  onSignUp = event => {
    event.preventDefault()
    const { alert, history, setUser } = this.props
    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/situations'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }
  render () {
    const {name, ID, mobileNumber, email, password, password_confirmation } = this.state
    return (
      <div className="contact">
      <form className="feedback"onSubmit={this.onSignUp}>
        
        <h3 className="contitle">Sign Up As User</h3>
        <label htmlFor="email">Email</label> <br/>
        <input className="form" 
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        /> <br/>
        <label htmlFor="name">Name</label><br/>
                <input className="form"
                  required
                  name="name"
                  value={name}
                  type="text"
                  placeholder="name"
                  onChange={this.handleChange}
                /><br/>
        <label htmlFor="ID">ID</label><br/>
                <input className="form"
                  required
                  name="ID"
                  value={ID}
                  type="text"
                  placeholder="ID"
                  onChange={this.handleChange}
                /><br/>
        <label htmlFor="mobileNumber"> Mobile Number</label>
                        <input className="form"
                          required
                          name="mobileNumber"
                          value={mobileNumber}
                          type="text"
                          placeholder="mobileNumber"
                          onChange={this.handleChange}
                        /><br/>
        <label htmlFor="password">Password</label>
        <input className="form"
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        /><br/>
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input className="form"
          required
          name="password_confirmation"
          value={password_confirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        /><br/>
        
        
        <button type="submit" className="btnn"><span>Sign Up</span></button><br/>
       
      </form>
      </div>
    )
  }
}
export default withRouter(SignUp)


