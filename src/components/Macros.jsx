import React, { useState } from 'react';
import '../styles.css';

export const Macros = (props) => {
    
    const [calories, setCalories] = useState(2000)
    const [protein, setProtein] = useState(0)
    let cal = 0
    let p = 0
    let f = 0 //extension of tracking fats and carbs
    let c = 0

    const onMacrosClick = () => {
      setCalories(calories - cal)
      setProtein(protein + p)
    }

    return (
    <div className="login-container">
        <h2>calories left: {calories}</h2>
        <h3>protein nommed: {protein} g</h3>
        <form className='form'>
          <input name='username' type='text' placeholder='food'></input>
          <input name='password' type='number' onChange={(e)=> cal = Number(e.target.value)} min="0" max="2000" step="10" placeholder='calories'></input>
          <input name='password' type='number' onChange={(e)=>p = Number(e.target.value)} min="0" max="50" step="0.1" placeholder='protein (g)'></input>
          <input name='password' type='number' onChange={(e)=>f = Number(e.target.value)}min="0" max="50" step="0.1" placeholder='fat (g)'></input>
          <input name='password' type='number' onChange={(e)=>c = Number(e.target.value)}min="0" max="100" step="0.1" placeholder='carbs (g)'></input>
          <button className='loginBtn' input type='reset' onClick ={onMacrosClick}>bussin'</button>
        </form>
    </div>
    )
}