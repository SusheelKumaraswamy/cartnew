import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Component1 from './component1'
import reportWebVitals from './reportWebVitals';
import Header from './headerContent';
ReactDOM.render(
  <React.StrictMode>
    <Component1 />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
