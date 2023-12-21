import React, { useState } from 'react';
import '../styles.css';

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
    }

    return (
    <div className="login-container">
        <h2>member sign-in</h2>
        <form className='form' method='POST' action='/login'>
          <input name='username' type='text' placeholder='username'></input>
          <input name='password' type='password' placeholder='password'></input>
          <button className='loginBtn' type='submit'>login</button>
        </form>
        <button className='registerBtn' onClick={() =>props.onFormSwitch('register')}>join the cult	&#128520;</button>
    </div>
    )
}
