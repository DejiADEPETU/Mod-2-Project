import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import XDX from './components/XDX';
import NavBar from './components/layout/NavBar';
import SearchBox from './components/layout/SearchBox';
import './App.css';
import axios from 'axios';
class Overview extends Component{    //  SearchResults ==>  SerachOverview  {BetterName}
  render() {
    return (
      // <React.Fragment>
      <Router>
        <div className="Overview">
          <div className="container">
            <Route exact path="/" render={props=>(


              <React.Fragment>
                <Header/>
                <NavBar/>
                {/* <UserData/> */}
                <LightBox/>
                {/* <OtherWorksBy<Tag> */}
                <Realatedworks/>
              </React.Fragment>


            )}/>
            <Route path="/search" components={SearchBox}/>
          </div>
        </div>
        {/* <SearchBox/> */}
      </Router>
      {/* </React.Fragment> */}
    );
  } 
}

export default Overview;
