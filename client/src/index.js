import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import thunk from'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk));


ReactDOM.render(
        <Provider store={store}><App /></Provider>,
        document.getElementById('root')
    );
registerServiceWorker();
