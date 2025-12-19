import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

const rootEl = document.getElementById('root')!;

// Static HTML in index.html provides instant FCP/LCP
// React replaces it once loaded - CSS hides static content automatically
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const skel = document.getElementById('loading-skeleton');
if (skel) skel.remove();
