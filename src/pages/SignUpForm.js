import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import GoogleLogin from 'react-google-login';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            Password: '',
            FirstName: '',
            LastName:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.routeChange = this.routeChange.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        axios
			.post('https://s8u9hip5jf.execute-api.us-east-2.amazonaws.com/dev/postuserregistration', this.state)
			/*.then(response => {
				if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
			})
			.catch(error => {
				console.log(error)
			})*/
    }

    //routeChange() {
    //  let path = "/home";
    //  this.props.history.push(path);
    //}


    render() {
      const responseGoogle = (response) => {
        console.log(response);
      }
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">First Name</label>
                <input type="text" id="fname" className="FormField__Input" placeholder="Enter your First name" name="FirstName" value={this.state.name} onChange={this.handleChange} required/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Last Name</label>
                <input type="text" id="lname" className="FormField__Input" placeholder="Enter your Last name" name="LastName" value={this.state.name} onChange={this.handleChange} required/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">EMail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="Email" value={this.state.email} onChange={this.handleChange} required/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="Password" value={this.state.password} onChange={this.handleChange} required/>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
              <div className="FormField">
              <GoogleLogin
          clientId="612239008076-630og1hj1belgf5t718aontrvv5s54rn.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
              </div>
              
            </form>
          </div>
        );
    }
}
export default SignUpForm;