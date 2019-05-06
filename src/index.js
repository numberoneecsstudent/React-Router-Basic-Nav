import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from '../src/App'
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router} from 'react-router-dom';

  

  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );