import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <HashRouter basename='/'>
        <App />
      </HashRouter>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
