import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Sponsors from './components/sponsors';

ReactDOM.render(<Sponsors />, document.getElementById('sponsorship'));

serviceWorker.unregister();