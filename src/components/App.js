import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles.css';
import { Header } from './Header.jsx';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import { Eat } from './Eat.jsx';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  
    return (
        <Routes>
            <Route path='/' element={ <Eat onFormSwitch={toggleForm}/> }/>
        </Routes>
    )    


  return (
    <div className='App'>
      <h1>&#x2728; healthsmith &#x2728;</h1>
      <Header />
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default App;
