import React, { useState } from 'react';
import { signUp } from '../../api/apiCalls';
import styles from './index.style.js';

function UserSignUpPage() {
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [formData, setFormData] = useState({
    userName: '',
    fullName: '',
    password: '',
    passwordRepeat: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage();
    setApiProgress(true);

    try {
      const response = await signUp(formData);
      setSuccessMessage(response.data.message)
    } catch (error) { }
    setApiProgress(false)
  };

  return (
    <div className="container"  >
      <div className="col-lg-4 offset-lg-4 col-sm-7 offset-sm-2">
        <form className="card" onSubmit={onSubmit} style={styles.container} >
          <div className="text-center card-header" >
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">

            <div className="mb-3">

              <input
                type="text"
                onChange={handleInputChange}
                placeholder="Username"
                name="userName"
                value={formData.userName}
                className="form-control"
                style={styles.inputField}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                onChange={handleInputChange}
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                className="form-control"
                style={styles.inputField}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={handleInputChange}
                placeholder="Password"
                name="password"
                value={formData.password}
                className="form-control"
                style={styles.inputField}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={handleInputChange}
                placeholder="Password Repeat"
                name="passwordRepeat"
                value={formData.passwordRepeat}
                className="form-control"
                style={styles.inputField}
              />
            </div>
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="btn submit-button"
                style={styles.submitButton}
                disabled={apiProgress || (!formData.password || formData.password !== formData.passwordRepeat)}>
                {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    style={{ marginRight: '3%', }}
                    aria-hidden="true"
                  ></span>
                )}
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSignUpPage;
