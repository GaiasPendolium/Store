import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Utiliza createRoot en lugar de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
