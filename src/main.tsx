import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

const rootEl = document.getElementById('root')!;

// Use hydrateRoot if there's static content, otherwise createRoot
if (rootEl.children.length > 0) {
  // Static HTML exists - hydrate over it for faster perceived load
  ReactDOM.hydrateRoot(rootEl,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // No static HTML - normal render
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const skel = document.getElementById('loading-skeleton');
if (skel) skel.remove();
