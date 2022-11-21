// import React from 'react';
// // import { render, createRoot } from 'react-dom/client';
// // import { BrowserRouter } from 'react-router-dom';
// import App from './components/App.jsx';
// import './styles.css';


// const root = createRoot(document.getElementById('root'));

// root.render(
//     <App />
// );


import React from "react";
import ReactDOM from "react-dom/client"
import App from './components/App.jsx';
import './styles.css'
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)