import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux"
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
//const store=createStore(reducers)
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
