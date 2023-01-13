import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>Register Form</h2>
        <form>
            <div>
              <label>FirstName</label>
              <input type="text" placeholder="firstName" />
            </div> <br/>
            <div>
              <label>LastName</label>
              <input type="text" placeholder="lastName" />
            </div> <br/>
            <div>
              <label>Email</label>
              <input type="email" placeholder="xxx@email" />
            </div> <br/>
            <div>
              <label>password</label>
              <input type="password" placeholder="******" />
            </div> <br/>
            <div>
              <label>UserName</label>
              <input type="text" placeholder="Enter UserName" />
            </div> <br/>
            <div>
              <label>Address</label>
              <textarea type="Address" placeholder="Enter Ur Address" cols="12" rows="5"  ></textarea>
            </div> <br/>
            <div>
              <label>pincode</label>
              <input type="text" placeholder="Enter your PinCode" />
            </div> <br/>
            <div>
              <label>Contact</label>
              <input type="text" placeholder="0000000000" />
            </div> <br/>

        </form>
        <button type="submit">Register</button>
      </div>
    )
  }
}
