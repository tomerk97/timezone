
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





ReactDOM.render(
	<div>
		<link rel="shortcut icon" type="image/png" href="./pictures/icon.png"/>
	    <App/>
	 </div>
	 
,
  document.getElementById('root')
);

serviceWorker.unregister();
