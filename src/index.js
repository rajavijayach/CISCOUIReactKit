import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // CISCO UI CSS Framework
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
