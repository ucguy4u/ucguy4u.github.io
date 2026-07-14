import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

// Avoid serving stale GitHub Pages assets after deployment path changes.
serviceWorker.unregister();