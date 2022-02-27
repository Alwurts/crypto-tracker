import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-2RWBMZXK45"; // YOUR_OWN_TRACKING_ID

ReactDOM.render(
  <BrowserRouter>
    
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);



ReactGA.initialize(TRACKING_ID);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
