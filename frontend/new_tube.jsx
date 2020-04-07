import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    console.log("yo");
    const root = document.getElementById('root');
    ReactDOM.render(<h1>hello</h1>, root);
});