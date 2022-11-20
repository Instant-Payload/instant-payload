import React from 'react';
import { render, createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
// import './style.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <App />
);
