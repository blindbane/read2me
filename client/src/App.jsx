import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNav from './components/AppNav';
import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';

export default function App() {
  return (
    <Router>
      <div>
        <AppNav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

