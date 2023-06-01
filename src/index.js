import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/styles/styles.css';
import { GalleryProvider } from './context/galleryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GalleryProvider>
      <App/>
    </GalleryProvider>
  </React.StrictMode>
);

