import React from 'react';
import './App.css';
import {Home, About, Contact} from './components';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/content" component={Contact} />
  </div>
);

export default App;
