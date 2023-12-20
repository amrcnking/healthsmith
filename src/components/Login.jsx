import React from 'react';
import '../styles.css';

export const Login = () => {
    return (
    <div className="login-container">
        <h2>member sign-in</h2>
        <form className='form' method='POST' action='/login'>
        <input name='username' type='text' placeholder='username'></input>
        <input name='password' type='password' placeholder='password'></input>
        <button type='submit'>Login</button>
      </form>
    </div>
    )
}
