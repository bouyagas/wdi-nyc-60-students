import React from 'react';
import ReactDOM from 'react-dom';
import AppOne from './components/AppOne/AppOne';
import AppTwo from './components/AppTwo/AppTwo';
import AppThree from './components/AppThree/AppThree';
import AppFour from './components/AppFour/AppFour';


import './index.css';

// ReactDOM.render(
//   <AppOne />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <AppTwo />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <AppThree />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <AppOne />
    <AppTwo />
    <AppThree />
    <AppFour />
  </div>,
  document.getElementById('root')
);
