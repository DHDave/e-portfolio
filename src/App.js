import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'; 
import About from './components/Pages/About/About';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';
import Error from './components/Pages/PageNotFound/PageNotFound';
import Courses from './components/Pages/Courses/Courses';
import SideBar from "./components/BurgerMenu/sidebar";
import "./components/BurgerMenu/styles.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <SideBar />
        <HashRouter>
          <div className='App'>
            <Switch> 
              <Route path='/' component={About} exact />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/contact' component={Contact} />
              <Route path='/courses' component={Courses} />
              <Route component={Error} />
            </Switch>
          </div>
        </HashRouter>
      </div>
      
    );
  }
}

export default App;