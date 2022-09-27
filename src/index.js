import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './reducks/store/store';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import * as History from 'history';

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <BrowserRouter>
      <App />
    </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
