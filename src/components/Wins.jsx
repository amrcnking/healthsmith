import React, { useState } from 'react';
import '../styles.css';

export const Wins = (props) => {
    
    return (
    <div className="login-container">
        <h2>your dad is proud of you</h2>
        <form className='form' method='POST' action='/login'>
          <input name='username' type='text' placeholder='i didnt cry today &#129402;'></input>
          <button className='loginBtn' type='submit'>good job me! &#129395;</button>
        </form>
    </div>
    )
}