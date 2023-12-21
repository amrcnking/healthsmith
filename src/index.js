import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Router>
        <App /> 
    </Router>
    );