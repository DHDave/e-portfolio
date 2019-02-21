import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'; 
import About from './components/Pages/About/About';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';
import Error from './components/Pages/PageNotFound/PageNotFound';
import Navigation from './components/Navigation/Navigation';
import './App.css';


// import _img from './.jpg';

class App extends Component {
  render() {
    return (
       <HashRouter>
        <div className='App'>
          <Navigation />
          <Switch> 
            <Route path='/' component={About} exact />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
