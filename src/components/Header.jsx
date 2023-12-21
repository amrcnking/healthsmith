import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../styles.css';
// import { Eat } from './Eat.jsx';

export const Header = () => {
    return (
    <nav className="Nav">
        <div><Link to='/eat'>eat &#127830;</Link></div> 
        <div><Link to='/slay'>slay &#x1f525;</Link></div>
        <div><Link to='/live'>live &#128151;</Link></div>
    </nav>
    )
}

