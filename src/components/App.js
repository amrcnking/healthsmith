import React, { useState } from 'react';
import '../styles.css';
import { Header } from './Header.jsx';

const App = () => {
  return (
    <div>
      <h1>Healthsmith</h1>
      <Header />
      <form className='form' method='POST' action='/login'>
        <input name='username' type='text' placeholder='username'></input>
        <input name='password' type='password' placeholder='password'></input>
        <input type='submit' value='login'></input>
      </form>
      
    </div>
  );
};

export default App;
