import React, { useState } from 'react';
import '../styles.css';
import { Header } from './Header.jsx';
import { Login } from './Login.jsx';

const App = () => {
  return (
    <div>
      <h1>&#x2728; healthsmith &#x2728;</h1>
      <Header />
      <Login />
      
    </div>
  );
};

export default App;
