import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import XDX from './components/XDX';
import NavBar from './components/layout/NavBar';
import SearchBox from './components/layout/SearchBox';
import About from './components/pages/About';
import './styles/App.scss';
import axios from 'axios';
// import uQuerry from './data/uQuerry'

class App extends Component{
  render() {
    return (
      // <React.Fragment>
      <Router>
        <div className="App">
          <div className="container">
          <NavBar/>
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <h3>WELCOME TO</h3>
                <h1>fibn</h1>
                <h6>find inspiring books now</h6>
              </React.Fragment>
            )}/>
            <Route path="/search" components={SearchBox}/>
          </div>
        </div>
        <SearchBox/>
      </Router>
      // {/* </React.Fragment> */}
    );
  } 
}

export default App;
