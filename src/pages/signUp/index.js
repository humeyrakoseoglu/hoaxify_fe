import React, { Component } from 'react';
import './index.css';
import { signUp } from '../../api/apiCalls';

class UserSignUpPage extends Component {
  state = {
    userName: null,
    fullName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signUp = async (e)  =>  {
    e.preventDefault();

    const { userName, fullName, password } = this.state;

    const body = {
      userName,
      fullName,
      password,
    };

    this.setState({ pendingApiCall: true });

    try {
      const response = await signUp(body);
    } catch (error) {}
    this.setState({ pendingApiCall: false });
  };

  render() {
    const { pendingApiCall } = this.state;

    return (
      <div className="signUp-container">
        <h1>Sign Up</h1>
        <form className="signUp-form">
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Username"
            name="userName"
            className="input-field"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Full Name"
            name="fullName"
            className="input-field"
          />
          <input
            type="password"
            onChange={this.handleInputChange}
            placeholder="Password"
            name="password"
            className="input-field"
          />
          <input
            type="password"
            onChange={this.handleInputChange}
            placeholder="Password Repeat"
            name="passwordRepeat"
            className="input-field"
          />
          <button
            type="button"
            className="btn submit-button"
            onClick={this.signUp}
            disabled={pendingApiCall}
          >
            {pendingApiCall ? <span className="spinner-border spinner-border-sm"></span>: ''}
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default UserSignUpPage;
