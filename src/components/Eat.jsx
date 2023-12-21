import React, { useState } from 'react';
import '../styles.css';
import { Macros } from './Macros.jsx';

export const Eat = () => {
    return (
    <div>
        <h1>&#x2728; healthsmith &#x2728;</h1>
        <nav className="Nav">
            <div>eat &#127830;</div> 
            <div>slay &#x1f525;</div>
            <div>live &#128151;</div>
        </nav>
        <Macros />
    </div>
    )
}
