import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error from './components/PageNotFound';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch> 
            <Route path='/' component={About} exact />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route component={Error} />
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
