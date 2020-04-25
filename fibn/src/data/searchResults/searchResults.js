import React from 'react';
import './App.css';
import axios from 'axios';
import SearchResult from 'SearchResult'
// import  from ''
import AutoTextBox from 'AutoTextBox'

class SearcResults extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            apiResponse: [],
        }
    }
    
    async componentDidMount(){
        try {
            const res = await axios.get(`http://api.repo.nypl.org/api/v1/items/search?q=birds`);
            console.log(res.data, "API response");
            this.setState({apiResponse: res.data});
        } catch(e) {
            console.error(e);
        }
    }

  render() {
    return (
      <React.Fragment>
          <div className="searchResults">

                                        {console.log("this component caonnect with the NYPL api via axios"</h1>}
                    <SearchResult arrayofResult={this.state.aipResponse /* This is an Array containing object of searchResults stored in state gotten the the NYPL api*/}

          </div>
      </React.Fragment>
    }
  }
}     
export default searcResults;
