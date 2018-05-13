import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link href="/" to="/">Home</Link>
        </li>
        <li>
          <Link href="/about" to="/about">About</Link>
        </li>
        <li>
          <Link href="/topics" to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;
