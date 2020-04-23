import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './components/pages/About';
import uQuerry from '../uQuerry/uQuerry';
import './App.css';
import axios from 'axios';

class searcResults extends Component{

    // input => uQuerry   ****  how?

    state = {
    results:[],             //Stores the data pulled from the api
  }


  componentDidMount(){
    axios.get(`http://api.repo.nypl.org/api/v1/items/search?q=birds`).then(res=>{
      console.log(res);
      this.setState({results: res.data})   //data Stored.
    })
  }


  render() {
    return (
      <React.Fragment>
      <ul>
        {this.state.results.map(result=><il>{result.title}</il>)}
      </ul>
      </React.Fragment>
    }
  }
}     
export default searcResults;
