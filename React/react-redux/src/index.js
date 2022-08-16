import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from '@/store/index.js'
import { storeContext } from '@/utils/context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <storeContext.Provider value={ store }>
    <App />
  </storeContext.Provider>
);

