import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import SearchScreen from "./components/SearchScreen/SearchScreen"
import ResultsScreen  from "./components/ResultsScreen/ResultsScreen"

class App extends Component {
  render() {
    return (
     <Router>
      <div>
          <Navbar/>
          <SearchScreen/>
          <ResultsScreen/>
          <Route exact path="/get" component={SearchScreen}/>
          
        </div>
        </Router>

      // <div className="App">
    
      //   {* <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p> */}
      // // </div>
    );
  }
}

export default App;
