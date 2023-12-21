import React, { useState } from 'react';
import '../styles.css';
import { Macros } from './Macros.jsx';
import { Wins } from './Wins.jsx';

export const Eat = (props) => {
    return (
    <div>
        <h1>&#x2728; healthsmith &#x2728;</h1>
        <nav className="Nav">
            {/* <button className='registerBtn' onClick={() =>props.onFormSwitch('eat')}>eat &#127830;</button>
            <button className='registerBtn' onClick={() =>props.onFormSwitch('slay')}>slay &#x1f525;</button>
            <button className='registerBtn' onClick={() =>props.onFormSwitch('live')}>live &#128151;</button> */}
            <div>eat &#127830;</div> 
            <div>slay &#x1f525;</div>
            <div>live &#128151;</div>
        </nav>
        <Macros />
        {/* <Wins /> */}
        {/* <Routines /> */}
    </div>
    )
}
