import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            Email: '',
            Password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeChange = this.routeChange.bind(this);
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
        console.log(this.state);
        //axios
			//.post('https://t30x4jovgb.execute-api.us-east-2.amazonaws.com/dev/getuserdetailsbyemail', this.state,{ withCredentials: true })
			//.then(response => {
			//	if (response.data.logged_in) {
          //this.props.handleSuccessfulAuth(response.data);
        //}
			//})
			//.catch(error => {
			//	console.log(error);
      //});
    }

    routeChange() {
      let path = "/home";
      this.props.history.push(path);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="Email" value={this.state.email} onChange={this.handleChange} required/>
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="Password" value={this.state.password} onChange={this.handleChange} required/>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.routeChange}>Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;