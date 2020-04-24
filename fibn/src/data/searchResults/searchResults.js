import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './components/pages/About';
import uQuerry from '../uQuerry/uQuerry';
import './App.css';
import axios from 'axios';

class searcResults extends Component{
    state = {
    results:[],             //Stores the data pulled from the api
  }

    async componentDidMount(){
        try {
            const res = await axios.get(`http://api.repo.nypl.org/api/v1/items/search?q=birds`);
            console.log(res.data, "API response");
        } catch(e) {
            console.error(e);
        }
    }

  render() {
    return (
      <React.Fragment>
          {








          }
      </React.Fragment>
    }
  }
}     
export default searcResults;
