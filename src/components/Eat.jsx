import React, { useState } from 'react';
import '../styles.css';
import { Macros } from './Macros.jsx';
import { Header } from './Header.jsx';

export const Eat = (props) => {
    return (
    <div>
        <Header />
        <Macros />
    </div>
    )
}
