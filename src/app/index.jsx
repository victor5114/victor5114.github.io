import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import startup from './startup.js';
import styles from './index.scss';

// Startup script
startup();

render(
  <div className={styles.content}>
    <App />
  </div>,
  document.querySelector('#content')
);
