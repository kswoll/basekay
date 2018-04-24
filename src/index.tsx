import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { enthusiasm } from './reducers/index'
import { IStoreState } from './types';

const reducers = combineReducers<IStoreState>({
    enthusiasmState: enthusiasm
});

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

