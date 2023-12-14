import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Signup.css";

class Signup extends Component {
  render() {
    return (
      <div className="Signup" id='box'>
        <h2>SignUp</h2>
        <form>
          <div className="text_area">
            <input
              type="username"
              id="username"
              name="username"
              placeholder="username"
              className="text_input"
              required

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              className="text_input"
              required

            />
          </div>
          <div className="text_area">
            <input
              
              id="Phone Number"
              name="Phone Number"
              placeholder='Phone Number'
              maxLength={10}
              className="text_input"
              required

            />
          </div>
          <div className="text_area">
            <input
              
              id="email"
              name="email"
              placeholder='email'
              className="text_input"
              required

            />
          </div>
          <ul> <li>
            <input
              type="submit"
              value="SignUp"
              className="btn"
              id='Signupbutton'
  
            /></li>

            <li id='para'><span><p>click here to <Link to='/Login'>Login</Link></p></span><span></span></li>
           
          </ul>
        </form>

      </div>
    )
  }
}

export default Signup;