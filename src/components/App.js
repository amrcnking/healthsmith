import React, { useState } from 'react';
import '../styles.css';
import { Header } from './Header.jsx';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

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
