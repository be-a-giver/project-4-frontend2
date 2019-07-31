import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignUp_helper from './auth/components/SignUp_helper'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import PatientIndex from './patients/PatientIndex'
import PatientCreate from './patients/PatientCreate'
import PatientShow from './patients/PatientShow'
import PatientEdit from './patients/PatientEdit'
import SignUpBoth from './auth/components/SignUpBoth'
import Donate from './patients/Donate'
import Footer from './patients/Footer'
import Situations from './patients/Sitiuations'
import Want from './patients/Want' 








import Home from './patients/Home'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {/* {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))} */}
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up/helper' render={() => (
            <SignUp_helper alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/signup' render={() => (
            <SignUpBoth alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />


          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />

        <AuthenticatedRoute  user={user} exact path='/myProfile' render={() => (
            <PatientIndex user={user}/>
          )}/>

        <AuthenticatedRoute  user={user} exact path='/createPatients' render={() => (
         <PatientCreate user={user}/>
         )}/>

        <AuthenticatedRoute  user={user}  exact path='/patients/:id' render={(props) => (
            <PatientShow user={user} patientId={props.match.params.id}/>
          )}/>


          <Route user={user} exact path='/' render={() => (
            <Home user={user}/>
          )}/>

        <AuthenticatedRoute  user={user}  exact path='/patients/:id/edit' render={(props) => (
            <PatientEdit user={user} patientId={props.match.params.id}/>
          )}/> 
          <AuthenticatedRoute  user={user}  exact path='/want' render={(props) => (
            <Want user={user} patientId={props.match.params.id}/>
          )}/> 

          <Route  user={user}  exact path='/situations' render={(props) => (
            <Situations user={user} patientId={props.match.params.id}/>
          )}/> 
          <Route  user={user}  exact path='/situations/:id' render={(props) => (
            <Donate user={user} patientId={props.match.params.id}/>
          )}/> 
          
          <Footer user={user} /> 
   
      
        </main>
      </React.Fragment>
    )
  }
}

export default App
