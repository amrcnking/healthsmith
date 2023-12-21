import React, { useState } from 'react';
import '../styles.css';

export const Macros = (props) => {
    
    const [calories, setCalories] = useState(2000)
    const [protein, setProtein] = useState(0)

    return (
    <div className="login-container">
        <h2>calories left: {calories}</h2>
        <h3>protein nommed: {protein}</h3>
        <form className='form' method='POST' action='/login'>
          <input name='username' type='text' placeholder='food'></input>
          <input name='password' type='password' placeholder='protein'></input>
          <input name='password' type='password' placeholder='fat'></input>
          <input name='password' type='password' placeholder='carbs'></input>
          <button className='loginBtn' type='submit'>log</button>
        </form>
    </div>
    )
}