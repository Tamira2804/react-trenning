import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

// Використовуємо createRoot замість ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
