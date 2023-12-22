import React, { useState } from 'react';
import '../styles.css';
import { Header } from './Header.jsx';

export const Wins = (props) => {
    
    const [affirmation, setAffirmation] = useState('your dad is proud of you')
    let aff = ''
    const onAffClick = () => {
        setAffirmation(aff)
        
      }
    return (
    <>
        <Header />
        <div className="login-container">
            <h2>{affirmation}</h2>
            <form className='form' method='POST' action='/login'>
            <input name='username' onChange={(e)=> aff = e.target.value} type='text' placeholder='i didnt cry today &#129402;'></input>
            <button className='loginBtn' input type='reset' onClick ={onAffClick}>good job me! &#129395;</button>
            </form>
        </div>
    </>
    )
}