import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/layout/SideBar';
import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';

export default function App() {
  return (
    <Router>
      <div>
        <SideBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

