import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


ReactDOM.render( < React.StrictMode >
    <
    App > < /App> </React.StrictMode > ,
    document.getElementById('root')
);