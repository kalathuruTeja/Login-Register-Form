import React, { Component } from 'react'
//import Register from './components/Register'
import './index.css'

export default class index extends Component {
    state= {
        email: "",
        password : ""
    }

    onChangeEmail = event =>{
        this.setState({email:event.target.value})
    }

    onChangePassword = event =>{
        this.setState({password : event.target.value})
    }

     onSubmit = (e) =>{
        e.preventDefault()
        //console.log(email)
    }

  render() {
    const {email,password} = this.state

    return (  
      <div className="app-container">
        <div className="login-container">
            <h2 className="heading">Login Form</h2>
            <form onSubmit= {this.submitForm} >
                <label htmlFor ="email">Email : </label>
                <input 
                id="email"
                  type="email" 
                  palceholder ="Enter your Emailid"
                  onChange ={this.onChangeEmail}
                  value= {email}
                 /> <br/>
                 <label htmlFor ="password"> password </label>
                <input 
                  type="email" 
                  palceholder ="**********"
                  id="password"
                  onChange ={this.onChangePassword}
                  value= {password}
                 />
            </form>
            <button type="submit" className="button"> Login</button>
            <button type="submit" className="button"> Register</button>
        </div>
        
        
      </div>
    )
  }
}
