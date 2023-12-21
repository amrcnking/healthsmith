import React, { useState } from 'react';
import '../styles.css';
import { Header } from './Header.jsx';

export const Routines = (props) => {
    
    return (
    <>
        <Header />
        <div className="login-container">
            <h2>daily routines</h2>
            <form className='form' method='POST' action='/login'>
            <input name='username' type='text' placeholder='conquer the world'></input>
            <button className='loginBtn' type='submit'>leggo</button>
            </form>
        </div>
    </>
    )
}