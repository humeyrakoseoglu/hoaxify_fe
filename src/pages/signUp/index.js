import React, { Component } from 'react';
import './index.css';

class UserSignUpPage extends Component {

  // Bileşen içinde kullanacağımız durumu tanımlıyoruz
  state = {
    username: null,
    fullName: null,
    password: null,
    passwordRepeat: null,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    // [name] ifadesi, hangi input alanının güncellendiğini belirler (örneğin, "username")
    // value ise input alanına girilen yeni değeri temsil eder
    this.setState({ [name]: value });
  };

  render() {

    return (
      <div className="signUp-container">
        <h1>Sign Up</h1>
        <form className="signUp-form">
          <input type="text" onChange={this.handleInputChange} placeholder="Username" name="username" className="input-field" />
          <input type="text"  onChange={this.handleInputChange} placeholder="Full Name" name="fullName" className="input-field" />
          <input type="password"  onChange={this.handleInputChange} placeholder="Password" name="password" className="input-field" />
          <input type="password"  onChange={this.handleInputChange} placeholder="Password Repeat" name="passwordRepeat" className="input-field" />
          <button type="submit" className="submit-button" >Sign Up</button>
        </form>
      </div>
    );
  }

}

export default UserSignUpPage;
