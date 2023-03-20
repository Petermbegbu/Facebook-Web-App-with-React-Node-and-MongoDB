import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import {createStore, applyMiddleware, compose} from "redux";
import {persistStore} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import { ThemeContextElement } from './contextAPI';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk, logger)));
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContextElement>
          <App />
        </ThemeContextElement>
      </PersistGate>
  </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

