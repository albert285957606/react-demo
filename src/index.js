import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Wiki from './pages/wiki/index.js'
import Home from './pages/home/index.js'
import Header from './common/header/index.js'
import App from'./App'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
