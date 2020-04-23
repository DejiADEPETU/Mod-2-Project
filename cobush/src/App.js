import React from 'react';
import logo from './logo.svg';
import './App.css';


import axios from 'axios';
class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <NavrBar/>  //   Was trying to link the navigttion links...  accross components..
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <ToDos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" components={About}/>
          </div>
        </div>
      </Router>
    );
  } 
}

export default App;