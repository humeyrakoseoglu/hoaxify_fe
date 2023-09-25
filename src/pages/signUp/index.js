import React, { useState, useEffect } from 'react';
import { signUp } from '../../api/apiCalls';
import styles from './index.style.js';

function UserSignUpPage() {
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalErrors, setGeneralErrors] = useState();

  const [formData, setFormData] = useState({
    userName: '',
    fullName: '',
    password: '',
    passwordRepeat: '',
  });

  //bu fonksiyon formData.userName her degiştiginde caliştirilsin. null iken error var input girince hemen hata mesajı gidiyor
  useEffect(() => {
    setErrors({})
  }, [formData.userName])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage();//submit edildigi anda mesaji sil
    setApiProgress(true);;//submit edildigi anda progress barı kaldir
    setGeneralErrors();;//submit edildigi anda hatayi sil

    try {
      const response = await signUp(formData);
      setSuccessMessage(response.data.message)
    } catch (error) {
      if (error.response?.data && error.response.data.status === 400) {
        setErrors(error.response.data.validationErrors);
      }else{
        setGeneralErrors('Unexpected error occured. Please try again');
      }
    } finally {
      setApiProgress(false)
    }
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
                className={
                  errors.userName ? "form-control is-invalid" : "form-control"
                }
                style={styles.inputField}
              />
              <div className="invalid-feedback">{errors.userName}</div>
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
            {generalErrors && (
              <div className="alert alert-danger">{generalErrors}</div>
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
