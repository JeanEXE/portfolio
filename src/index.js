import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './helpers/ScrollToTop';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import ReactGA from "react-ga4"

console.log('>>>>  ', process.env.REACT_APP_DALE_KEY)

ReactGA.initialize(process.env.REACT_APP_FIREBASE_KEY)

const root = ReactDOMClient.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
