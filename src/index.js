import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const loggerMiddleware = createLogger();
let store = createStore(reducers, composeWithDevTools(applyMiddleware(loggerMiddleware)));


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root')
              );
registerServiceWorker();
