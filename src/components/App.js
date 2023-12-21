import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../styles.css';
import { Header } from './Header.jsx';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import { Eat } from './Eat.jsx';
import { Wins } from './Wins.jsx';
import { Routines } from './Routines.jsx';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className='App'>
      <h1>&#x2728; healthsmith &#x2728;</h1>
      <Routes>
        {currentForm === 'login' ? (
          <Route path='/' element={<Login onFormSwitch={toggleForm} />} />
        ) : (
          <Route path='/' element={<Register onFormSwitch={toggleForm} />} />
        )}
        <Route path='/eat' element={<Eat />} />
        <Route path='/slay' element={<Wins />} />
        <Route path='/live' element={<Routines />} />
      </Routes>
    </div>
  );

  // return (
  //   <div className='App'>
  //     <h1>&#x2728; healthsmith &#x2728;</h1>
  //     <Header />
  //     {currentForm === 'login' ? (
  //       <Login onFormSwitch={toggleForm} />
  //     ) : (
  //       <Register onFormSwitch={toggleForm} />
  //     )}
  //   </div>
  // );
};

export default App;
