import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import AutoTextBox from './components/layout/AutoTextBox';
import LightBox from './components/LightBox';
import About from './components/pages/About';
import './styles/App.scss';
import axios from 'axios';
import ModalInput from './components/ModalInput'

class App extends Component{
  render() {
    return (
      // <React.Fragment>
      <Router>
        <div className="App">
          <div className="ModalInput">
            <ModalInput/>
          </div>
          <AutoTextBox/>
          <LightBox/>
          <sameOrigins/> { /* An  index of works from the same source: e.g. Author = Origin */}
          <sameCategories/>  { /* An  index of similar works. e.g Volumes on the same Topic */}
          {/* <NavBar/> */}
        </div>
      </Router>
      // {/* </React.Fragment> */}
    );
  } 
}

export default App;
