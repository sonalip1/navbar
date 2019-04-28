import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
require('./styles/styles.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar'

ReactDOM.render(<NavBar />, document.getElementById('main'));

