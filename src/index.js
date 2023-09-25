import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserSignUpPage from './pages/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../src/pages/signUp/index.style.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={styles.root}>
    <UserSignUpPage />
    </div>
);
