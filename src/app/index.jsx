import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import startup from './startup.js';

// Startup script
startup();

render(<App />, document.querySelector('#content'));
