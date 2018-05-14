import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/layout/SideBar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Collections from './components/pages/Collections';
import withRoot from './withRoot';

function App() {
  return (
    <Router>
      <SideBar>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/collections" component={Collections} />
      </SideBar>
    </Router>
  );
}

export default withRoot(App);
