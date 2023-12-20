import React, { useState } from 'react';
import '../styles.css';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login-container'>
      <h2>create account</h2>
      <form className='form' method='POST' action='/register'>
        <input name='name' type='text' placeholder='name'></input>
        <input name='username' type='text' placeholder='username'></input>
        <input name='password' type='password' placeholder='password'></input>
        <button className='loginBtn' type='submit'>
          register
        </button>
      </form>
      <button className='registerBtn' onClick={() =>props.onFormSwitch('login')}>
        go back to login
      </button>
    </div>
  );
};
